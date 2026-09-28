import { Icon, type IconName } from "./icons";
import { SectionHeading } from "./SectionHeading";

const INSTITUTIONS: { icon: IconName; label: string }[] = [
  { icon: "pledge", label: "Custodians" },
  { icon: "lender", label: "Depositories" },
  { icon: "monitor", label: "Exchanges" },
];

export function RegulatedInfrastructure() {
  return (
    <section
      id="regulated-infrastructure"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f3faf9] py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,194,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,168,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(0,194,168,0.14) 0%, transparent 65%)" }}
      />

      <div className="container relative px-[5%]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Built on regulated infrastructure"
              title="Mero works through the institutions that already hold the metal"
            />
          </div>
          <p className="text-lg leading-relaxed text-[#0b1c2d]/70 md:text-xl lg:col-span-5">
            Title and the lender's security are recorded by licensed custodians, depositories and
            exchanges, not by Mero. Mero holds no client assets, keys or cash, does not lend, and never
            instructs a depository.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-20 md:gap-6">
          {INSTITUTIONS.map((institution, index) => (
            <div
              key={institution.label}
              className="group relative flex items-center gap-5 overflow-hidden border border-[#00c2a8]/20 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00c2a8]/50 hover:shadow-lg md:flex-col md:items-start md:gap-8 md:p-8"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#00c2a8]/10 text-[#00c2a8] ring-1 ring-[#00c2a8]/25">
                <Icon name={institution.icon} className="h-7 w-7" />
              </span>
              <div className="flex flex-1 items-baseline justify-between gap-4 md:w-full">
                <span className="font-display text-xl text-[#0b1c2d] md:text-2xl">{institution.label}</span>
                <span className="text-xs font-semibold tracking-wider text-[#0b1c2d]/30">
                  {`0${index + 1}`}
                </span>
              </div>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00c2a8] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-5 border-l-2 border-[#00c2a8] bg-[#0b1c2d] px-6 py-6 sm:flex-row sm:items-center md:mt-6 md:px-8">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#00c2a8]/15 text-[#00c2a8]">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
          </span>
          <p className="text-lg leading-relaxed text-white/80">
            Our first market is <span className="font-semibold text-white">GIFT IFSC in India</span>, where
            the depository, the bullion exchange and bank lenders sit under a single regulator.
          </p>
        </div>
      </div>
    </section>
  );
}
