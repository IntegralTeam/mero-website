import React from "react";
import { Seo } from "../lib/seo";
import { Navbar7 } from "../components/Navbar7";
import { Header36 } from "../components/Header36";
import { Layout298 } from "../components/Layout298";
import { Layout356 } from "../components/Layout356";
import { Faq7 } from "../components/Faq7";
import { Footer11 } from "../components/Footer11";

export function PlatformPage() {
  return (
    <>
      <Seo
        title="Platform"
        description="Explore the Mero platform: USDM issuance, regulated yield deployment, and institutional-grade redemption workflows."
        path="/platform"
      />
      <Navbar7 />
      <Header36 />
      <Layout298 />
      <Layout356 />
      <Faq7 />
      <Footer11 />
    </>
  );
}
