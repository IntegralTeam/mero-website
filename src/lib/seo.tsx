import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Mero";
const BASE_URL = "https://www.mero.io";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  locale?: string;
};

export function Seo({ title, description, path = "/", locale = "en" }: SeoProps) {
  const canonical = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const ogLocale = locale === "zh-CN" ? "zh_CN" : "en_US";
  const htmlLang = locale === "zh-CN" ? "zh-CN" : "en";

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
