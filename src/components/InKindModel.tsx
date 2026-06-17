import { useTranslation } from "react-i18next";

const COMPARISON_DATA = {
  defi: {
    title: "DeFi Protocols",
    subtitle: "Algorithmic Mechanics",
    points: [
      { label: "Liquidation", value: "Instant automated liquidation triggered by on-chain price oracle. No advance notice." },
      { label: "Rate", value: "Variable / floating. Can change with utilisation rate. No fixed terms at origination." },
      { label: "Structure", value: "Open-ended. No fixed maturity. Positions can be closed at any time by the protocol." },
      { label: "Collateral", value: "Crypto assets with on-chain price feeds. Highly volatile. Susceptible to oracle manipulation." },
      { label: "Matching", value: "Fully algorithmic. No counterparty vetting, KYC, or institutional screening." },
    ],
    highlight: "Not designed for institutional counterparties",
  },
  mero: {
    title: "Mero Lending",
    subtitle: "Institutional Margin Mechanics",
    points: [
      { label: "Liquidation", value: "75% LTV maintenance threshold can trigger a margin notice. Borrower has a 48-hour cure window to top up collateral or repay." },
      { label: "Rate", value: "Pilot configuration targets a fixed annualised borrow rate at origination." },
      { label: "Structure", value: "Pilot structure supports fixed terms (30 / 60 / 90 / 180 days) matched via auction or RFQ-style workflows." },
      { label: "Collateral", value: "Physical warehouse receipt assets (MEROG, MEROC, MERON). Custodian-verified, vault-held commodity." },
      { label: "Matching", value: "Curated lender panel. Auction / RFQ mechanism. All counterparties KYC/AML screened." },
    ],
    highlight: "48-hour cure window — no flash liquidation",
  },
} as const;

export function InKindModel() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-CN";
  const comparisonData = isZh
    ? {
        defi: {
          ...COMPARISON_DATA.defi,
          title: "DeFi 协议",
          subtitle: "算法化机制",
          points: [
            { label: "清算", value: "由链上预言机触发即时自动清算，无提前通知。" },
            { label: "利率", value: "浮动利率，随利用率变化，发起时无固定期限利率。" },
            { label: "结构", value: "开放式，无固定到期，可由协议随时平仓。" },
            { label: "抵押品", value: "以高波动加密资产为主，依赖链上价格源。" },
            { label: "撮合", value: "全算法撮合，无机构级 KYC/AML 与交易对手筛选。" },
          ],
          highlight: "并非为机构交易对手设计",
        },
        mero: {
          ...COMPARISON_DATA.mero,
          title: "Mero 借贷",
          subtitle: "机构级保证金机制",
          points: [
            { label: "清算", value: "当 LTV 达到 75% 维持阈值会触发追加保证金通知，借款人有 48 小时补仓或还款窗口。" },
            { label: "利率", value: "试点配置目标为发起时固定年化借款利率。" },
            { label: "结构", value: "支持 30/60/90/180 天等固定期限，可通过拍卖或 RFQ 方式撮合。" },
            { label: "抵押品", value: "实物仓单资产（MEROG、MEROC、MERON），由托管方核验并在金库托管。" },
            { label: "撮合", value: "精选出借方池，拍卖/RFQ 机制，交易对手需通过 KYC/AML。" },
          ],
          highlight: "48 小时补仓窗口 — 无闪电清算",
        },
      }
    : COMPARISON_DATA;
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              {isZh ? "借贷协议" : "Lending Protocol"}
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/40" />
          </div>
          <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            {isZh ? "机构级保证金机制" : "Institutional margin mechanics"}
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            {isZh
              ? "基于仓单资产的回购式定期借贷。其经济结构接近传统商品回购，结算与抵押管理可自动化并可审计。"
              : "Repo-style term lending against warehouse receipt assets. The economics mirror traditional commodity repo — settlement and collateral management are automated and auditable."}
          </p>
        </div>

        {/* Key stat highlight */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="grid grid-cols-2 gap-px bg-[#0b1c2d]/10 md:grid-cols-4">
            {[
              { stat: "60%", label: isZh ? "初始 LTV" : "LTV at Origination" },
              { stat: "75%", label: isZh ? "维持阈值" : "Maintenance Threshold" },
              { stat: "48h", label: isZh ? "补仓窗口" : "Margin Cure Window" },
              { stat: "5%", label: isZh ? "固定借款利率" : "Fixed Borrow Rate" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white px-6 py-5 text-center">
                <div className="text-2xl font-bold text-[#0b1c2d]">{stat}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* DeFi column */}
          <div className="relative flex flex-col border border-[#0b1c2d]/10 bg-[#fafbfc] p-8 md:p-10">
            <div className="mb-6">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d]/40 md:text-2xl">
                {comparisonData.defi.title}
              </h3>
              <p className="text-sm text-[#0b1c2d]/30">{comparisonData.defi.subtitle}</p>
            </div>

            <ul className="flex-grow space-y-5">
              {comparisonData.defi.points.map((point) => (
                <li key={point.label} className="flex items-start gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/25">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/50">{point.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#0b1c2d]/10 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/30">
                {comparisonData.defi.highlight}
              </span>
            </div>
          </div>

          {/* Mero column */}
          <div className="relative flex flex-col border border-[#00c2a8]/30 bg-[#00c2a8]/[0.02] p-8 md:p-10">
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-[#00c2a8] to-[#00c2a8]" />

            <div className="mb-6">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d] md:text-2xl">
                {comparisonData.mero.title}
              </h3>
              <p className="text-sm text-[#00c2a8]">{comparisonData.mero.subtitle}</p>
            </div>

            <ul className="flex-grow space-y-5">
              {comparisonData.mero.points.map((point) => (
                <li key={point.label} className="flex items-start gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/75">{point.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#00c2a8]/20 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
                {comparisonData.mero.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Illustrative example */}
        <div className="mt-12 border-t border-[#0b1c2d]/10 pt-8 md:mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs uppercase tracking-wider text-[#0b1c2d]/35">
              {isZh ? "示例说明" : "Illustrative Example"}
            </p>
            <p className="text-lg text-[#0b1c2d]/75 md:text-xl">
              {isZh ? "以 " : "Lock "}
              <span className="font-bold text-[#0b1c2d]">$10M of MEROG</span>
              {isZh ? " 作为抵押，可在 90 天期限内按试点目标固定利率借入 " : " as collateral → borrow "}
              <span className="font-bold text-[#00c2a8]">
                {isZh ? "最高约 $6M USDC" : "up to ~$6M USDC at a pilot target fixed rate"}
              </span>
              {isZh
                ? "。若 LTV 高于 75%，则在平仓前有 48 小时补仓窗口。"
                : " on a 90-day term. If LTV rises above 75%, a 48-hour cure window applies before unwind."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
