import { useEffect, useRef, useState } from "react";

const FLOW_STEPS = [
  {
    id: "mint",
    number: "01",
    label: "Foundation",
    title: "Mint",
    subtitle: "Collateralize",
    description:
      "Deposit gold, copper, nickel, or gemstones into institutional vaults. Receive USDM tokens fully backed by real commodity reserves.",
    specs: ["126% collateralization ratio", "Real-time auditing", "Institutional custody"],
  },
  {
    id: "deploy",
    number: "02",
    label: "Structure",
    title: "Deploy",
    subtitle: "Generate Yield",
    description:
      "USDM flows into regulated yield products through trusted partners: BlackRock BUIDL, Franklin Templeton BENJI, Apollo ACRED.",
    specs: ["5-15% APY range", "Regulated products only", "Zero FX friction"],
  },
  {
    id: "redeem",
    number: "03",
    label: "Elevation",
    title: "Redeem",
    subtitle: "Withdraw",
    description:
      "Convert USDM back to underlying commodity reserves at any time. Full transparency, no lock-in periods, complete capital control.",
    specs: ["24-48 hour settlement", "Full reserve transparency", "On-demand liquidity"],
  },
] as const;

// Abstract architectural visualization for each step
function StepVisualization({ step, isActive }: { step: typeof FLOW_STEPS[number]; isActive: boolean }) {
  return (
    <div className={`step-viz step-viz-${step.id} ${isActive ? "step-viz-active" : ""}`}>
      {/* Geometric architecture based on step */}
      <div className="step-viz-container">
        {step.id === "mint" && (
          <>
            {/* Foundation: Stacked blocks representing reserves */}
            <div className="viz-block viz-block-1" />
            <div className="viz-block viz-block-2" />
            <div className="viz-block viz-block-3" />
            <div className="viz-line viz-line-horizontal" />
            <div className="viz-line viz-line-vertical" />
          </>
        )}
        {step.id === "deploy" && (
          <>
            {/* Structure: Flowing channels */}
            <div className="viz-channel viz-channel-1" />
            <div className="viz-channel viz-channel-2" />
            <div className="viz-node viz-node-center" />
            <div className="viz-arrow viz-arrow-right" />
          </>
        )}
        {step.id === "redeem" && (
          <>
            {/* Elevation: Ascending pathways */}
            <div className="viz-path viz-path-1" />
            <div className="viz-path viz-path-2" />
            <div className="viz-peak" />
            <div className="viz-glow" />
          </>
        )}
      </div>
    </div>
  );
}

export function Layout356() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("step-in-view");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px" }
    );

    const steps = document.querySelectorAll(".flow-step");
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative bg-[#0a1628] overflow-hidden"
    >
      {/* Architectural grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Section header */}
      <div className="relative border-b border-white/10">
        <div className="container px-[5%] py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Process
              </span>
              <div className="h-px w-12 bg-emerald-400/30" />
            </div>
            <span className="text-xs font-medium text-white/30 uppercase tracking-wider">
              Three Pillars
            </span>
          </div>
        </div>
      </div>

      {/* Flow steps */}
      <div className="relative">
        {FLOW_STEPS.map((step, index) => (
          <div
            key={step.id}
            className="flow-step relative border-b border-white/5"
            onMouseEnter={() => setActiveStep(index)}
          >
            <div className="container px-[5%]">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[80vh]">
                {/* Content side */}
                <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-20">
                  {/* Step indicator */}
                  <div className="flex items-center gap-6 mb-8">
                    <span className="step-number text-7xl font-bold text-white/5 lg:text-9xl">
                      {step.number}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-1">
                        {step.label}
                      </span>
                      <div className="flex items-baseline gap-3">
                        <h2 className="text-4xl font-bold text-white lg:text-5xl">
                          {step.title}
                        </h2>
                        <span className="hidden text-lg font-light text-white/40 md:inline">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg leading-relaxed text-white/60 max-w-lg mb-10 lg:text-xl">
                    {step.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-3">
                    {step.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm text-white/50"
                      >
                        <span className="h-1.5 w-1.5 bg-emerald-500/50" />
                        <span className="uppercase tracking-wider">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Connection line to next step */}
                  {index < FLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute bottom-0 left-[5%] lg:left-[25%]">
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-px bg-gradient-to-b from-emerald-500/30 to-transparent" />
                        <div className="h-2 w-2 bg-emerald-500/50 rotate-45 -mt-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Visualization side */}
                <div className="relative flex items-center justify-center py-12 lg:py-0 border-l border-white/5">
                  <StepVisualization step={step} isActive={activeStep === index} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  );
}
