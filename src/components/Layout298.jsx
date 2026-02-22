"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { MaterialIcon } from "./MaterialIcon";

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#F2F2F2]">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-3xl md:mb-18 lg:mb-20">
            <p className="mb-3 text-center font-semibold md:mb-4">Platform</p>
            <h2 className="mb-5 text-center text-4xl leading-[1.2] font-bold md:mb-6 md:text-[3.75rem] lg:text-[3.75rem]">
              Built for institutional-grade security and compliance
            </h2>
            <p className="text-center md:text-md">
              Mero combines commodity-backed stablecoins with institutional
              yield infrastructure. Every USDM token is secured by real
              reserves and deployed through trusted partners.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <MaterialIcon name="partner_reports" size={48} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Regulated yield products
              </h3>
              <p className="text-center">
                Access 5-15% APY through BlackRock BUIDL, Franklin Templeton
                BENJI, and Apollo ACRED partnerships.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <MaterialIcon name="balance" size={48} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Over-collateralized reserves
              </h3>
              <p className="text-center">
                126% collateralization ratio ensures stability and protects bank
                capital at all times.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <MaterialIcon name="block" size={48} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Privacy-preserving blockchain
              </h3>
              <p className="text-center">
                Canton Network provides permissioned infrastructure built for
                regulated financial institutions.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <MaterialIcon name="euro" size={48} />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                No foreign exchange friction
              </h3>
              <p className="text-center">
                Zero FX conversion required. Settle directly in USD-backed
                stablecoins across borders.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Explore features" variant="secondary">
              Explore features
            </Button>
            <Button
              title="Arrow"
              variant="link"
              size="link"
              iconRight={<MaterialIcon name="chevron_right" />}
            >
              Arrow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
