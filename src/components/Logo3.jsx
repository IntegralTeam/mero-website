"use client";

import React from "react";

export function Logo3() {
  const logos = [
    { src: "https://cdn.simpleicons.org/linux/ffffff", alt: "Linux" },
    { src: "https://cdn.simpleicons.org/uml/ffffff", alt: "UML" },
    { src: "https://cdn.simpleicons.org/clickup/ffffff", alt: "ClickUp" },
    { src: "https://cdn.simpleicons.org/duolingo/ffffff", alt: "Duolingo" },
    { src: "https://cdn.simpleicons.org/apple/ffffff", alt: "Apple" },
    { src: "https://cdn.simpleicons.org/9gag/ffffff", alt: "9GAG" },
  ];

  return (
    <section id="relume" className="overflow-hidden py-12 md:py-16 lg:py-20 bg-black">
      <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2] text-white">
          Trusted by leading financial institutions
        </h1>
      </div>
      <div className="logo-marquee pt-7 md:pt-0">
        {[0, 1].map((lane) => (
          <div
            key={`lane-${lane}`}
            className="logo-marquee-group"
            aria-hidden={lane === 1 ? "true" : undefined}
          >
            {logos.map((logo, index) => (
              <img
                key={`${lane}-${logo.alt}-${index}`}
                className="logo-marquee-item"
                src={logo.src}
                alt={`${logo.alt} logo`}
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`${lane}-repeat-${logo.alt}-${index}`}
                className="logo-marquee-item"
                src={logo.src}
                alt=""
                aria-hidden="true"
              />
            ))}
            <div />
          </div>
        ))}
      </div>
    </section>
  );
}
