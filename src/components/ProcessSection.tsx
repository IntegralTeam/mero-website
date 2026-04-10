import { useCounterAnimation, useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useState } from "react";

// Metric Card Component with Icon
function MetricCard({ 
  icon, 
  value, 
  label, 
  sublabel,
  delay = 0,
  isVisible,
  children
}: { 
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel?: string;
  delay?: number;
  isVisible: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 p-5 transition-all duration-700 hover:shadow-lg hover:shadow-[#00c2a8]/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00c2a8]/10 text-[#00c2a8]">
          {icon}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
          {label}
        </span>
      </div>
      
      <div className="mb-1 text-3xl font-bold text-[#0b1c2d] md:text-4xl">
        {value}
      </div>
      
      {sublabel && (
        <div className="text-xs uppercase tracking-wider text-[#0b1c2d]/50">
          {sublabel}
        </div>
      )}
      
      {children}
    </div>
  );
}

// LTV Progress Bar Component
function LTVProgressBar({ value, threshold, isVisible }: { 
  value: number; 
  threshold: number; 
  isVisible: boolean;
}) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);
  
  useEffect(() => {
    if (!isVisible) {
      setAnimatedWidth(0);
      setAnimatedValue(0);
      return;
    }
    
    const duration = 1500;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setAnimatedWidth(easeOutQuad * value);
      setAnimatedValue(Math.floor(easeOutQuad * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, value]);
  
  const thresholdPosition = (threshold / 100) * 100;
  
  return (
    <div className="mt-4">
      {/* Progress track */}
      <div className="relative h-3 rounded-full bg-gray-200">
        {/* Animated fill */}
        <div 
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#00c2a8] to-[#00c2a8] transition-all duration-100"
          style={{ 
            width: `${animatedWidth}%`,
            boxShadow: isVisible ? '0 0 12px rgba(0, 194, 168, 0.5)' : 'none'
          }}
        />
        
        {/* Threshold marker */}
        <div 
          className="absolute top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-red-500"
          style={{ left: `${thresholdPosition}%` }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold text-red-500">
            Limit {threshold}%
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="mt-2 flex justify-between text-xs text-[#0b1c2d]/50">
        <span>0%</span>
        <span className="font-medium text-[#00c2a8]">{animatedValue}% Current</span>
        <span>100%</span>
      </div>
    </div>
  );
}

const PROCESS_STEPS = [
  {
    number: "01",
    label: "DEPOSIT",
    title: "Vault your commodities",
    description:
      "Deposit physical gold, copper, or nickel in LBMA-certified vaults. The custodian verifies and encumbers the asset — creating an on-chain record that cannot be double-pledged.",
  },
  {
    number: "02",
    label: "TOKENISE",
    title: "Receive your assets",
    description:
      "Mero issues warehouse receipt assets (MEROG, MEROC, MERON) on Sui Network. Each asset represents verified ownership of 1:1 physical commodity, transferable and auditable in real-time.",
  },
  {
    number: "03",
    label: "ACTIVATE",
    title: "Borrow or earn",
    description:
      "Lock assets as collateral to borrow USDC at 5% fixed (60% LTV, 48h cure). Or deploy into institutional strategies including Gold ETF overlays and regulated asset manager pathways.",
  },
] as const;

export function ProcessSection() {
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: hoursRef, count: hoursCount } = useCounterAnimation(48, 1500);
  const { ref: parityRef, count: parityCount } = useCounterAnimation(1, 1500);

  return (
    <section id="process" className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              Process
            </span>
            <span className="h-px w-8 bg-[#00c2a8]" />
          </div>
          <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            Three steps to liquidity
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            From physical commodity to on-chain collateral in a staged workflow.
            Borrow, activate, or redeem while retaining ownership of the underlying asset.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-0">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="group relative border-b border-[#0b1c2d]/10 py-10 first:border-t md:py-12"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8">
                  <div className="col-span-2 md:col-span-1">
                    <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-br from-[#00c2a8] to-[#00c2a8] md:h-12 md:w-12">
                      <span className="text-sm font-bold text-[#0b1c2d] md:text-base">{step.number}</span>
                    </div>
                  </div>

                  <div className="col-span-10 md:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
                      {step.label}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-9 md:pl-4">
                    <h3 className="mb-2 bg-gradient-to-r from-[#0b1c2d] to-[#00c2a8] bg-clip-text text-lg font-bold text-transparent md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#0b1c2d]/60 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00c2a8] to-[#00c2a8] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div ref={metricsRef} className="mt-16 pt-10 md:mt-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* LTV Card */}
            <MetricCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              value="60%"
              label="Loan-to-Value"
              sublabel="At Origination"
              delay={0}
              isVisible={metricsVisible}
            >
              <LTVProgressBar value={60} threshold={75} isVisible={metricsVisible} />
            </MetricCard>

            {/* 48h Card */}
            <div 
              ref={hoursRef}
              className={`transition-all duration-700 delay-100 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <MetricCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                value={`${hoursCount}h`}
                label="Cure Window"
                sublabel="Margin Call Response"
                delay={100}
                isVisible={metricsVisible}
              >
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-amber-50 p-2">
                  <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-xs font-medium text-amber-700">2 days to respond</span>
                </div>
              </MetricCard>
            </div>

            {/* 1:1 Card */}
            <div 
              ref={parityRef}
              className={`transition-all duration-700 delay-200 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <MetricCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                value={parityCount === 1 ? '1:1' : `${parityCount}:${parityCount}`}
                label="Asset Backing"
                sublabel="MEROG Parity"
                delay={200}
                isVisible={metricsVisible}
              >
                <div className="mt-4 flex items-center gap-2 text-xs text-[#0b1c2d]/60">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-[#C9A84C] text-[10px] font-bold text-white">Au</div>
                  <span>=</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-[#00c2a8] text-[10px] font-bold text-white">M</div>
                  <span className="ml-auto">1 troy oz</span>
                </div>
              </MetricCard>
            </div>

            {/* Sui Card */}
            <MetricCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
              value="Sui"
              label="Network"
              sublabel="Settlement Layer"
              delay={300}
              isVisible={metricsVisible}
            >
              <div className="mt-4 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#0b1c2d]/50">Speed</span>
                  <span className="font-medium text-[#0b1c2d]">&lt; 1s</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#0b1c2d]/50">Cost</span>
                  <span className="font-medium text-[#0b1c2d]">&lt; $0.01</span>
                </div>
              </div>
            </MetricCard>
          </div>
        </div>
      </div>
    </section>
  );
}
