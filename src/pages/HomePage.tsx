import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { ProblemSection } from "../components/ProblemSection";
import { WhatMeroDoes } from "../components/WhatMeroDoes";
import { HowItWorks } from "../components/HowItWorks";
import { RegulatedInfrastructure } from "../components/RegulatedInfrastructure";
import { WhoItIsFor } from "../components/WhoItIsFor";
import { BusinessModel, Contact, Team, WhereWeAre } from "../components/CompanySections";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <ProblemSection />
        <WhatMeroDoes />
        <HowItWorks />
        <RegulatedInfrastructure />
        <WhoItIsFor />
        <BusinessModel />
        <WhereWeAre />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
