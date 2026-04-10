import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FLOW_STEPS = [
  {
    id: "tokenise",
    number: "01",
    label: "Foundation",
    title: "Tokenise",
    subtitle: "Issue",
    description:
      "Physical commodity is deposited in an LBMA-certified or equivalent vault. The vault operator confirms the asset and encumbers the receipt — it cannot be moved or sold. Mero issues the corresponding warehouse receipt token on Sui Network.",
    specs: [
      "Custodian confirms encumbrance before issuance",
      "Commodity-specific assay or grading embedded in minting logic",
      "1 MEROG = 1 fine troy ounce of gold",
    ],
  },
  {
    id: "deploy",
    number: "02",
    label: "Deploy",
    title: "Lend / Earn",
    subtitle: "Two Paths",
    description:
      "The warehouse receipt token becomes productive collateral from day one. Lock MEROG and borrow USDC at 5% fixed (60% LTV, 48-hour cure period). Or convert gold in-kind to IAU and earn 1.3–9% net via SpiderRock's options overlay.",
    specs: [
      "Lend: 60% LTV · 5% fixed · 30–180 day terms · No flash liquidation",
      "Earn: SpiderRock collar (1.3–1.6% net) or covered call (4–9% net)",
      "Roadmap deployment path: BUIDL / ACRED / BENJI / Paradox",
    ],
  },
  {
    id: "redeem",
    number: "03",
    label: "Settlement",
    title: "Redeem",
    subtitle: "Release",
    description:
      "Return the warehouse receipt token to Mero. The smart contract releases the collateral escrow. The custodian is instructed to release the encumbrance on the underlying commodity. Ownership is unencumbered — exactly as before.",
    specs: [
      "Smart contract automates collateral release on repayment",
      "Custodian releases encumbrance on instruction",
      "No permanent conversion — the commodity was never sold",
    ],
  },
] as const;

function StepVisualization({ step, isActive }: { step: typeof FLOW_STEPS[number]; isActive: boolean }) {
  return (
    <div className={`step-viz step-viz-${step.id} ${isActive ? "step-viz-active" : ""}`}>
      <div className="step-viz-container">
        {step.id === "tokenise" && (
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
  const stepAnimations = [
    useScrollAnimation({ threshold: 0.2 }),
    useScrollAnimation({ threshold: 0.2 }),
    useScrollAnimation({ threshold: 0.2 }),
  ];

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
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]">
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
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00c2a8]">
                Process
              </span>
              <div className="h-px w-12 bg-[#00c2a8]/30" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-white/25">
              Three Pillars
            </span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="relative">
        {FLOW_STEPS.map((step, index) => (
          <div
            key={step.id}
            className="flow-step relative border-b border-white/5"
            onMouseEnter={() => setActiveStep(index)}
          >
            <div className="container px-[5%]">
              <div 
                ref={stepAnimations[index].ref}
                className={`grid min-h-[70vh] grid-cols-1 transition-all duration-1000 lg:min-h-[80vh] lg:grid-cols-2 ${stepAnimations[index].isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-20">
                  <div className="mb-8 flex items-center gap-6">
                    <span className="step-number text-7xl font-bold text-white/5 lg:text-9xl">
                      {step.number}
                    </span>
                    <div className="flex flex-col">
                      <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#00c2a8]">
                        {step.label}
                      </span>
                      <div className="flex items-baseline gap-3">
                        <h2 className="font-display text-4xl font-light text-white lg:text-5xl">
                          {step.title}
                        </h2>
                        <span className="hidden text-lg font-light text-white/35 md:inline">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/55 lg:text-xl">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-3 text-sm text-white/45">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-[#00c2a8]/50" />
                        <span className="leading-relaxed">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {index < FLOW_STEPS.length - 1 && (
                    <div className="absolute bottom-0 left-[5%] hidden lg:block lg:left-[25%]">
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-px bg-gradient-to-b from-[#00c2a8]/30 to-transparent" />
                        <div className="-mt-1 h-2 w-2 rotate-45 bg-[#00c2a8]/40" />
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

      <div className="h-1 bg-gradient-to-r from-transparent via-[#00c2a8]/15 to-transparent" />
    </section>
  );
}
