import { copy } from "../src/copy.js";
import { localePaths } from "../src/locales.js";

const productionOrigin = "https://park-alot-phi.vercel.app";

export function siteOrigin(env) {
  const hostname = env.VITE_SITE_URL || env.VERCEL_PROJECT_PRODUCTION_URL || productionOrigin;
  return new URL(/^https?:\/\//.test(hostname) ? hostname : `https://${hostname}`).origin;
}

const descriptions = {
  he: "PARKO היא אפליקציה למציאת והזמנת חניה זמינה במהירות, עם ניווט חכם, תזכורות ועדכוני זמינות בזמן אמת.",
  en: "Find and reserve parking near your destination with PARKO. Check availability, get directions, and set parking reminders in the app.",
};

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export function addPageMetadata(html, language, origin) {
  const { direction, pageTitle } = copy[language];
  const canonical = `${origin}${localePaths[language]}`;
  const image = `${origin}/og-image.png`;
  const imageAlt = language === "he"
    ? "PARKO - מוצאים חניה בלי סיבובים, תצוגת עמוד הבית"
    : "Screenshot of the PARKO Hebrew home page";
  const meta = (attribute, key, value) =>
    `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  const links = Object.entries({ ...localePaths, "x-default": localePaths.he }).map(
    ([locale, path]) => `<link rel="alternate" hreflang="${locale}" href="${origin}${path}" />`,
  );

  return html
    .replace('<html lang="he" dir="rtl">', `<html lang="${language}" dir="${direction}">`)
    .replace("<!-- page-metadata -->", [
      `<title>${escapeHtml(pageTitle)}</title>`,
      meta("name", "description", descriptions[language]),
      `<link rel="canonical" href="${canonical}" />`,
      ...links,
      ...Object.entries({
        "og:locale": language === "he" ? "he_IL" : "en_US",
        "og:locale:alternate": language === "he" ? "en_US" : "he_IL",
        "og:type": "website",
        "og:site_name": "PARKO",
        "og:title": pageTitle,
        "og:description": descriptions[language],
        "og:url": canonical,
        "og:image": image,
        "og:image:width": "2160",
        "og:image:height": "2127",
        "og:image:type": "image/png",
        "og:image:alt": imageAlt,
      }).map(([key, value]) => meta("property", key, value)),
      ...Object.entries({
        "twitter:card": "summary_large_image",
        "twitter:title": pageTitle,
        "twitter:description": descriptions[language],
        "twitter:image": image,
        "twitter:image:alt": imageAlt,
      }).map(([key, value]) => meta("name", key, value)),
    ].join("\n    "));
}

export function renderSitemap(origin) {
  const urls = Object.values(localePaths).map(
    (path) => `  <url><loc>${origin}${path}</loc></url>`,
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
