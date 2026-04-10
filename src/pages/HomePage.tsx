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
  return (
    <>
      <Seo
        title="Commodity Tokenisation Infrastructure at GIFT IFSC"
        description="Mero provides commodity-backed digital asset infrastructure at GIFT IFSC, with first-release pilot workflows and roadmap pathways for expanded products and markets."
        path="/"
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
