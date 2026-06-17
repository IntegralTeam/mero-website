import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Seo } from "../lib/seo";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { ClientChannels } from "../components/ClientChannels";
import { Platform } from "../components/Platform";
import { Map } from "../components/Map";
import { Layout420 } from "../components/Layout420";
import { Layout356 } from "../components/Layout356";
import { InKindModel } from "../components/InKindModel";
import { GoldETFOverlay } from "../components/GoldETFOverlay";
import { AssetManagerMarketplace } from "../components/AssetManagerMarketplace";
import { ProcessSection } from "../components/ProcessSection";
import { Faq7 } from "../components/Faq7";
import { StayInformedSection } from "../components/StayInformedSection";
import { Footer11 } from "../components/Footer11";

export function HomePage() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const isChineseRoute = pathname.startsWith("/cn");
  const seoPath = isChineseRoute ? "/cn/" : "/";

  return (
    <>
      <Seo
        title={t("seo.homeTitle")}
        description={t("seo.homeDescription")}
        path={seoPath}
        locale={i18n.language}
      />
      <Navbar />
      <Header />
      <ClientChannels />
      <Platform />
      <Layout420 />
      <Layout356 />
      <InKindModel />
      <ProcessSection />
      <GoldETFOverlay />
      <AssetManagerMarketplace />
      <Map />
      <Faq7 />
      <StayInformedSection />
      <Footer11 />
    </>
  );
}
