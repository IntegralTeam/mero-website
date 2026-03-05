import { Seo } from "../lib/seo";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { ClientChannels } from "../components/ClientChannels";
import { Layout298 } from "../components/Layout298";
import { Map } from "../components/Map";
import { Layout420 } from "../components/Layout420";
import { Layout356 } from "../components/Layout356";
import { InKindModel } from "../components/InKindModel";
import { ProcessSection } from "../components/ProcessSection";
import { Partners } from "../components/Partners";
import { Testimonial6 } from "../components/Testimonial6";
import { Faq7 } from "../components/Faq7";
import { StayInformedSection } from "../components/StayInformedSection";
import { Footer11 } from "../components/Footer11";

export function HomePage() {
  return (
    <>
      <Seo
        title="Institutional Stablecoin Infrastructure"
        description="Mero helps banks mint commodity-backed USD stablecoins and deploy into regulated yield products across global markets."
        path="/"
      />
      <Navbar />
      <Header />
      <ClientChannels />
      <Layout298 />
      <Map />
      <Layout420 />
      <Layout356 />
      <InKindModel />
      <ProcessSection />
      <Partners />
      <Testimonial6 />
      <Faq7 />
      <StayInformedSection />
      <Footer11 />
    </>
  );
}
