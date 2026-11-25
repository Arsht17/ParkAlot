import { mkdir, mkdtemp, readFile, rm, rmdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { build, loadEnv } from "vite";
import { localePaths } from "../src/locales.js";
import { addPageMetadata, renderSitemap, siteOrigin } from "./seo.js";

const origin = siteOrigin(loadEnv("production", process.cwd(), ""));
const template = await readFile("dist/index.html", "utf8");
const renderDir = await mkdtemp(join(process.cwd(), "node_modules", ".parko-render-"));
const renderEntry = join(renderDir, "render.mjs");

try {
  await build({
    build: {
      ssr: "src/entry-server.jsx",
      outDir: renderDir,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: "render.mjs" } },
    },
  });
  const { render } = await import(pathToFileURL(renderEntry).href);

  for (const [locale, path] of Object.entries(localePaths)) {
    const directory = join("dist", path.slice(1));
    const page = addPageMetadata(template, locale, origin)
      .replace('<div id="root"></div>', () => `<div id="root">${render(locale)}</div>`);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), page);
  }

  await Promise.all([
    writeFile("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`),
    writeFile("dist/sitemap.xml", renderSitemap(origin)),
  ]);
  process.stdout.write("Pre-rendered Hebrew and English pages, robots.txt, and sitemap.xml.\n");
} finally {
  await rm(renderEntry, { force: true });
  await rmdir(renderDir);
}
