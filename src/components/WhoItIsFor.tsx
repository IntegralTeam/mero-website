import { Icon, type IconName } from "./icons";
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
    <section id="who-it-is-for" className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="container px-[5%]">
        <div className="mx-auto mb-14 max-w-3xl md:mb-16">
          <SectionHeading eyebrow="Institutions only" title="Who it is for" align="center" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="group relative overflow-hidden border border-[#0b1c2d]/10 bg-gradient-to-br from-white to-[#f3faf9] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#00c2a8]/40 hover:shadow-xl hover:shadow-[#00c2a8]/5 md:p-12"
            >
              <span className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#00c2a8] to-[#00c2a8]/0" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00c2a8]/[0.06] transition-transform duration-700 group-hover:scale-125" />
              <div className="relative mb-8 flex h-14 w-14 items-center justify-center bg-[#0b1c2d] text-[#00c2a8]">
                <Icon name={audience.icon} className="h-7 w-7" />
              </div>
              <h3 className="relative mb-4 text-xl font-bold text-[#0b1c2d] md:text-2xl">{audience.title}</h3>
              <p className="relative leading-relaxed text-[#0b1c2d]/65">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
