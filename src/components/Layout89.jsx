"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { MaterialIcon } from "./MaterialIcon";
import logo from "../assets/PlaceholderImage.png";

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Global Reach</p>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-[3.75rem] lg:text-[3.75rem]">
              Emerging markets demand real solutions
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Explore Mero's target markets across the globe. Click any region
              on the interactive map to discover local market opportunities,
              regulatory landscape, and institutional demand for
              commodity-backed stablecoins.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore markets" variant="secondary">
                Explore markets
              </Button>
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<MaterialIcon name="chevron_right" />}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <img
          src={logo}
          className="w-full object-cover h-[738px]"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
