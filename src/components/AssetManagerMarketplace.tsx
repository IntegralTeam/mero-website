import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const MANAGERS = [
  {
    id: "buidl",
    name: "BUIDL",
    manager: "BlackRock",
    strategy: "Tokenised US Treasury fund",
    description: "Institutional-grade short-duration yield on US government securities. The benchmark institutional product for tokenised capital deployment.",
    yield: "~5%",
    yieldLabel: "Indicative",
    tag: "Money Market",
    highlight: false,
  },
  {
    id: "acred",
    name: "ACRED",
    manager: "Apollo",
    strategy: "Tokenised credit fund",
    description: "Diversified institutional credit exposure across corporate and structured credit instruments. Higher yield in exchange for reduced liquidity.",
    yield: "~7–8%",
    yieldLabel: "Indicative",
    tag: "Credit",
    highlight: false,
  },
  {
    id: "benji",
    name: "BENJI",
    manager: "Franklin Templeton",
    strategy: "Tokenised money market fund",
    description: "Conservative, high-liquidity money market yield. Suitable for shorter-duration deployment of borrowed USDC capital.",
    yield: "~5%",
    yieldLabel: "Indicative",
    tag: "Money Market",
    highlight: false,
  },
  {
    id: "paradox",
    name: "Paradox / Hilbert",
    manager: "Paradox / Hilbert",
    strategy: "Delta-neutral and basis trading",
    description: "Higher-yield strategies employing delta-neutral positioning and basis trading. Institutional risk management with disciplined drawdown controls.",
    yield: "~12–18%",
    yieldLabel: "Indicative",
    tag: "Alternatives",
    highlight: true,
  },
  {
    id: "spiderrock",
    name: "Gold ETF Overlay",
    manager: "SpiderRock / BlackRock",
    strategy: "Collar or covered call on IAU",
    description: "In-kind gold → IAU conversion, options strategy executed by SpiderRock Advisors. Income on idle gold reserves without selling the underlying metal.",
    yield: "1.3–9%",
    yieldLabel: "Indicative",
    tag: "Commodities",
    highlight: false,
  },
] as const;

const FLOW_STEPS = [
  {
    step: "01",
    action: "Tokenise",
    detail: "Physical gold → MEROG on Sui",
    color: "text-[#00c2a8]",
  },
  {
    step: "02",
    action: "Borrow",
    detail: "Lock MEROG → borrow USDC at 5%",
    color: "text-white/60",
  },
  {
    step: "03",
    action: "Deploy",
    detail: "USDC → Regulated Asset Managers",
    color: "text-[#00c2a8]",
  },
] as const;

