export const localePaths = { he: "/", en: "/en/" };

export function getLocale(pathname) {
  return pathname === "/en" || pathname === localePaths.en ? "en" : "he";
}
