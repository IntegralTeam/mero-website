import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";
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
      "The depository records the pledge. The custodian holds and verifies the metal. The active collateral record is cancelled when the pledge is released; the audit history is retained under applicable recordkeeping requirements.",
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
      "On an uncured default, the lender enforces through the custodian and depository. The sale settles on a regulated exchange or as an ordinary sale. Every step is reconciled and evidenced.",
  },
];

export function WhatMeroDoes() {
  return (
    <section id="what-mero-does" className="relative overflow-hidden bg-[#f3f7f9] py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,28,45,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(11,28,45,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/3"
        style={{ background: "radial-gradient(ellipse, rgba(0,194,168,0.16) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 65%)" }}
      />

      <div className="container relative px-[5%]">
        <Reveal variant="up" className="mx-auto mb-14 max-w-3xl md:mb-20">
          <SectionHeading
            eyebrow="What Mero does"
            title="One operating layer for the whole collateral lifecycle"
            align="center"
          />
        </Reveal>

        <Reveal
          variant="zoom"
          delay={150}
          className="relative overflow-hidden bg-white shadow-[0_40px_80px_-40px_rgba(11,28,45,0.35)] ring-1 ring-[#0b1c2d]/5"
        >
          <div className="h-1.5 bg-gradient-to-r from-[#00c2a8] via-[#066253] to-[#C9A84C]" />
          <Reveal variant="stagger" className="grid grid-cols-1 gap-px bg-[#0b1c2d]/[0.07] md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((capability, index) => (
              <div
                key={capability.title}
                className="group relative bg-white p-8 transition-colors duration-500 hover:bg-[#f7fbfb] md:p-10"
              >
                <span className="pointer-events-none absolute right-6 top-4 font-display text-6xl font-light text-[#0b1c2d]/[0.05] transition-colors duration-500 group-hover:text-[#00c2a8]/15">
                  {`0${index + 1}`}
                </span>
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#00c2a8] to-[#066253] text-white shadow-[0_12px_24px_-10px_rgba(0,194,168,0.7)] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon name={capability.icon} className="h-7 w-7" />
                </div>
                <h3 className="relative mb-3 text-lg font-bold text-[#0b1c2d] md:text-xl">{capability.title}</h3>
                <p className="relative text-sm leading-relaxed text-[#0b1c2d]/60">{capability.description}</p>
              </div>
            ))}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
