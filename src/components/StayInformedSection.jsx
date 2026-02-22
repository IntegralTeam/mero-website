import React from "react";
import { Button } from "@relume_io/relume-ui";

export function StayInformedSection() {
  return (
    <section id="stay-informed" className="pb-16 md:pb-24 lg:pb-28">
      <div className="container overflow-hidden">
        <div className="px-[6%] py-14 text-center md:py-16 lg:py-20">
          <h2 className="mb-4 text-4xl font-bold leading-[1.2] md:text-[3.75rem] lg:text-[3.75rem]">
            Stay informed
          </h2>
          <p className="mx-auto mb-8 max-w-2xl md:text-md">
            Get updates on Mero, USDM, and institutional finance insights.
          </p>

          <form
            className="mx-auto max-w-xl"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 flex-1 border-0 border-b border-[#bdbdc2] bg-transparent px-0 text-base text-[#111111] outline-none placeholder:text-[#6b6b70]"
              />
              <Button size="sm" type="submit">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-left text-xs text-[#333333]">
              By clicking Subscribe you&apos;re confirming that you agree with our
              Terms and Conditions.
            </p>
          </form>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2200&q=80"
          alt="Team members in an office meeting"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
