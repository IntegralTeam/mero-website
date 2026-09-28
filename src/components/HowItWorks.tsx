import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";
import { SectionHeading } from "./SectionHeading";

type Party = "custody" | "lender" | "mero" | "default";

const PARTY_STYLES: Record<Party, { bar: string; icon: string; swatch: string; title: string }> = {
  custody: {
    bar: "bg-[#00c2a8]",
    icon: "bg-[#00c2a8]/15 text-[#00c2a8] ring-[#00c2a8]/30",
    swatch: "bg-[#00c2a8]",
    title: "text-white",
  },
  lender: {
    bar: "bg-[#E0B955]",
    icon: "bg-[#E0B955]/15 text-[#E0B955] ring-[#E0B955]/30",
    swatch: "bg-[#E0B955]",
    title: "text-white",
  },
  mero: {
    bar: "bg-[#6aa9e9]",
    icon: "bg-[#6aa9e9]/15 text-[#8cbdf0] ring-[#6aa9e9]/30",
    swatch: "bg-[#6aa9e9]",
    title: "text-[#b7d6f7]",
  },
  default: {
    bar: "bg-[#f0705f]",
    icon: "bg-[#f0705f]/15 text-[#f0705f] ring-[#f0705f]/30",
    swatch: "bg-[#f0705f]",
    title: "text-[#f7a597]",
  },
};

const LEGEND: { party: Party; label: string }[] = [
  { party: "custody", label: "Custody and borrower steps" },
  { party: "lender", label: "Lender" },
  { party: "mero", label: "Mero" },
  { party: "default", label: "Default path" },
];

const FLOW_GRID =
  "xl:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)_52px_minmax(0,1.1fr)_52px_minmax(0,1fr)]";

