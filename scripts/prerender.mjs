import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const placeholder = "<!--app-html-->";

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const templatePath = path.join(distDir, "index.html");
const template = await fs.readFile(templatePath, "utf8");

if (!template.includes(placeholder)) {
  throw new Error(`Missing ${placeholder} in dist/index.html`);
}

const pages = [
  { route: "/", file: path.join(distDir, "index.html") },
  {
    route: "/privacy",
    file: path.join(distDir, "privacy", "index.html"),
    title: "Privacy notice | Mero Technologies",
    description:
      "How Mero Technologies Ltd handles personal data on this website: enquiries you email, host logs, and the typeface request. No accounts or analytics.",
    canonical: "https://mero.tech/privacy",
  },
  {
    route: "/cookies",
    file: path.join(distDir, "cookies", "index.html"),
    title: "Cookie notice | Mero Technologies",
    description:
      "This Mero Technologies website does not set its own cookies. If analytics cookies are added later, the notice and consent will change first.",
    canonical: "https://mero.tech/cookies",
  },
];

for (const page of pages) {
  let html = template.replace(placeholder, render(page.route));
  if (page.title) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${page.canonical}" />`,
    );
    html = html.replaceAll(
      /(<meta\s[^>]*?(?:name|property)="(?:description|og:description|twitter:description)"[^>]*?content=")[^"]*(")/g,
      `$1${page.description}$2`,
    );
    html = html.replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/,
      `$1${page.title}$2`,
    );
    html = html.replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*("\s*\/?>)/,
      `$1${page.title}$2`,
    );
    html = html.replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/,
      `$1${page.canonical}$2`,
    );
  }
  await fs.mkdir(path.dirname(page.file), { recursive: true });
  await fs.writeFile(page.file, html);
  console.log(`Pre-rendered ${page.route} into ${path.relative(root, page.file)}`);
}

await fs.rm(ssrDir, { recursive: true, force: true });
