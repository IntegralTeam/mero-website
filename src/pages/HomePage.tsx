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
import { Partners } from "../components/Partners";
import { Faq7 } from "../components/Faq7";
import { StayInformedSection } from "../components/StayInformedSection";
import { Footer11 } from "../components/Footer11";

export function HomePage() {
  return (
    <>
      <Seo
        title="Commodity Tokenisation Infrastructure at GIFT IFSC"
        description="Mero tokenises warehouse receipts for physical gold and commodities on Sui Network — enabling institutions to borrow USDC, earn yield, and deploy capital without converting the underlying asset to cash."
        path="/"
      />
      <Navbar />
      <Header />
      <ClientChannels />
      <Platform />
      <Map />
      <Layout420 />
      <Layout356 />
      <InKindModel />
      <GoldETFOverlay />
      <AssetManagerMarketplace />
      <ProcessSection />
      <Partners />
      <Faq7 />
      <StayInformedSection />
      <Footer11 />
    </>
  );
}
