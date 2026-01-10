import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

type RenderedMarkdown = {
  html: string;
};

const projectRoot = process.cwd();

export function renderMarkdownFromRepoFile(repoRelativePath: string): RenderedMarkdown {
  const fullPath = path.join(projectRoot, repoRelativePath);
  const markdown = fs.readFileSync(fullPath, "utf8");
  const html = marked.parse(markdown) as string;
  return { html };
}
