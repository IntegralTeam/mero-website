import logo from "../assets/logo-light.svg";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const INSTITUTIONS: { icon: IconName; label: string }[] = [
  { icon: "pledge", label: "Custodians" },
  { icon: "lender", label: "Depositories" },
  { icon: "monitor", label: "Exchanges" },
];

const MERO_FUNCTIONS = ["Authenticate", "Monitor", "Reconcile"];

function LayerLink() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <span className="flow-line-y h-8 w-px md:h-10" />
    </div>
  );
}

function LayerLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] ${className}`}>{children}</p>
  );
}

function InfrastructureStack() {
  return (
    <div className="hero-gradient-bg relative overflow-hidden p-6 shadow-[0_40px_80px_-40px_rgba(11,28,45,0.6)] md:p-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.22) 0%, transparent 65%)" }}
      />

      <Reveal variant="stagger" className="relative">
        <LayerLabel className="text-white/40">Lenders</LayerLabel>
        <div className="flex items-center gap-4 border border-white/10 bg-white/[0.04] px-5 py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/10 text-white/80">
            <Icon name="lender" className="h-5 w-5" />
          </span>
          <span className="font-display text-lg text-white">Banks and financial institutions</span>
        </div>

        <LayerLink />

        <div className="relative border border-[#00c2a8]/40 bg-[#00c2a8]/10 px-5 py-5 shadow-[0_0_40px_-8px_rgba(0,194,168,0.45)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <img src={logo} alt="Mero" width={96} height={24} className="h-6 w-auto" />
            <ul className="flex flex-wrap gap-2">
              {MERO_FUNCTIONS.map((fn) => (
                <li
                  key={fn}
                  className="border border-[#00c2a8]/30 bg-[#0b1c2d]/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7fe6d8]"
                >
                  {fn}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-white/55">Holds no client assets, keys or cash</p>
        </div>

        <LayerLink />

        <LayerLabel className="text-[#E8C96E]/70">Hold the metal and record title</LayerLabel>
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {INSTITUTIONS.map((institution) => (
            <div
              key={institution.label}
              className="flex flex-col items-center gap-3 border border-[#C9A84C]/30 bg-[#C9A84C]/[0.07] px-2 py-5 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-[#C9A84C]/15 text-[#E8C96E]">
                <Icon name={institution.icon} className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 md:text-xs">
                {institution.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function RegulatedInfrastructure() {
  return (
    <section
      id="regulated-infrastructure"
      className="relative flex min-h-screen items-center overflow-hidden bg-white py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,194,168,0.10) 0%, transparent 65%)" }}
      />

      <div className="container relative px-[5%]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="left" className="lg:col-span-5">
            <SectionHeading
              eyebrow="Built on regulated infrastructure"
              title="Mero works through the institutions that already hold the metal"
            />
            <p className="mt-8 text-lg leading-relaxed text-[#0b1c2d]/70">
              Title and the lender's security are recorded by licensed custodians, depositories and
              exchanges, not by Mero. Mero holds no client assets, keys or cash, does not lend, and never
              instructs a depository.
            </p>
            <div className="mt-8 flex gap-4 border-l-2 border-[#00c2a8] bg-[#00c2a8]/[0.06] px-5 py-5">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#00c2a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <p className="leading-relaxed text-[#0b1c2d]/75">
                Our first market is <span className="font-semibold text-[#0b1c2d]">GIFT IFSC in India</span>,
                where the depository, the bullion exchange and bank lenders sit under a single regulator.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={200} className="lg:col-span-7">
            <InfrastructureStack />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
