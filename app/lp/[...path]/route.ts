import { readFile } from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const lpRoot = path.join(process.cwd(), "mapify-lp");

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".php": "text/html; charset=utf-8",
};

const helpLabels: Record<string, string> = {
  "maps-api": "Maps API",
  gis: "GIS Platform",
  "custom-gis": "Custom GIS Project",
  routing: "Routing & Optimization",
  "on-premise": "On-Premise Deployment",
  fleet: "Fleet Management System",
  ekyc: "NG eKYC / Identity Verification",
  "field-force": "Field Force Tracking",
  "last-mile": "Last Mile Delivery System",
  "proof-delivery": "Proof of Delivery System",
  other: "Other",
};

type LandingSmtpConfig = {
  host: string;
  port: number;
  encryption: string;
  user: string;
  pass: string;
  from: string;
  fromName: string;
  recipients: string[];
};

const fallbackLandingSmtpConfig: LandingSmtpConfig = {
  host: "mail.mapifyit.com",
  port: 587,
  encryption: "tls",
  user: "noreply@system.mapifyit.com",
  pass: "-,55,sSinqUinGEnTErWaRmtElIChIOnsTICe",
  from: "noreply@system.mapifyit.com",
  fromName: "MapifyIt Support",
  recipients: ["narius@mapifyit.com", "sr@stockit.ae","hassan@mapifyit.com"]
};

