import React from "react";
import { Button } from "@relume_io/relume-ui";

export function ReadySection() {
  return (
    <section id="ready" className="pb-16 md:pb-24 lg:pb-28">
      <div className="container overflow-hidden">
        <div className="py-14 text-center md:py-16 lg:py-20">
          <h2 className="mb-4 text-5xl font-bold leading-[1.2] md:text-[60px] lg:text-[60px]">
            Ready to get started
          </h2>
          <p className="mx-auto mb-6 max-w-2xl md:mb-8 md:text-md">
            Request a demo and see how Mero works for your institution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Button size="sm">Request demo</Button>
            <Button variant="secondary" size="sm">
              Contact us
            </Button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
          alt="Two colleagues discussing plans over a laptop"
          className="h-[28rem] w-full object-cover md:h-[38rem] lg:h-[48rem]"
        />
      </div>
    </section>
  );
}
