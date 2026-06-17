import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { chineseLocale, defaultLocale, messages, type SupportedLocale } from "./messages";

export function resolveLocaleFromPath(pathname: string): SupportedLocale {
  return pathname.startsWith("/cn") ? chineseLocale : defaultLocale;
}

export function pathForLocale(locale: SupportedLocale, path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === chineseLocale) {
    return normalizedPath === "/" ? "/cn/" : `/cn${normalizedPath}`;
  }
  return normalizedPath;
}

export function initI18n(initialLocale: SupportedLocale): void {
  if (i18n.isInitialized) {
    return;
  }

  void i18n.use(initReactI18next).init({
    resources: messages,
    lng: initialLocale,
    fallbackLng: defaultLocale,
    interpolation: { escapeValue: false },
  });
}

export function syncDocumentLanguage(locale: SupportedLocale): void {
  document.documentElement.lang = locale;
}

export { chineseLocale, defaultLocale };