function clean(value: FormDataEntryValue | null, max = 500) {
  return String(value ?? "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function jsonError(message: string, status = 400) {
  return Response.json({ ok: false, message }, { status });
}

function formValue(formData: FormData, keys: string[], max = 500) {
  for (const key of keys) {
    const value = clean(formData.get(key), max);
    if (value !== "") {
      return value;
    }
  }
  return "";
}

function readPhpStringConfig(config: string, key: string) {
  const quotedPattern = new RegExp(`['"]${key}['"]\\s*=>\\s*['"]([^'"]*)['"]`);
  const quotedValue = config.match(quotedPattern)?.[1];
  if (quotedValue !== undefined) {
    return quotedValue;
  }

  const rawPattern = new RegExp(`['"]${key}['"]\\s*=>\\s*([^,\\r\\n]+)`);
  return config.match(rawPattern)?.[1]?.trim() ?? "";
}

function readPhpArrayConfig(config: string, key: string) {
  const arrayPattern = new RegExp(`['"]${key}['"]\\s*=>\\s*\\[([^\\]]*)\\]`, "s");
  const arrayMatch = config.match(arrayPattern);

  if (!arrayMatch) {
    const singleValue = readPhpStringConfig(config, key);
    return singleValue ? [singleValue] : [];
  }

  return [...arrayMatch[1].matchAll(/['"]([^'"]+)['"]/g)].map((match) => match[1]);
}

async function loadLandingSmtpConfig(): Promise<LandingSmtpConfig> {
  let config = "";

  try {
    config = await readFile(path.join(lpRoot, "config.php"), "utf8");
  } catch {
    return fallbackLandingSmtpConfig;
  }

  const recipients = readPhpArrayConfig(config, "to_email");
  const host = readPhpStringConfig(config, "smtp_host");
  const user = readPhpStringConfig(config, "smtp_username");
  const pass = readPhpStringConfig(config, "smtp_password");

  if (
    host === "" ||
    host === "smtp.example.com" ||
    user === "" ||
    user === "your-smtp-user@example.com" ||
    pass === "" ||
    pass === "your-smtp-password"
  ) {
    return fallbackLandingSmtpConfig;
  }

  if (recipients.length === 0) {
    return fallbackLandingSmtpConfig;
  }

  return {
    host,
    port: Number(readPhpStringConfig(config, "smtp_port")) || 587,
    encryption: readPhpStringConfig(config, "smtp_encryption"),
    user,
    pass,
    from: readPhpStringConfig(config, "from_email"),
    fromName: readPhpStringConfig(config, "from_name"),
    recipients,
  };
}

function rewriteHtml(html: string) {
  return html
    .replaceAll('href="styles.css"', 'href="/lp/styles.css"')
    .replaceAll('href="assets/', 'href="/lp/assets/')
    .replaceAll('src="assets/', 'src="/lp/assets/')
    .replaceAll('src="script.js"', 'src="/lp/script.js"')
    .replaceAll('href="index.php"', 'href="/lp"')
    .replaceAll('fetch("send-demo.php"', 'fetch("/lp/send-demo.php"')
    .replaceAll('window.location.href = "thank-you.php"', 'window.location.href = "/lp/thank-you.php"');
}

function rewriteScript(script: string) {
  return script
    .replace("const CONTACT_API = 'api/contact.php';", "const CONTACT_API = '/lp/api/contact.php';")
    .replace("const THANK_YOU_URL = 'thank-you.php';", "const THANK_YOU_URL = '/lp/thank-you.php';");
}

function resolveLpPath(parts: string[]) {
  const requested = path.normalize(path.join(lpRoot, ...parts));

  if (requested !== lpRoot && !requested.startsWith(`${lpRoot}${path.sep}`)) {
    return null;
  }

  return requested;
}

async function handleContact(request: Request) {
  if (request.method !== "POST") {
    return jsonError("Method not allowed", 405);
  }

  const formData = await request.formData();

  if (clean(formData.get("website")) !== "") {
    return Response.json({ ok: true, message: "Thank you" });
  }

  let helpType = formValue(formData, ["helpType", "topic", "demoTopic"], 64);
  let fullName = formValue(formData, ["fullName", "fullname", "name", "your-name"], 200);
  const firstName = formValue(formData, ["firstName", "first_name", "fname"], 100);
  const lastName = formValue(formData, ["lastName", "last_name", "lname"], 100);
  const email = formValue(formData, ["email", "emailAddress", "your-email"], 254);
  const rawPhone = formValue(formData, ["phone", "phoneNumber", "telephone", "mobile"], 32);
  const phone = rawPhone.replace(/\D/g, "");
  const message = formValue(formData, ["message", "comments", "details"], 500);
  const source = formValue(formData, ["source"], 32);

  if (fullName === "") {
    fullName = `${firstName} ${lastName}`.trim();
  }

  if (fullName === "") {
    fullName = "Website lead";
  }

  if (!email) {
    return jsonError("Please enter your email address.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Please enter a valid email address.");
  }

  if (phone !== "" && !/^\d{10}$/.test(phone)) {
    return jsonError("Please enter exactly 10 digits for phone number.");
  }

  if (helpType === "") {
    helpType = "other";
  }

  if (!helpLabels[helpType]) {
    return jsonError("Invalid topic selected.");
  }

  const helpLabel = helpLabels[helpType];
  const sourceLabel = source === "hero" ? "Hero form" : source === "modal" ? "Popup form" : source || "website";
  const messageLabel = message || "-";
  const smtpConfig = await loadLandingSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.encryption === "ssl",
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const html = `
    <h2>New contact request</h2>
    <p><strong>Source:</strong> ${escapeHtml(sourceLabel)}</p>
    <p><strong>Topic:</strong> ${escapeHtml(helpLabel)}</p>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(messageLabel).replaceAll("\n", "<br>")}</p>
  `;

  await transporter.sendMail({
    from: smtpConfig.fromName ? `${smtpConfig.fromName} <${smtpConfig.from}>` : smtpConfig.from,
    to: smtpConfig.recipients,
    replyTo: email,
    subject: `MapifyIt lead: ${helpLabel} - ${fullName}`,
    text: [
      "New contact request",
      "",
      `Source: ${sourceLabel}`,
      `Topic: ${helpLabel}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      "",
      "Message:",
      messageLabel,
    ].join("\n"),
    html,
  });

  return Response.json({ ok: true, message: "Thank you! We will be in touch soon." });
}

async function handleDemoRequest(request: Request) {
  if (request.method !== "POST") {
    return Response.json(
      { success: false, message: "Method not allowed." },
      { status: 405 },
    );
  }

  let input: Record<string, unknown> = {};

  try {
    input = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 },
    );
  }

  const fullName = clean(String(input.fullName ?? ""), 200);
  const email = clean(String(input.email ?? ""), 254);
  const companyName = clean(String(input.companyName ?? ""), 200);
  const phone = clean(String(input.phone ?? ""), 64);
  const demoType = clean(String(input.demoType ?? ""), 100);
  const message = clean(String(input.message ?? ""), 1000);
  const source = clean(String(input.source ?? "Website Form"), 100);

  if (fullName === "" || email === "" || phone === "" || demoType === "") {
    return Response.json(
      { success: false, message: "Please fill in all required fields." },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  const smtpConfig = await loadLandingSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.encryption === "ssl",
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const html = `
    <h2>New Request</h2>
    <p><strong>Source:</strong> ${escapeHtml(source)}</p>
    <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(companyName || "-")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Demo Type:</strong> ${escapeHtml(demoType)}</p>
    <p><strong>Message:</strong><br>${escapeHtml(message || "-").replaceAll("\n", "<br>")}</p>
  `;

  await transporter.sendMail({
    from: smtpConfig.fromName ? `${smtpConfig.fromName} <${smtpConfig.from}>` : smtpConfig.from,
    to: smtpConfig.recipients,
    replyTo: email,
    subject: `New Request - ${demoType}`,
    text: [
      "New Request",
      "",
      `Source: ${source}`,
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${companyName || "-"}`,
      `Phone: ${phone}`,
      `Demo Type: ${demoType}`,
      `Message: ${message || "-"}`,
    ].join("\n"),
    html,
  });

  return Response.json({
    success: true,
    message: "Thank you! Your demo request has been sent successfully.",
  });
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ path?: string[] }> },
) {
  const params = await context.params;
  const parts = params.path ?? [];

  if (parts.join("/") === "api/contact.php" || parts.join("/") === "send-demo.php") {
    return jsonError("Method not allowed", 405);
  }

  const filePath = resolveLpPath(parts);
  if (!filePath) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const extension = path.extname(filePath).toLowerCase();

    if (extension === ".php") {
      const html = await readFile(filePath, "utf8");
      return new Response(rewriteHtml(html), {
        headers: { "Content-Type": contentTypes[extension] },
      });
    }

    if (path.basename(filePath) === "script.js") {
      const script = await readFile(filePath, "utf8");
      return new Response(rewriteScript(script), {
        headers: { "Content-Type": contentTypes[".js"] },
      });
    }

    const file = await readFile(filePath);
    return new Response(new Uint8Array(file), {
      headers: {
        "Content-Type": contentTypes[extension] ?? "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

export async function POST(
  request: Request,
  context: { params: Promise<{ path?: string[] }> },
) {
  const params = await context.params;
  const routePath = (params.path ?? []).join("/");

  if (routePath === "api/contact.php") {
    try {
      return await handleContact(request);
    } catch (error) {
      console.error("MapifyIt landing contact error:", error);
      return jsonError("Could not send your message. Please call 888-980-7422.", 500);
    }
  }

  if (routePath === "send-demo.php") {
    try {
      return await handleDemoRequest(request);
    } catch (error) {
      console.error("MapifyIt landing demo error:", error);
      return Response.json(
        {
          success: false,
          message: "Unable to send your request right now. Please try again later.",
        },
        { status: 500 },
      );
    }
  }

  return jsonError("Method not allowed", 405);
}
