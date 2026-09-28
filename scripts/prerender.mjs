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

const appHtml = render("/");
await fs.writeFile(templatePath, template.replace(placeholder, appHtml));
await fs.rm(ssrDir, { recursive: true, force: true });

console.log("Pre-rendered / into dist/index.html");
