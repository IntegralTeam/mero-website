import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Yield Comparison Bar Chart
function YieldComparisonChart({ isVisible }: { isVisible: boolean }) {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-CN";
  const [collarWidth, setCollarWidth] = useState(0);
  const [coveredCallWidth, setCoveredCallWidth] = useState(0);
  
  useEffect(() => {
    if (!isVisible) {
      setCollarWidth(0);
      setCoveredCallWidth(0);
      return;
    }
    
    const duration = 1500;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      // Collar: 1.3-1.6% (show as ~16% of max scale for visual balance)
      setCollarWidth(easeOut * 20);
      // Covered Call: 4-9% (show as ~50-90% of scale)
      setCoveredCallWidth(easeOut * 65);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible]);
  
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
          {isZh ? "收益对比" : "Yield Comparison"}
        </h4>
        <div className="flex items-center gap-4 text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-[#00c2a8]" />
            <span className="text-white/50">{isZh ? "稳健" : "Conservative"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-[#C9A84C]" />
            <span className="text-white/50">{isZh ? "进取" : "Aggressive"}</span>
          </div>
        </div>
      </div>
      
      {/* Collar Bar */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-white">{isZh ? "领口策略" : "Collar Strategy"}</span>
          <span className="text-[#00c2a8]">1.3 – 1.6%</span>
        </div>
        <div className="relative h-4 rounded-full bg-white/5">
          <div 
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#00c2a8] to-[#00c2a8]/80 transition-all duration-100"
            style={{ 
              width: `${collarWidth}%`,
              boxShadow: isVisible ? '0 0 12px rgba(0, 194, 168, 0.4)' : 'none'
            }}
          />
          {/* Range indicator */}
          <div 
            className="absolute top-1/2 h-3 w-0.5 -translate-y-1/2 bg-white/30"
            style={{ left: '16%' }}
          />
          <div 
            className="absolute top-1/2 h-3 w-0.5 -translate-y-1/2 bg-white/30"
            style={{ left: '20%' }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-white/30">
          <span>{isZh ? "资本保全" : "Capital Preservation"}</span>
          <span>~82-88% downside floor</span>
        </div>
      </div>
      
      {/* Covered Call Bar */}
      <div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-white">{isZh ? "备兑看涨" : "Covered Call"}</span>
          <span className="text-[#E8C96E]">4 – 9%</span>
        </div>
        <div className="relative h-4 rounded-full bg-white/5">
          <div 
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96E] transition-all duration-100"
            style={{ 
              width: `${coveredCallWidth}%`,
              boxShadow: isVisible ? '0 0 12px rgba(201, 168, 76, 0.4)' : 'none'
            }}
          />
          {/* Range indicators */}
          <div 
            className="absolute top-1/2 h-3 w-0.5 -translate-y-1/2 bg-white/30"
            style={{ left: '40%' }}
          />
          <div 
            className="absolute top-1/2 h-3 w-0.5 -translate-y-1/2 bg-white/30"
            style={{ left: '90%' }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-white/30">
          <span>{isZh ? "收益增强" : "Income Generation"}</span>
          <span>{isZh ? "更高收益，无保底" : "Higher yield, no floor"}</span>
        </div>
      </div>
      
      {/* Disclaimer Banner */}
      <div className="mt-6 border border-white/10 bg-white/[0.05] p-4">
        <div className="flex items-start gap-3">
          <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-white">
              {isZh
                ? "仅为示意测算 — 不构成收益保证"
                : "Indicative Estimates Only — Not Guaranteed Returns"}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              {isZh
                ? "页面展示的收益数据基于历史市场条件与示意方案测算。实际收益会波动，且可能显著低于示例。过往表现不代表未来结果。本金存在风险，这些策略涉及期权交易与商品价格敞口。"
                : "All yield figures shown are historical estimates based on market conditions and indicative proposals. Actual returns will vary and may be significantly lower. Past performance does not guarantee future results. Capital is at risk. These strategies involve options trading and commodity price exposure."}
            </p>
          </div>
        </div>
      </div>
      
      {/* Scale */}
      <div className="mt-4 flex justify-between text-[10px] text-white/20">
        <span>0%</span>
        <span>5%</span>
        <span>10%</span>
      </div>
    </div>
  );
}

const STRATEGIES = [
  {
    id: "collar",
    name: "Collar",
    tagline: "Capital Preservation",
    netYield: "1.3–1.6%",
    yieldLabel: "Net annualised",
    structure: "Buy put + sell out-of-the-money call",
    floor: "~82–88% of entry value",
    bestFor: "Sovereign mandates, central banks, reserve managers",
    highlight: false,
  },
  {
    id: "covered-call",
    name: "Covered Call",
    tagline: "Income Generation",
    netYield: "4–9%",
    yieldLabel: "Net annualised",
    structure: "Sell out-of-the-money call only",
    floor: "No structural floor — retains upside to strike",
    bestFor: "Income-focused institutions, corporate treasury",
    highlight: true,
  },
] as const;

function MechanismStep({ number, text, animation }: { number: string; text: string; animation: { ref: React.RefObject<HTMLDivElement>; isVisible: boolean } }) {
  return (
    <div 
      ref={animation.ref}
      className={`flex items-start gap-4 transition-all duration-700 ${animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border border-[#C9A84C]/30 text-[10px] font-bold text-[#C9A84C]">
        {number}
      </span>
      <p className="text-sm leading-relaxed text-white/60">{text}</p>
    </div>
  );
}

export function GoldETFOverlay() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-CN";
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const card1Animation = useScrollAnimation({ threshold: 0.1 });
  const card2Animation = useScrollAnimation({ threshold: 0.1 });
  const { ref: chartRef, isVisible: chartVisible } = useScrollAnimation({ threshold: 0.2 });
  const mechanismAnimations = [
    useScrollAnimation({ threshold: 0.1 }),
    useScrollAnimation({ threshold: 0.1 }),
    useScrollAnimation({ threshold: 0.1 }),
    useScrollAnimation({ threshold: 0.1 }),
  ];
  const { ref: calloutRef, isVisible: calloutVisible } = useScrollAnimation({ threshold: 0.1 });
  const strategies = isZh
    ? [
        { ...STRATEGIES[0], name: "领口", tagline: "资本保全", yieldLabel: "年化净收益", structure: "买入看跌 + 卖出虚值看涨", floor: "约入场价值的 82–88%", bestFor: "主权机构、央行、储备管理方" },
        { ...STRATEGIES[1], name: "备兑看涨", tagline: "收益增强", yieldLabel: "年化净收益", structure: "仅卖出虚值看涨", floor: "无结构性保底，保留至行权价的上行", bestFor: "收益导向机构、企业资金管理" },
      ]
    : STRATEGIES;
  
  return (
    <section id="yield" className="relative overflow-hidden emerald-gradient-bg py-20 md:py-28 lg:py-32">
      {/* Fine grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="container relative px-[5%]">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mx-auto mb-14 max-w-3xl text-center md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A84C]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
              {isZh ? "黄金收益叠加" : "Gold Yield Overlay"}
            </span>
            <span className="h-px w-8 bg-[#C9A84C]/40" />
          </div>
          <h2
            className={`mb-5 font-display text-3xl font-light text-white md:text-4xl lg:text-[2.75rem] ${
              isZh ? "leading-[1.18]" : "leading-[1.15]"
            }`}
          >
            {isZh ? (
              <>
                <span className="block">让闲置黄金产生收益。</span>
                <span className="mt-2 block text-[#E8C96E]">无需卖出金条。</span>
              </>
            ) : (
              <>
                Turn idle gold into income.
                <br />
                <span className="text-[#E8C96E]">Without selling a bar.</span>
              </>
            )}
          </h2>
          <p className="mx-auto max-w-2xl text-white/55 md:text-lg">
            {isZh
              ? "实物黄金可通过授权参与方以实物方式转换为黄金 ETF。试点阶段拟由授权投资管理人执行叠加策略。具体结构仍受法律、交易对手与执行条件约束。"
              : "Physical gold can be contributed in-kind to a Gold ETF via authorised market participants. An authorised investment manager is the intended overlay manager model for pilot design. Structures remain subject to legal, counterparty, and execution readiness."}
          </p>
        </div>

        {/* Strategy cards */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {strategies.map((strategy, index) => {
            const cardAnimations = [card1Animation, card2Animation];
            const cardAnimation = cardAnimations[index];
            return (
              <div
                key={strategy.id}
                ref={cardAnimation.ref}
                className={`relative flex flex-col border p-8 md:p-10 transition-all duration-700 ${
                  strategy.highlight
                    ? "border-[#C9A84C]/40 bg-[#C9A84C]/[0.04]"
                    : "border-white/10 bg-white/[0.02]"
                } ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {strategy.highlight && (
                  <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E]" />
                )}

                {/* Strategy name + yield */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                      {strategy.tagline}
                    </p>
                    <h3 className="text-2xl font-bold text-white md:text-3xl">{strategy.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="block font-display text-3xl font-light text-[#E8C96E] md:text-4xl">
                      {strategy.netYield}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/35">
                      {strategy.yieldLabel}
                    </span>
                  </div>
                </div>

                {/* Parameters */}
                <div className="mb-6 space-y-3">
                    {[
                    { label: isZh ? "结构" : "Structure", value: strategy.structure },
                    { label: isZh ? "下行" : "Downside", value: strategy.floor },
                    { label: isZh ? "适用" : "Best for", value: strategy.bestFor },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <span className="w-16 flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[#C9A84C]/60">
                        {label}
                      </span>
                      <span className="text-sm text-white/65">{value}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-auto text-[10px] leading-relaxed text-white/35">
                  {isZh
                    ? "仅为示意条款，最终经济结果取决于授权范围、执行窗口与审批条件。"
                    : "Illustrative terms only. Final economics depend on mandate, execution window, and approvals."}
                </p>
              </div>
            );
          })}
        </div>

        {/* Yield Comparison Chart */}
        <div ref={chartRef} className="mb-14">
          <YieldComparisonChart isVisible={chartVisible} />
        </div>

        {/* Mechanism steps */}
        <div className="border-t border-white/10 pt-12 md:pt-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                {isZh ? "运作方式" : "How it works"}
              </h4>
              <div className="space-y-5">
                <MechanismStep
                  number="1"
                  text={isZh ? "实物黄金置于三方安排下的独立托管中。法律所有权由受监管托管方持有，不转移至商业主体。" : "Physical gold is placed into independent escrow under a tri-party arrangement. Legal title is held by a regulated escrow agent — not transferred to any commercial entity."}
                  animation={mechanismAnimations[0]}
                />
                <MechanismStep
                  number="2"
                  text={isZh ? "黄金通过授权参与方按约定执行条款进行实物转换，映射为黄金 ETF 持仓。" : "Gold is converted in-kind to a Gold ETF via an authorised participant under agreed execution terms."}
                  animation={mechanismAnimations[1]}
                />
                <MechanismStep
                  number="3"
                  text={isZh ? "授权投资管理人作为叠加策略管理方，按约定在黄金 ETF 头寸上执行领口或备兑看涨策略。" : "An authorised investment manager is appointed as discretionary overlay manager. They execute the agreed collar or covered call options strategy on the Gold ETF position."}
                  animation={mechanismAnimations[2]}
                />
                <MechanismStep
                  number="4"
                  text={isZh ? "机构获取期权权利金收益，实物黄金无需移动，并可按约定退出流程随时发起权属回转。" : "The institution earns premium income. The physical gold never moves. Title reversion can be instructed at any time, subject to the agreed unwind procedure."}
                  animation={mechanismAnimations[3]}
                />
              </div>
            </div>

            {/* Callout */}
            <div 
              ref={calloutRef}
              className={`flex flex-col justify-center transition-all duration-700 ${calloutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="border border-[#C9A84C]/25 bg-[#C9A84C]/[0.04] p-8">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]/60">
                  {isZh ? "示例说明" : "Illustrative Example"}
                </p>
                <p className="mb-6 font-display text-2xl font-light leading-relaxed text-white md:text-3xl">
                  {isZh ? "若持有 " : "A "}
                  <span className="text-[#E8C96E]">$50M {isZh ? "黄金头寸" : "gold position"}</span>
                  {isZh ? " 并采用备兑看涨策略，可产生 " : " in a covered call strategy could generate "}
                  <span className="text-[#E8C96E]">$2M–$4.5M {isZh ? "年度净收益" : "in net annual income"}</span>
                  {isZh ? "，且无需将任何盎司黄金转换为现金。" : " without converting a single ounce to cash."}
                </p>
                <div className="space-y-2 text-[10px] text-white/35">
                  <p>{isZh ? "· 叠加管理人信息仅作示意，最终以正式协议为准。" : "· Overlay manager references are indicative and subject to final agreement."}</p>
                  <p>{isZh ? "· 实物黄金处理方式取决于所选法律与托管结构。" : "· Physical gold treatment depends on the selected legal and custody structure."}</p>
                  <p>{isZh ? "· 资产权属由独立受监管托管安排持有。" : "· Title held in independent regulated escrow."}</p>
                  <p>{isZh ? "· 仅为示意，不构成保证，本金存在风险。" : "· Indicative only. Not a guarantee. Capital is at risk."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
