import React from "react";
import { Seo } from "../lib/seo";
import { Navbar7 } from "../components/Navbar7";
import { Logo3 } from "../components/Logo3";
import { Testimonial6 } from "../components/Testimonial6";
import { Layout298_1 } from "../components/Layout298_1";
import { Footer11 } from "../components/Footer11";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn why banks choose Mero for compliant, commodity-backed stablecoin infrastructure and cross-border settlement."
        path="/about"
      />
      <Navbar7 />
      <Logo3 />
      <Testimonial6 />
      <Layout298_1 />
      <Footer11 />
    </>
  );
}
