import logo from "../assets/logo-light.svg";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const RECORD_ROLES: { icon: IconName; label: string; role: string }[] = [
  { icon: "holders", label: "Custodians", role: "Hold and verify the metal" },
  { icon: "pledge", label: "Depositories", role: "Ownership and pledge records" },
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
    <p className={`mb-3 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] ${className}`}>
      {children}
    </p>
  );
}

function PartyCard({
  icon,
  label,
  detail,
  tone,
}: {
  icon: IconName;
  label: string;
  detail?: string;
  tone: "gold" | "neutral";
}) {
  const toneClass =
    tone === "gold"
      ? "border-[#C9A84C]/30 bg-[#C9A84C]/[0.07]"
      : "border-white/10 bg-white/[0.04]";
  const iconClass =
    tone === "gold" ? "bg-[#C9A84C]/15 text-[#E8C96E]" : "bg-white/10 text-white/80";

  return (
    <div className={`flex items-center gap-4 border px-5 py-4 ${toneClass}`}>
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center ${iconClass}`}>
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-lg leading-snug text-white">{label}</span>
        {detail && <span className="mt-1 block text-xs leading-relaxed text-white/55">{detail}</span>}
      </span>
    </div>
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
        <PartyCard
          icon="lender"
          label="Banks and financial institutions"
          detail="Make financing and enforcement decisions"
          tone="neutral"
        />

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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {RECORD_ROLES.map((role) => (
            <div key={role.label}>
              <LayerLabel className="text-[#E8C96E]/70">{role.role}</LayerLabel>
              <PartyCard icon={role.icon} label={role.label} tone="gold" />
            </div>
          ))}
        </div>

        <LayerLink />

        <LayerLabel className="text-white/40">Price and settle sales</LayerLabel>
        <PartyCard icon="monitor" label="Exchanges" detail="Trading and clearing" tone="neutral" />
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
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-[#0b1c2d]/70">
              <p>
                Title and the lender's security are recorded by licensed custodians and depositories, not
                by Mero. Vault managers and custodians hold and verify the metal. Depositories maintain
                the ownership and pledge records. Lenders make the financing and enforcement decisions,
                and enforcement sales settle through regulated exchanges or ordinary sales.
              </p>
              <p>
                Mero holds no client assets, keys or cash, and does not lend. Any instruction its software
                transmits to a custodian or depository is authorised by the institution. Mero does not make
                that decision in its own capacity.
              </p>
            </div>
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
