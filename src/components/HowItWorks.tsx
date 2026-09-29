import type { CSSProperties } from "react";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Tone = "teal" | "gold" | "alert";

const TONE_STYLES: Record<Tone, string> = {
  teal: "bg-[#00c2a8]/15 text-[#00c2a8]",
  gold: "bg-[#E0B955]/15 text-[#E8C96E]",
  alert: "bg-[#f0705f]/15 text-[#f0705f]",
};

const FLOW_GRID =
  "xl:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)_52px_minmax(0,1.1fr)_52px_minmax(0,1fr)]";

function FlowCard({
  tone = "teal",
  icon,
  title,
  description,
  className = "",
}: {
  tone?: Tone;
  icon: IconName;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex gap-4 border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] xl:flex-col xl:gap-0 xl:p-4 2xl:p-5 ${className}`}
    >
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center xl:mb-4 ${TONE_STYLES[tone]}`}>
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1.5 text-[15px] font-semibold leading-snug text-white">{title}</h3>
        <p className="text-[13px] leading-relaxed text-white/55">{description}</p>
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

function Connector({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex flex-col items-center xl:flex-row xl:self-center ${className}`}>
      <span className="flow-line-y h-6 w-px xl:hidden" />
      <span className="flow-line-x hidden h-px flex-1 xl:block" />
      <Chevron />
    </div>
  );
}

function Branch({ kind, className = "" }: { kind: "split" | "merge"; className?: string }) {
  const paths =
    kind === "split"
      ? { release: "M0 50 C 30 50, 24 24, 56 24", enforce: "M0 50 C 30 50, 24 76, 56 76" }
      : { release: "M0 24 C 32 24, 26 50, 56 50", enforce: "M0 76 C 32 76, 26 50, 56 50" };

  return (
    <div aria-hidden="true" className={className}>
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

function PhaseLabel({
  label,
  className = "",
  style,
}: {
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={style}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">{label}</span>
      <span className="h-px flex-1 bg-white/10" />
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
        <Reveal variant="blur" className="mx-auto mb-14 max-w-3xl md:mb-20">
          <SectionHeading eyebrow="The loan lifecycle" title="How it works" align="center" tone="light" />
        </Reveal>

        <div className="mx-auto max-w-2xl xl:max-w-none">
          <Reveal variant="stagger-x" className={`flex flex-col xl:grid ${FLOW_GRID}`}>
            <PhaseLabel label="Phase 1" className="mb-4 xl:col-start-1 xl:row-start-1 xl:mb-6 xl:self-end" />
            <FlowCard
              icon="authenticate"
              title="Authenticate receipts"
              description="Forensics, bar numbers, KYC clearance"
              className="xl:col-start-1 xl:row-start-2 xl:self-center"
            />
            <Connector className="xl:col-start-2 xl:row-start-2" />
            <PhaseLabel
              label="Phase 2"
              className="my-4 xl:row-start-1 xl:mb-6 xl:mt-0 xl:self-end"
              style={{ gridColumn: "3 / -1" }}
            />
            <FlowCard
              icon="pledge"
              title="Pledge recorded"
              description="By the depository; the custodian holds the metal"
              className="xl:col-start-3 xl:row-start-2 xl:self-center"
            />
            <Connector className="xl:col-start-4 xl:row-start-2" />
            <FlowCard
              tone="gold"
              icon="lender"
              title="Lender funds"
              description="US dollar financing against the confirmed pledge"
              className="xl:col-start-5 xl:row-start-2 xl:self-center"
            />
            <Connector className="xl:col-start-6 xl:row-start-2" />
            <FlowCard
              icon="monitor"
              title="Monitoring and margin"
              description="Market price, margin calls, cure window"
              className="xl:col-start-7 xl:row-start-2 xl:self-center"
            />
            <Branch kind="split" className="xl:col-start-8 xl:row-start-2" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-start-9 xl:row-start-2 xl:grid-cols-1">
              <FlowCard
                icon="release"
                title="Repay and release"
                description="Active record cancelled; audit history retained"
              />
              <FlowCard
                tone="alert"
                icon="enforce"
                title="Enforce"
                description="The lender enforces through the custodian and depository, then a sale on an exchange or an ordinary sale"
              />
            </div>
            <Branch kind="merge" className="xl:col-start-10 xl:row-start-2" />
            <FlowCard
              icon="reconcile"
              title="Reconcile and report"
              description="Every step evidenced"
              className="xl:col-start-11 xl:row-start-2 xl:self-center"
            />
          </Reveal>
        </div>

        <Reveal variant="up" delay={300}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed text-white/60 md:text-lg">
            Phase 1 authenticates and registers receipts. Phase 2 records the pledge, funds the loan and
            runs monitoring and enforcement. A later phase, where permitted and at the borrower's election,
            routes loan proceeds to a regulated venue. It is not offered in the UK.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
