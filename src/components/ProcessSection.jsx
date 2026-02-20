import React from "react";

export function ProcessSection() {
  return (
    <section id="process" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-4 text-sm font-semibold">Process</p>
          <h2 className="mb-5 text-5xl font-bold leading-[1.2] md:mb-6 md:text-[60px] lg:text-[60px]">
            How Mero works for
            <br />
            banks
          </h2>
          <p className="md:text-md">
            Four steps from onboarding to yield. Simple. Transparent.
            Institutional.
          </p>
        </div>

        <div className="mb-8 overflow-hidden md:mb-10 lg:mb-12">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
            alt="Two professionals reviewing financial information together"
            className="h-[22rem] w-full object-cover md:h-[32rem] lg:h-[40rem]"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 pt-8 md:grid-cols-3 md:pt-10">
          <div>
            <h3 className="mb-2 text-2xl font-bold leading-[1.2]">
              Complete onboarding
            </h3>
            <p>
              Banks integrate with Mero&apos;s permissioned network and establish
              commodity reserve accounts.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold leading-[1.2]">
              Deposit collateral
            </h3>
            <p>
              Transfer gold, copper, nickel, or gemstones into secure
              institutional vaults.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold leading-[1.2]">
              Mint and deploy
            </h3>
            <p>
              Receive USDM tokens and route capital into regulated yield
              products earning real returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
