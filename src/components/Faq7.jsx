"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-[3.75rem] lg:text-[3.75rem]">
            FAQs
          </h2>
          <p className="md:text-md">
            Common questions about Mero, USDM, and how the platform works.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How is USDM backed?
            </h2>
            <p>
              Every USDM token is backed 1:1 by physical commodity reserves held
              in institutional vaults. Gold, copper, nickel, and gemstones
              provide real value and stability. Collateralization exceeds 126%,
              ensuring capital protection at all times.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What yield can banks earn?
            </h2>
            <p>
              USDM deployed through regulated yield products generates 5-15%
              APY. Banks choose partners like BlackRock BUIDL, Franklin
              Templeton BENJI, and Apollo ACRED based on risk and return
              preferences.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is USDM compliant?
            </h2>
            <p>
              Mero operates on Canton Network, a permissioned blockchain built
              for regulated financial institutions. Full audit trails,
              compliance reporting, and regulatory alignment are built into the
              platform.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can banks redeem USDM anytime?
            </h2>
            <p>
              Yes. Banks can redeem USDM for underlying commodity reserves at
              any time. No lock-in periods. Full transparency and control over
              capital.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Does USDM require FX conversion?
            </h2>
            <p>
              No. USDM is USD-denominated and settles directly across borders
              without foreign exchange conversion. Zero FX friction means faster
              settlement and lower costs.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to our institutional team.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