export function AssetManagerMarketplace() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-CN";
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: flowRef, isVisible: flowVisible } = useScrollAnimation({ threshold: 0.1 });
  const managerAnimations = MANAGERS.map(() => useScrollAnimation({ threshold: 0.1 }));
  const { ref: calloutRef, isVisible: calloutVisible } = useScrollAnimation({ threshold: 0.1 });
  const flowSteps = isZh
    ? [
        { ...FLOW_STEPS[0], action: "代币化", detail: "实物黄金 → Sui 上的 MEROG" },
        { ...FLOW_STEPS[1], action: "借入", detail: "锁定 MEROG → 借入 USDC（5%）" },
        { ...FLOW_STEPS[2], action: "配置", detail: "USDC → 受监管资管机构" },
      ]
    : FLOW_STEPS;
  const bankModelItems = isZh
    ? [
        {
          label: "配置",
          text: "银行选择向自有客户开放的管理人和产品，并设置配置上限。Mero 提供基础设施，银行掌控产品集合。",
        },
        {
          label: "分配",
          text: "银行客户选择产品并确认配置。智能合约可自动处理管理人接入、申购与头寸追踪。",
        },
        {
          label: "报告",
          text: "结算、报告与赎回实现链上自动化。银行可获得客户费率与底层管理人回报之间的价差收益。",
        },
      ]
    : [
        {
          label: "Configure",
          text: "The bank selects which managers and products are available to its own clients, and sets allocation limits. Mero provides the infrastructure; the bank controls the product set.",
        },
        {
          label: "Allocate",
          text: "The bank's client selects a product and confirms allocation. The smart contract executes manager onboarding, subscription, and position tracking automatically.",
        },
        {
          label: "Report",
          text: "Settlement, reporting, and redemption are automated on-chain. The bank earns the spread between the client rate and the underlying manager return.",
        },
      ];
  
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mx-auto mb-14 max-w-3xl text-center md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              {isZh ? "机构收益市场" : "Institutional Yield Marketplace"}
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/40" />
          </div>
          <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            {isZh ? "代币化。借贷。配置。" : "Tokenise. Borrow. Deploy."}
          </h2>
          <p className="mx-auto max-w-2xl text-[#0b1c2d]/60 md:text-lg">
            {isZh
              ? "借贷协议是核心连接层。没有它，仓单只是钱包中的记录；有了它，商品持有方可以将仓单激活为数字资产、快速借入 USDC，并接入全球机构投资者常用的收益策略。"
              : "The lending protocol is the connective tissue. Without it, the warehouse receipt is a record in a wallet. With it, a commodity holder can activate their position as a digital asset, immediately borrow USDC against it, and deploy into the same yield strategies used by global institutional investors — through one integrated workflow, subject to rollout by market and channel."}
          </p>
        </div>

        {/* Integrated flow diagram */}
        <div 
          ref={flowRef}
          className={`mx-auto mb-14 max-w-3xl md:mb-16 transition-all duration-700 ${flowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative grid grid-cols-3 gap-px bg-[#0b1c2d]/10">
            {flowSteps.map((step, index) => (
              <div key={step.step} className="relative bg-[#0b1c2d] px-6 py-8 text-center">
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                  {step.step}
                </div>
                <div className={`mb-1 text-lg font-bold ${step.color}`}>{step.action}</div>
                <div className="text-xs leading-relaxed text-white/40">{step.detail}</div>

                {/* Arrow connector */}
                {index < FLOW_STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 -translate-y-1/2">
                    <div className="flex items-center">
                      <div className="h-px w-3 bg-[#00c2a8]/40" />
                      <div className="h-0 w-0 border-y-4 border-l-4 border-y-transparent border-l-[#00c2a8]/40" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-[#0b1c2d]/35">
            {isZh ? "以商品支持的美元资本进入机构收益路径" : "Commodity-backed USD capital into institutional yield pathways"}
          </p>
        </div>

        {/* Manager / product cards */}
        {/* <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {MANAGERS.map((manager, index) => {
            const managerAnimation = managerAnimations[index];
            return (
              <div
                key={manager.id}
                ref={managerAnimation.ref}
                className={`group relative flex flex-col border p-7 transition-all duration-700 hover:shadow-sm ${
                  manager.highlight
                    ? "border-[#00c2a8]/35 bg-[#00c2a8]/[0.03]"
                    : "border-[#0b1c2d]/10 bg-white hover:border-[#00c2a8]/25 hover:bg-[#00c2a8]/[0.02]"
                } ${managerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {manager.highlight && (
                  <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-[#00c2a8] to-[#00c2a8]" />
                )}

                <div className="mb-4 flex items-center justify-between">
                  <span className="border border-[#0b1c2d]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                    {manager.tag}
                  </span>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-[#0b1c2d]">{manager.yield}</span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[#0b1c2d]/35">
                      {manager.yieldLabel}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="mb-0.5 text-lg font-bold text-[#0b1c2d]">{manager.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
                    {manager.manager}
                  </p>
                </div>

                <p className="mb-4 text-[10px] font-medium uppercase tracking-wider text-[#0b1c2d]/40">
                  {manager.strategy}
                </p>

                <p className="mt-auto text-sm leading-relaxed text-[#0b1c2d]/55">
                  {manager.description}
                </p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00c2a8] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div> */}

        {/* How the bank model works */}
        <div className="grid grid-cols-1 gap-10 border-t border-[#0b1c2d]/10 pt-12 md:grid-cols-2 md:gap-16 md:pt-14">
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#0b1c2d]/40">
              {isZh ? "银行部署模型如何运作" : "How the bank deployment model works"}
            </h4>
            <div className="space-y-4">
              {bankModelItems.map(({ label, text }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-[10px] font-bold uppercase tracking-wider text-[#00c2a8]">
                    {label}
                  </span>
                  <p className="text-sm leading-relaxed text-[#0b1c2d]/60">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Callout */}
          <div 
            ref={calloutRef}
            className={`flex flex-col justify-center transition-all duration-700 ${calloutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="border border-[#00c2a8]/25 bg-[#00c2a8]/[0.03] p-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00c2a8]/60">
                {isZh ? "核心创新" : "The innovation"}
              </p>
              <p className="mb-5 font-display text-xl font-light leading-relaxed text-[#0b1c2d] md:text-2xl">
                {isZh ? "银行客户可在一个一体化流程中将黄金激活为数字资产、借入 USDC，并配置至受监管资管机构，无需银行逐一与底层管理人建立直连关系。" : (
                  <>
                    A bank&apos;s client can{" "}
                    <span className="font-medium text-[#00c2a8]">activate gold as a digital asset</span>,{" "}
                    <span className="font-medium text-[#00c2a8]">borrow USDC</span> against it,
                    and deploy into{" "}
                    <span className="font-medium text-[#00c2a8]">Regulated Asset Managers</span>
                    {" "}in a single integrated workflow — without requiring the bank to establish
                    direct relationships with any of the underlying managers.
                  </>
                )}
              </p>
              <div className="space-y-1.5 text-[10px] text-[#0b1c2d]/40">
                <p>
                  {isZh
                    ? "· Mero 是分发与技术协同层，不是基金管理人。"
                    : "· Mero is a distribution and facilitation layer, not a fund manager."}
                </p>
                <p>
                  {isZh
                    ? "· 每个底层产品均在其所属司法辖区内独立受监管。"
                    : "· Each underlying product is independently regulated in its own jurisdiction."}
                </p>
                <p>
                  {isZh
                    ? "· 主要框架：IFSCA（基金管理）2025 规章与 IFSCA（资本市场中介）2025 规章。"
                    : "· Primary framework: IFSCA (Fund Management) Regulations 2025 and IFSCA (Capital Market Intermediaries) Regulations 2025."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
