"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import logo from "../assets/PlaceholderImage.png";

export function Header36() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 lg:h-dvh overflow-hidden"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw]">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-[72px] lg:text-[84px]">
          Institutional stablecoin infrastructure for banks
        </h1>
        <p className="md:text-md">
          Mero enables banks to mint USD-denominated stablecoins backed 1:1 by
          commodity reserves. Deploy capital into regulated yield products
          earning 5-15% APY with zero FX conversion required.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Get started">Get started</Button>
          <Button title="Learn more" variant="secondary">
            Learn more
          </Button>
        </div>
      </div>
      <div>
        <img
          src={logo}
          alt="Relume placeholder image"
          className="w-full object-cover lg:h-dvh"
        />
      </div>
    </section>
  );
}
