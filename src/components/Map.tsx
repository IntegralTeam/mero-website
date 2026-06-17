import { lazy, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

type RegionKey = "india" | "uae" | "indonesia" | "africa" | "latinAmerica";

const LazyWorldMap = lazy(() => import("./WorldMap"));

const REGIONS: Record<
  RegionKey,
  {
    label: string;
    subtitle: string;
    status: string;
    statusActive: boolean;
    stat: string;
    statLabel: string;
    markets: string[];
    commodities: string[];
    framework: string;
    note: string;
  }
> = {
  india: {
    label: "India",
    subtitle: "GIFT IFSC · IFSCA Sandbox",
    status: "Phase 1 Pilot",
    statusActive: true,
    stat: "$517B",
    statLabel: "Annual commodity market",
    markets: ["GIFT City, Gandhinagar", "Mumbai", "Ahmedabad"],
    commodities: ["Gold (MEROG)", "Copper (MEROC)", "Nickel (MERON)"],
    framework: "IFSCA (Bullion Exchange) Regulations 2025 · IFSCA (Finance Company) Regulations 2021",
    note:
      "Primary launch jurisdiction. Mero operates within the IFSCA Regulatory Sandbox at GIFT IFSC — India's first International Financial Services Centre.",
  },
  uae: {
    label: "UAE",
    subtitle: "DIFC · Abu Dhabi",
    status: "Pipeline",
    statusActive: false,
    stat: "$900B",
    statLabel: "Annual commodity flows",
    markets: ["Dubai (DIFC)", "Abu Dhabi (ADGM)"],
    commodities: ["Gold", "Precious metals"],
    framework: "DFSA · ADGM FSRA",
    note:
      "Regional expansion target. DIFC and ADGM both provide established frameworks for commodity-backed digital assets and custody.",
  },
  indonesia: {
    label: "Indonesia",
    subtitle: "Jakarta · Sulawesi",
    status: "Pipeline",
    statusActive: false,
    stat: "$500B",
    statLabel: "Commodity production value",
    markets: ["Jakarta", "Sulawesi", "Kalimantan"],
    commodities: ["Nickel (world #1)", "Copper", "Bauxite"],
    framework: "OJK (Otoritas Jasa Keuangan)",
    note:
      "The world's largest nickel producer. Strong strategic alignment with Mero's MERON and MEROC warehouse receipt asset model.",
  },
  africa: {
    label: "Africa",
    subtitle: "Sub-Saharan & North Africa",
    status: "Pipeline",
    statusActive: false,
    stat: "$257B",
    statLabel: "Mining sector annual output",
    markets: ["South Africa", "Ghana", "Kenya", "Morocco"],
    commodities: ["Gold", "Copper", "Platinum"],
    framework: "Multiple national regulators",
    note:
      "Major gold and copper production centres. Opportunity to digitise commodities at source and connect directly to institutional capital markets.",
  },
  latinAmerica: {
    label: "Latin America",
    subtitle: "South America",
    status: "Pipeline",
    statusActive: false,
    stat: "$430B",
    statLabel: "Annual commodity exports",
    markets: ["Chile", "Brazil", "Colombia", "Peru"],
    commodities: ["Copper (Chile #1 globally)", "Gold", "Lithium", "Silver"],
    framework: "Regional regulatory exploration",
    note:
      "Chile is the world's largest copper producer. Brazil a major gold and agricultural commodity hub. Significant alignment with MEROC asset issuance.",
  },
};

const REGION_ORDER: RegionKey[] = ["india", "uae", "indonesia", "africa", "latinAmerica"];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3 w-3 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function Map() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-CN";
  const [activeRegion, setActiveRegion] = useState<RegionKey>("india");
  const regions = isZh
    ? {
        india: {
          ...REGIONS.india,
          label: "印度",
          subtitle: "GIFT IFSC · IFSCA 沙盒",
          status: "第一阶段试点",
          statLabel: "年度大宗商品市场规模",
          markets: ["GIFT City（甘地讷格尔）", "孟买", "艾哈迈达巴德"],
          commodities: ["黄金 (MEROG)", "铜 (MEROC)", "镍 (MERON)"],
          framework: "IFSCA《金银交易所条例》2025 · IFSCA《金融公司条例》2021",
          note:
            "核心首发司法辖区。Mero 在 GIFT IFSC 的 IFSCA 监管沙盒框架内推进落地。",
        },
        uae: {
          ...REGIONS.uae,
          label: "阿联酋",
          subtitle: "DIFC · 阿布扎比",
          status: "规划中",
          statLabel: "年度大宗商品流通规模",
          markets: ["迪拜（DIFC）", "阿布扎比（ADGM）"],
          commodities: ["黄金", "贵金属"],
          framework: "DFSA · ADGM FSRA",
          note: "区域扩展目标。DIFC 与 ADGM 均具备较成熟的商品支持数字资产与托管监管框架。",
        },
        indonesia: {
          ...REGIONS.indonesia,
          label: "印度尼西亚",
          subtitle: "雅加达 · 苏拉威西",
          status: "规划中",
          statLabel: "大宗商品产值",
          markets: ["雅加达", "苏拉威西", "加里曼丹"],
          commodities: ["镍（全球第一）", "铜", "铝土矿"],
          framework: "OJK（印尼金融服务管理局）",
          note: "全球最大镍生产国，与 Mero 的 MERON 和 MEROC 仓单资产模型高度契合。",
        },
        africa: {
          ...REGIONS.africa,
          label: "非洲",
          subtitle: "撒哈拉以南及北非",
          status: "规划中",
          statLabel: "采矿业年度产出",
          markets: ["南非", "加纳", "肯尼亚", "摩洛哥"],
          commodities: ["黄金", "铜", "铂金"],
          framework: "多国监管机构",
          note: "黄金与铜重要产区，可在产地端实现商品数字化并连接机构资本市场。",
        },
        latinAmerica: {
          ...REGIONS.latinAmerica,
          label: "拉丁美洲",
          subtitle: "南美洲",
          status: "规划中",
          statLabel: "年度大宗商品出口额",
          markets: ["智利", "巴西", "哥伦比亚", "秘鲁"],
          commodities: ["铜（智利全球第一）", "黄金", "锂", "白银"],
          framework: "区域监管探索中",
          note: "智利是全球最大铜生产国，巴西是主要黄金与农产品枢纽，与 MEROC 资产发行场景高度匹配。",
        },
      }
    : REGIONS;

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-20 md:py-28 lg:py-32">
      {/* Fine grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial gold glow — bottom left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[60vh] w-[60vw] opacity-15"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.2) 0%, transparent 65%)",
        }}
      />

      <div className="container relative px-[5%]">
        {/* Header */}
        <div className="mb-12 md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              {isZh ? "全球布局" : "Global Reach"}
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/40" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="font-display text-3xl font-light leading-[1.15] text-white md:text-4xl lg:text-[2.75rem]">
              {isZh ? "从印度启航。" : "Starting in India."}
              <br />
              <span className="text-[#00c2a8]">
                {isZh ? "为全球规模而构建。" : "Built for global scale."}
              </span>
            </h2>
            <p className="self-end text-white/50 md:text-lg">
              {isZh
                ? "第一阶段通过 GIFT IFSC 推进部署。我们的基础设施面向全球大宗商品市场，后续将扩展至阿联酋、印尼、非洲与拉美。选择区域查看扩展路线。"
                : "Phase 1 is being deployed through the GIFT IFSC. Our infrastructure is designed for commodity markets worldwide — with pipeline expansion across UAE, Indonesia, Africa, and Latin America. Select a region to explore the expansion roadmap."}
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr] lg:gap-10 xl:grid-cols-[420px_1fr]">

          {/* ── LEFT: Region cards ── */}
          <div className="flex flex-col gap-px">
            {REGION_ORDER.map((key) => {
              const region = regions[key];
              const isActive = activeRegion === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveRegion(key)}
                  className={`group relative w-full text-left transition-all duration-300 ${
                    isActive
                      ? "border-l-2 border-[#00c2a8] bg-[#00c2a8]/[0.06]"
                      : "border-l-2 border-white/[0.06] bg-white/[0.02] hover:border-[#00c2a8]/30 hover:bg-[#00c2a8]/[0.03]"
                  }`}
                >
                  {/* Card header — always visible */}
                  <div className="flex items-start justify-between px-5 py-4">
                    <div className="flex-1 pr-3">
                      <div className="mb-1 flex items-center gap-2">
                        <span
                          className={`inline-block h-1.5 w-1.5 flex-shrink-0 ${
                            region.statusActive ? "bg-[#00c2a8]" : "bg-white/20"
                          }`}
                        />
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                            region.statusActive ? "text-[#00c2a8]" : "text-white/30"
                          }`}
                        >
                          {region.status}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <h3
                          className={`font-display text-xl font-light transition-colors duration-200 ${
                            isActive ? "text-white" : "text-white/60 group-hover:text-white/80"
                          }`}
                        >
                          {region.label}
                        </h3>
                        <span className="text-xs text-white/30">{region.subtitle}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className={`text-lg font-bold transition-colors duration-200 ${
                          isActive ? "text-[#00c2a8]" : "text-white/40 group-hover:text-white/60"
                        }`}
                      >
                        {region.stat}
                      </span>
                      <ChevronIcon open={isActive} />
                    </div>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-[#00c2a8]/15 px-5 pb-5 pt-4">
                      <p className="mb-3 text-[10px] uppercase tracking-wider text-[#00c2a8]/50">
                        {region.statLabel}
                      </p>

                      <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-3">
                        <div>
                          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/25">
                            {isZh ? "重点市场" : "Key Markets"}
                          </p>
                          <ul className="space-y-0.5">
                            {region.markets.map((m) => (
                              <li key={m} className="text-xs text-white/55">
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/25">
                            {isZh ? "大宗商品" : "Commodities"}
                          </p>
                          <ul className="space-y-0.5">
                            {region.commodities.map((c) => (
                              <li key={c} className="text-xs text-[#00c2a8]/70">
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-white/25">
                          {isZh ? "监管框架" : "Regulatory Framework"}
                        </p>
                        <p className="text-[11px] leading-relaxed text-white/45">{region.framework}</p>
                      </div>

                      <p className="border-l border-[#00c2a8]/30 pl-3 text-xs leading-relaxed text-white/40">
                        {region.note}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: World map ── */}
          <div className="relative min-h-[320px] lg:min-h-0">
            {/* Map container */}
            <div className="relative h-full min-h-[320px] overflow-hidden border border-[#00c2a8]/10 bg-[#071220] lg:min-h-[520px]">
              {/* Corner accents */}
              <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-[#00c2a8]/40" />
              <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#00c2a8]/40" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#00c2a8]/40" />
              <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#00c2a8]/40" />

              <Suspense fallback={<div className="h-full w-full bg-[#071220]" />}>
                <LazyWorldMap
                  activeRegion={activeRegion}
                  onRegionClick={setActiveRegion}
                />
              </Suspense>

              {/* Active region label overlay */}
              <div className="pointer-events-none absolute bottom-4 right-4">
                <div className="border border-[#00c2a8]/20 bg-[#0a1628]/90 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#00c2a8]/60">
                    {isZh ? "当前区域" : "Selected region"}
                  </p>
                  <p className="text-sm font-bold text-white">
                    {regions[activeRegion].label}
                    <span className="ml-2 font-normal text-[#00c2a8]">{regions[activeRegion].stat}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-3 text-[10px] leading-relaxed text-white/25">
              {isZh
                ? "本地图用于展示目标市场与区域路径，不代表 GIFT IFSC 之外已上线部署、活跃客户或已签署合作。"
                : "This map illustrates target markets and regional pathways. It does not represent live deployment, active clients, or committed partnerships outside of GIFT IFSC."}
            </p>
          </div>
        </div>

        {/* Bottom metric strip */}
        <div className="mt-12 grid grid-cols-2 gap-px border-t border-[#00c2a8]/10 pt-8 md:grid-cols-4 md:mt-14">
          {[
            { value: "5", label: isZh ? "目标区域" : "Target regions" },
            { value: "$2.6T+", label: isZh ? "合计大宗商品市场规模" : "Combined commodity markets" },
            { value: "GIFT IFSC", label: isZh ? "第一阶段司法辖区" : "Phase 1 jurisdiction" },
            { value: "IFSCA", label: isZh ? "主要监管机构" : "Primary regulator" },
          ].map(({ value, label }) => (
            <div key={label} className="px-6 py-4 first:pl-0">
              <p className="mb-1 font-display text-2xl font-light text-[#00c2a8] md:text-3xl">{value}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
