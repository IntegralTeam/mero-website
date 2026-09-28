import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const AUDIENCES: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "lender",
    title: "Banks and financial institutions",
    description:
      "Deploy Mero under your own brand. You own the client relationship, set the lending terms and onboard clients under your own KYC and AML framework.",
  },
  {
    icon: "holders",
    title: "Institutional holders",
    description:
      "Mining corporates, bullion dealers and institutional and sovereign holders of vaulted gold access financing through their bank or institution. Mero's services are for institutions only.",
  },
];

export function WhoItIsFor() {
  return (
    <section id="who-it-is-for" className="emerald-gradient-bg relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)" }}
      />

      <div className="container relative px-[5%]">
        <Reveal variant="up" className="mx-auto mb-14 max-w-3xl md:mb-16">
          <SectionHeading eyebrow="Institutions only" title="Who it is for" align="center" tone="light" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience, index) => (
            <Reveal key={audience.title} variant="flip" delay={index * 180}>
              <div className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#00c2a8]/40 hover:bg-white/[0.07] md:p-12">
                <span className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#00c2a8] to-[#00c2a8]/0" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#00c2a8]/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#00c2a8] to-[#066253] text-white shadow-[0_12px_24px_-10px_rgba(0,194,168,0.7)]">
                  <Icon name={audience.icon} className="h-7 w-7" />
                </div>
                <h3 className="relative mb-4 text-xl font-bold text-white md:text-2xl">{audience.title}</h3>
                <p className="relative leading-relaxed text-white/65">{audience.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
