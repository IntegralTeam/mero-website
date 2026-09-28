import { Icon, type IconName } from "./icons";
import { SectionHeading } from "./SectionHeading";

const CAPABILITIES: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Authenticate",
    description:
      "Every receipt is checked before anything is recorded: document forensics, bar numbers matched to the vault record, and the institution's own KYC clearance.",
  },
  {
    icon: "pledge",
    title: "Pledge",
    description:
      "The pledge is recorded by the custodian or depository that holds the metal. Mero's digital record exists only while that pledge exists.",
  },
  {
    icon: "monitor",
    title: "Monitor",
    description:
      "Collateral is valued against a recognised market price, with margin calls and cure windows run to the agreed terms.",
  },
  {
    icon: "enforce",
    title: "Enforce and reconcile",
    description:
      "On an uncured default, the lender enforces through the custodian or depository and an ordinary sale. Every step is reconciled and evidenced.",
  },
];

export function WhatMeroDoes() {
  return (
    <section id="what-mero-does" className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />
      <div className="container px-[5%]">
        <div className="mx-auto mb-14 max-w-3xl md:mb-20">
          <SectionHeading
            eyebrow="What Mero does"
            title="One operating layer for the whole collateral lifecycle"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#0b1c2d]/10 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#fafbfc] hover:shadow-lg md:p-10"
            >
              <div className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/20 transition-colors group-hover:text-[#00c2a8]/50">
                {`0${index + 1}`}
              </div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#00c2a8]/15 to-[#00c2a8]/5 text-[#00c2a8] ring-1 ring-[#00c2a8]/20 transition-transform duration-300 group-hover:scale-110">
                <Icon name={capability.icon} className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#0b1c2d] transition-colors duration-300 group-hover:text-[#00c2a8] md:text-xl">
                {capability.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#0b1c2d]/60">{capability.description}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00c2a8] to-[#00c2a8]/50 transition-all duration-500 ease-out group-hover:w-full" />
              <div className="absolute right-0 top-0 h-0 w-0 border-l-[24px] border-t-[24px] border-l-transparent border-t-[#00c2a8] opacity-0 transition-all duration-500 group-hover:opacity-[0.08]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
