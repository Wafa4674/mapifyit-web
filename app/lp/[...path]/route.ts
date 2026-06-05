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
  routing: "Routing & Optimization",
  "on-premise": "On-Premise Deployment",
  fleet: "Fleet Management System",
  ekyc: "NG eKYC / Identity Verification",
  "field-force": "Field Force Tracking",
  other: "Other",
};

const countryLabels: Record<string, string> = {
  US: "United States",
  CA: "Canada",
  GB: "United Kingdom",
  IN: "India",
  AU: "Australia",
  other: "Other",
};

const smtpConfig = {
  host: "mail.mapifyit.com",
  port: 587,
  user: "noreply@system.mapifyit.com",
  pass: "-,55,sSinqUinGEnTErWaRmtElIChIOnsTICe",
  from: "MapifyIt Website <noreply@system.mapifyit.com>",
  recipient: "hassan@mapifyit.com",
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

function rewriteHtml(html: string) {
  return html
    .replaceAll('href="styles.css"', 'href="/lp/styles.css"')
    .replaceAll('href="assets/', 'href="/lp/assets/')
    .replaceAll('src="assets/', 'src="/lp/assets/')
    .replaceAll('src="script.js"', 'src="/lp/script.js"')
    .replaceAll('href="index.php"', 'href="/lp"');
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

  const helpType = clean(formData.get("helpType"), 64);
  const firstName = clean(formData.get("firstName"), 100);
  const lastName = clean(formData.get("lastName"), 100);
  const email = clean(formData.get("email"), 254);
  const country = clean(formData.get("country"), 64);
  const jobTitle = clean(formData.get("jobTitle"), 120);
  const company = clean(formData.get("company"), 200);
  const message = clean(formData.get("message"), 500);
  const source = clean(formData.get("source"), 32);

  if (!helpType || !firstName || !lastName || !email || !country || !company || !message) {
    return jsonError("Please fill in all required fields.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Please enter a valid email address.");
  }

  if (!helpLabels[helpType]) {
    return jsonError("Invalid topic selected.");
  }

  const helpLabel = helpLabels[helpType];
  const countryLabel = countryLabels[country] ?? country;
  const sourceLabel = source === "hero" ? "Hero form" : source === "modal" ? "Popup form" : source || "website";
  const fullName = `${firstName} ${lastName}`;

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: false,
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
    <p><strong>Country:</strong> ${escapeHtml(countryLabel)}</p>
    <p><strong>Job title:</strong> ${escapeHtml(jobTitle || "-")}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
  `;

  await transporter.sendMail({
    from: smtpConfig.from,
    to: smtpConfig.recipient,
    replyTo: email,
    subject: `MapifyIt lead: ${helpLabel} - ${company}`,
    text: [
      "New contact request",
      "",
      `Source: ${sourceLabel}`,
      `Topic: ${helpLabel}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Country: ${countryLabel}`,
      `Job title: ${jobTitle || "-"}`,
      `Company: ${company}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html,
  });

  return Response.json({ ok: true, message: "Thank you! We will be in touch soon." });
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ path?: string[] }> },
) {
  const params = await context.params;
  const parts = params.path ?? [];

  if (parts.join("/") === "api/contact.php") {
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

  if ((params.path ?? []).join("/") === "api/contact.php") {
    try {
      return await handleContact(request);
    } catch (error) {
      console.error("MapifyIt landing contact error:", error);
      return jsonError("Could not send your message. Please call 888-980-7422.", 500);
    }
  }

  return jsonError("Method not allowed", 405);
}
