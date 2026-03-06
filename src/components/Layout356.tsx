import { useEffect, useRef, useState } from "react";

const FLOW_STEPS = [
  {
    id: "mint",
    number: "01",
    label: "Foundation",
    title: "Mint",
    subtitle: "Collateralise",
    description:
      "Deposit gold, copper, nickel, or gemstones into institutional custody. USDM minting is intended to maintain a target minimum 126% collateralisation ratio, subject to verification and controls.",
    specs: [
      "Target minimum 126% collateralisation",
      "Independent periodic auditing intended",
      "Institutional custody model",
    ],
  },
  {
    id: "deploy",
    number: "02",
    label: "Structure",
    title: "Deploy",
    subtitle: "Target Yield",
    description:
      "USDM is intended to be deployed into regulated institutional products including BlackRock BUIDL, Franklin Templeton BENJI, and Apollo ACRED, subject to onboarding and product access.",
    specs: [
      "Indicative 5-15% target APY range",
      "Products and allocations under development",
      "USD-denominated workflow",
    ],
  },
  {
    id: "redeem",
    number: "03",
    label: "Settlement",
    title: "Redeem",
    subtitle: "Withdraw",
    description:
      "Target 24-48 hour USDM minting settlement is subject to collateral verification and custodian processing. Redemption is expected to depend on yield product terms, including potential lock-up periods.",
    specs: [
      "Target 24-48 hour settlement",
      "Lock-ups may range monthly to 22 months",
      "Timeline and mechanics are indicative",
    ],
  },
] as const;

function StepVisualization({ step, isActive }: { step: typeof FLOW_STEPS[number]; isActive: boolean }) {
  return (
    <div className={`step-viz step-viz-${step.id} ${isActive ? "step-viz-active" : ""}`}>
      <div className="step-viz-container">
        {step.id === "mint" && (
          <>
            <div className="viz-block viz-block-1" />
            <div className="viz-block viz-block-2" />
            <div className="viz-block viz-block-3" />
            <div className="viz-line viz-line-horizontal" />
            <div className="viz-line viz-line-vertical" />
          </>
        )}
        {step.id === "deploy" && (
          <>
            <div className="viz-channel viz-channel-1" />
            <div className="viz-channel viz-channel-2" />
            <div className="viz-node viz-node-center" />
            <div className="viz-arrow viz-arrow-right" />
          </>
        )}
        {step.id === "redeem" && (
          <>
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
    <section id="solutions" ref={sectionRef} className="relative overflow-hidden bg-[#0a1628]">
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

      <div className="relative border-b border-white/10">
        <div className="container px-[5%] py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Process
              </span>
              <div className="h-px w-12 bg-emerald-400/30" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-white/30">
              Three Pillars
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        {FLOW_STEPS.map((step, index) => (
          <div
            key={step.id}
            className="flow-step relative border-b border-white/5"
            onMouseEnter={() => setActiveStep(index)}
          >
            <div className="container px-[5%]">
              <div className="grid min-h-[70vh] grid-cols-1 lg:min-h-[80vh] lg:grid-cols-2">
                <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-20">
                  <div className="mb-8 flex items-center gap-6">
                    <span className="step-number text-7xl font-bold text-white/5 lg:text-9xl">
                      {step.number}
                    </span>
                    <div className="flex flex-col">
                      <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-400">
                        {step.label}
                      </span>
                      <div className="flex items-baseline gap-3">
                        <h2 className="text-4xl font-bold text-white lg:text-5xl">{step.title}</h2>
                        <span className="hidden text-lg font-light text-white/40 md:inline">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/60 lg:text-xl">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-3 text-sm text-white/50">
                        <span className="h-1.5 w-1.5 bg-emerald-500/50" />
                        <span className="uppercase tracking-wider">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {index < FLOW_STEPS.length - 1 && (
                    <div className="absolute bottom-0 left-[5%] hidden lg:block lg:left-[25%]">
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-px bg-gradient-to-b from-emerald-500/30 to-transparent" />
                        <div className="-mt-1 h-2 w-2 rotate-45 bg-emerald-500/50" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative flex items-center justify-center border-l border-white/5 py-12 lg:py-0">
                  <StepVisualization step={step} isActive={activeStep === index} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  );
}
