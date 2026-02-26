import { Button } from "@relume_io/relume-ui";
import type { CSSProperties } from "react";
import usdmCoin from "../assets/USDM.png";
import { Link } from "react-router-dom";

const COINS = Array.from({ length: 7 }, (_, index) => index);

export function Header() {
  return (
    <section
      id="relume"
      className="header-gradient-bg grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 md:pt-24 lg:h-dvh lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw]">
        <h1 className="mb-5 text-5xl font-bold leading-[1.08] md:mb-6 md:text-[4.5rem] lg:text-[5.25rem]">
          <span className="hero-title-gradient">
            Institutional stablecoin infrastructure for banks
          </span>
        </h1>
        <p className="md:text-md">
          Mero enables banks to mint USD-denominated stablecoins backed by
          commodity reserves. Deploy capital into regulated yield products
          earning 5-15% APY with zero FX conversion required.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {/* <Button title="Get started">Get started</Button> */}
          <Button title="Learn more" variant="secondary">
            <Link to="/#platform">Learn more</Link>
          </Button>
        </div>
      </div>
      <div className="header-coin-scene">
        <div className="header-coin-stack" aria-hidden="true">
          {COINS.map((coinIndex) => (
            <img
              key={coinIndex}
              src={usdmCoin}
              alt=""
              className="header-coin"
              style={
                {
                  "--coin-index": coinIndex,
                  "--coin-stack-level": COINS.length - 1 - coinIndex,
                  "--coin-z": coinIndex + 1,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
