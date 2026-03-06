import { Seo } from "../lib/seo";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { ClientChannels } from "../components/ClientChannels";
import { Platform } from "../components/Platform";
import { Map } from "../components/Map";
import { Layout420 } from "../components/Layout420";
import { Layout356 } from "../components/Layout356";
import { InKindModel } from "../components/InKindModel";
import { ProcessSection } from "../components/ProcessSection";
import { Partners } from "../components/Partners";
import { Faq7 } from "../components/Faq7";
import { StayInformedSection } from "../components/StayInformedSection";
import { Footer11 } from "../components/Footer11";

export function HomePage() {
  return (
    <>
      <Seo
        title="Institutional Digital Asset Infrastructure"
        description="Mero is building institutional infrastructure intended to support commodity-backed USD-denominated digital asset workflows and target yield strategies."
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
      <ProcessSection />
      <Partners />
      <Faq7 />
      <StayInformedSection />
      <Footer11 />
    </>
  );
}
