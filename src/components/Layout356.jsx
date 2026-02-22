"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { MaterialIcon } from "./MaterialIcon";
import placeholder2 from "../assets/PlaceholderImage2.png";
import placeholder3 from "../assets/PlaceholderImage3.png";
import placeholder4 from "../assets/PlaceholderImage4.png";

export function Layout356() {
  return (
    <section id="relume" className="bg-[#F2F2F2]">
      <div className="sticky top-0">
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-border-primary bg-[#F2F2F2] pb-8 md:pb-14 lg:sticky lg:pb-0 top-0 lg:mb-32">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 font-semibold md:mr-6 md:text-md">
                    Mint
                  </span>
                  <h1 className="font-semibold md:text-md">Issue USDM</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Issuance</p>
                      <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-[60px] lg:text-[60px]">
                        Banks mint USDM backed by commodity reserves
                      </h2>
                      <p className="md:text-md">
                        Deposit commodity collateral into Mero's institutional
                        vaults. Receive USDM tokens at 1:1 parity, fully backed
                        and ready to deploy.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Mint" variant="secondary">
                          Mint
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
                    <div className="relative">
                      <img
                        src={placeholder2}
                        className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-border-primary bg-[#F2F2F2] pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-16 lg:-mt-16 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 font-semibold md:mr-6 md:text-md">
                    Deploy
                  </span>
                  <h1 className="font-semibold md:text-md">Earn yield</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Issuance</p>
                      <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-[60px] lg:text-[60px]">
                        Deploy
                      </h2>
                      <p className="md:text-md">
                        USDM flows into regulated yield products earning 5-15% APY through trusted partners like BlackRock BUIDL and Franklin Templeton BENJI.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Mint" variant="secondary">
                          Mint
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
                    <div className="relative">
                      <img
                        src={placeholder3}
                        className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-border-primary bg-[#F2F2F2] pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-32 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 font-semibold md:mr-6 md:text-md">
                    Convert back
                  </span>
                  <h1 className="font-semibold md:text-md">Redemption</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Issuance</p>
                      <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-[60px] lg:text-[60px]">
                        Redeem
                      </h2>
                      <p className="md:text-md">
                        Banks redeem USDM for underlying commodity reserves anytime. No lock-in periods. Full transparency and control over capital.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Mint" variant="secondary">
                          Mint
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
                    <div className="relative">
                      <img
                        src={placeholder4}
                        className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </section>
  );
}
