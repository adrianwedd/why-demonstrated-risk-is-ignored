import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const distDir = path.join(repoRoot, "dist");

if (!fs.existsSync(distDir)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

const linkRe = /href="([^"]+)"/g;
const fileRe = /src="([^"]+)"/g;

const basePrefix = process.env.LINKCHECK_BASE ?? "/why-demonstrated-risk-is-ignored/";

function collectHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectHtmlFiles(full));
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

function isExternal(url) {
  return /^https?:\/\//.test(url) || /^mailto:/.test(url);
}

function normalize(url) {
  const clean = url.split("#")[0].split("?")[0];
  return clean === "" ? "/" : clean;
}

function stripBasePrefix(url) {
  if (url === basePrefix) return "/";
  if (url.startsWith(basePrefix)) return `/${url.slice(basePrefix.length)}`;
  return url;
}

const errors = [];
const htmlFiles = collectHtmlFiles(distDir);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relFromDist = path.relative(distDir, file);
  const dir = path.dirname(relFromDist);

  const checkUrl = (rawUrl) => {
    if (isExternal(rawUrl)) return;
    const url = stripBasePrefix(normalize(rawUrl));
    if (url.startsWith("/")) {
      const target = path.join(distDir, url);
      const candidate = fs.existsSync(target) ? target : path.join(distDir, url, "index.html");
      if (!fs.existsSync(candidate)) errors.push(`${relFromDist}: broken link ${rawUrl}`);
      return;
    }
    const target = path.join(distDir, dir, url);
    const candidate = fs.existsSync(target) ? target : path.join(distDir, dir, url, "index.html");
    if (!fs.existsSync(candidate)) errors.push(`${relFromDist}: broken link ${rawUrl}`);
  };

  for (const re of [linkRe, fileRe]) {
    for (const m of html.matchAll(re)) checkUrl(m[1]);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`OK: ${htmlFiles.length} HTML files checked`);
