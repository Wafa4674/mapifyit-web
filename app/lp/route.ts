import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const lpRoot = path.join(process.cwd(), "mapify-lp");

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

export async function GET() {
  const html = await readFile(path.join(lpRoot, "index.php"), "utf8");

  return new Response(rewriteHtml(html), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