function FlowCard({
  party,
  icon,
  title,
  description,
  step,
  className = "",
  children,
}: {
  party: Party;
  icon: IconName;
  title: string;
  description: string;
  step?: number;
  className?: string;
  children?: ReactNode;
}) {
  const styles = PARTY_STYLES[party];

  return (
    <div
      className={`group relative flex gap-4 overflow-hidden border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] xl:flex-col xl:gap-0 xl:p-4 2xl:p-5 ${className}`}
    >
      <span className={`absolute inset-x-0 top-0 h-0.5 ${styles.bar}`} />
      <div className="flex shrink-0 items-start justify-between xl:mb-4 xl:items-center">
        <div className={`flex h-11 w-11 items-center justify-center ring-1 ${styles.icon}`}>
          <Icon name={icon} className="h-6 w-6" />
        </div>
        {step !== undefined && (
          <span className="hidden text-[11px] font-semibold tracking-[0.15em] text-white/30 xl:block">
            {`0${step}`}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className={`mb-1.5 text-[15px] font-bold leading-snug ${styles.title}`}>{title}</h3>
        <p className="text-[13px] leading-relaxed text-white/60">{description}</p>
        {children}
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg className="h-3 w-3 shrink-0 rotate-90 text-[#00c2a8] xl:rotate-0" viewBox="0 0 12 12" fill="none">
      <path d="M3.5 1.5 8 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center xl:flex-row xl:self-center">
      <span className="flow-line-y h-6 w-px xl:hidden" />
      <span className="flow-line-x hidden h-px flex-1 xl:block" />
      <Chevron />
    </div>
  );
}

function Branch({ kind }: { kind: "split" | "merge" }) {
  const paths =
    kind === "split"
      ? { release: "M0 50 C 30 50, 24 24, 56 24", enforce: "M0 50 C 30 50, 24 76, 56 76" }
      : { release: "M0 24 C 32 24, 26 50, 56 50", enforce: "M0 76 C 32 76, 26 50, 56 50" };

  return (
    <div aria-hidden="true">
      <div className="xl:hidden">
        <Connector />
      </div>
      <svg className="hidden h-full w-full xl:block" viewBox="0 0 56 100" preserveAspectRatio="none" fill="none">
        <path d={paths.release} className="flow-path" stroke="#00c2a8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d={paths.enforce} className="flow-path" stroke="#f0705f" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

function PriceChart() {
  return (
    <div className="mt-4 border-t border-white/10 pt-3" aria-hidden="true">
      <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="h-10 w-full" fill="none">
        <polyline
          points="0,14 12,11 24,16 36,10 48,15 60,21 72,17 84,25 96,19 108,13 120,15"
          stroke="#8cbdf0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="0"
          y1="30"
          x2="120"
          y2="30"
          stroke="#f0705f"
          strokeWidth="1"
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-white/45">
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="h-px w-3 bg-[#8cbdf0]" />
          Market price
        </span>
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="h-px w-3 border-t border-dashed border-[#f0705f]" />
          Margin call
        </span>
      </div>
    </div>
  );
}

function PhaseLabel({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-3 w-px bg-white/25" />
      <span className="h-px flex-1 bg-white/15" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">{label}</span>
      <span className="h-px flex-1 bg-white/15" />
      <span className="h-3 w-px bg-white/25" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="hero-gradient-bg relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute left-0 top-0 h-[60%] w-[60%] opacity-40"
        style={{ background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.12) 0%, transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[70%] w-[60%] opacity-40"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,194,168,0.18) 0%, transparent 60%)" }}
      />

      <div className="relative mx-auto w-full max-w-[96rem] px-[5%] xl:px-[3%]">
        <div className="mx-auto mb-10 max-w-3xl">
          <SectionHeading eyebrow="The loan lifecycle" title="How it works" align="center" tone="light" />
        </div>

        <ul className="mb-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:mb-16">
          {LEGEND.map((item) => (
            <li key={item.party} className="flex items-center gap-2 text-xs text-white/60">
              <span className={`h-2 w-2 ${PARTY_STYLES[item.party].swatch}`} />
              {item.label}
            </li>
          ))}
        </ul>

        <div className="mx-auto max-w-2xl xl:max-w-none">
          <div className={`mb-6 hidden xl:grid ${FLOW_GRID}`}>
            <PhaseLabel label="Phase 1" />
            <PhaseLabel label="Phase 2" className="col-span-9 col-start-3" />
          </div>

          <div className={`flex flex-col xl:grid ${FLOW_GRID}`}>
            <PhaseLabel label="Phase 1" className="mb-4 xl:hidden" />
            <FlowCard
              step={1}
              party="custody"
              icon="authenticate"
              title="Authenticate receipts"
              description="Forensics, bar numbers, KYC clearance"
              className="xl:self-center"
            />
            <Connector />
            <PhaseLabel label="Phase 2" className="my-4 xl:hidden" />
            <FlowCard
              step={2}
              party="custody"
              icon="pledge"
              title="Pledge recorded"
              description="By the custodian or depository that holds the metal"
              className="xl:self-center"
            />
            <Connector />
            <FlowCard
              step={3}
              party="lender"
              icon="lender"
              title="Lender funds"
              description="US dollar financing against the confirmed pledge"
              className="xl:self-center"
            />
            <Connector />
            <FlowCard
              step={4}
              party="mero"
              icon="monitor"
              title="Monitoring and margin"
              description="Market price, margin calls, cure window"
              className="xl:self-center"
            >
              <PriceChart />
            </FlowCard>
            <Branch kind="split" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <FlowCard
                party="custody"
                icon="release"
                title="Repay and release"
                description="Pledge released; record cancelled"
              />
              <FlowCard
                party="default"
                icon="enforce"
                title="Enforce"
                description="Transfer to the lender through the custodian or depository, then an ordinary sale"
              />
            </div>
            <Branch kind="merge" />
            <FlowCard
              party="mero"
              icon="reconcile"
              title="Reconcile and report"
              description="Every step evidenced"
              className="xl:self-center"
            />
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed text-white/60 md:text-lg">
          Phase 1 authenticates and registers receipts. Phase 2 records the pledge, funds the loan and
          runs monitoring and enforcement. A later phase, where permitted and at the borrower's election,
          routes loan proceeds to a regulated venue. It is not offered in the UK.
        </p>
      </div>
    </section>
  );
}
