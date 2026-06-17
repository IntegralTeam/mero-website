import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQS = [
  {
    question: "What is MEROG and how does it work?",
    bullets: [
      "MEROG represents 1 fine troy oz of gold on Sui Network",
      "Gold is held in LBMA-certified vaults with verified encumbrance",
      "Asset is digital proof of ownership — transferable on-chain",
      "Roadmap extensions include MEROC (copper) and MERON (nickel)",
    ],
  },
  {
    question: "How does the lending protocol work?",
    bullets: [
      "Lock warehouse receipts as collateral via smart contract",
      "Pilot terms include 5% fixed rate and 60% LTV at origination",
      "Indicative terms: 30/60/90/180 days with 48-hour cure period",
      "No flash liquidation — orderly unwind only",
    ],
  },
  {
    question: "What is the 48-hour cure period?",
    bullets: [
      "If LTV exceeds 75%, borrower receives margin notice",
      "48 hours to top up collateral or repay debt",
      "Only then does orderly unwind begin",
      "Prevents flash liquidation — standard for institutional finance",
    ],
  },
  {
    question: "What is the Gold ETF yield overlay?",
    bullets: [
      "Physical gold converted to a Gold ETF",
      "Authorised investment manager executes options strategies",
      "Collar: 1.3–1.6% target yield with ~82–88% downside floor",
      "Covered Call: 4–9% target yield, no floor — for income-focused institutions",
    ],
  },
  {
    question: "Why GIFT IFSC?",
    bullets: [
      "India's international financial centre regulated by IFSCA",
      "Bullion Exchange Regulations 2025 support digital warehouse receipts",
      "Access to Indian banks with commodity client bases",
      "Regulatory sandbox pathway supports controlled deployment",
    ],
  },
  {
    question: "How does the white-label bank model work?",
    bullets: [
      "Banks integrate Mero under their own brand at GIFT IFSC",
      "Bank's KYC/AML governs onboarding — Mero provides infrastructure",
      "Clients access asset issuance, lending, and phased product modules",
      "Bank configures products and earns spread on client activity",
    ],
  },
] as const;

export function Faq7() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh-CN";
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const faqAnimations = FAQS.map(() => useScrollAnimation({ threshold: 0.1 }));
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation({ threshold: 0.1 });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const zhFaqs = [
    {
      question: "MEROG 是什么？如何运作？",
      bullets: [
        "MEROG 在 Sui Network 上代表 1 金衡盎司黄金",
        "黄金存放于 LBMA 认证金库，并有可验证的权利负担记录",
        "资产是可转移的链上所有权数字凭证",
        "路线图扩展包括 MEROC（铜）与 MERON（镍）",
      ],
    },
    {
      question: "借贷协议如何运作？",
      bullets: [
        "通过智能合约锁定仓单资产作为抵押",
        "试点条款包括固定 5% 利率与初始 60% LTV",
        "参考期限 30/60/90/180 天，含 48 小时补仓窗口",
        "无闪电清算，仅有序平仓",
      ],
    },
    {
      question: "什么是 48 小时补仓期？",
      bullets: [
        "当 LTV 超过 75% 时，借款人会收到追加保证金通知",
        "在 48 小时内补充抵押或偿还债务",
        "逾期后才会启动有序平仓",
        "避免闪电清算，符合机构金融实践",
      ],
    },
    {
      question: "什么是黄金 ETF 收益叠加策略？",
      bullets: [
        "将实物黄金转换为黄金 ETF 持仓",
        "由授权投资管理人执行期权策略",
        "领口策略：目标收益 1.3–1.6%，下行保护约 82–88%",
        "备兑看涨：目标收益 4–9%，无保底，适合收益导向机构",
      ],
    },
    {
      question: "为什么选择 GIFT IFSC？",
      bullets: [
        "印度国际金融中心，由 IFSCA 监管",
        "2025 年金银交易规则支持数字仓单模式",
        "可连接拥有大宗商品客户基础的印度银行",
        "监管沙盒路径支持受控部署",
      ],
    },
    {
      question: "白标银行模式如何运作？",
      bullets: [
        "银行在 GIFT IFSC 以自有品牌接入 Mero",
        "银行沿用自身 KYC/AML 体系，Mero 提供基础设施",
        "客户可访问资产发行、借贷与分阶段产品模块",
        "银行可配置产品并通过客户活动获得价差收益",
      ],
    },
  ] as const;
  const localizedFaqs = isZh ? zhFaqs : FAQS;

  return (
    <section id="faq" className="relative bg-[#fafbfc] py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div 
          ref={headerRef}
          className={`mx-auto mb-16 max-w-2xl text-center md:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              FAQ
            </span>
          </div>
          <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            {isZh ? "常见问题" : "Common questions"}
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            {isZh
              ? "平台机制、借贷模型、收益叠加路径与 GIFT IFSC 相关说明。"
              : "Platform mechanics, lending model, overlay pathway, and GIFT IFSC context."}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-[#0b1c2d]/10">
            {localizedFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const faqAnimation = faqAnimations[index];
              return (
                <div 
                  key={faq.question} 
                  ref={faqAnimation.ref}
                  className={`faq-item border-b border-[#0b1c2d]/10 transition-all duration-700 ${faqAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isOpen ? 'faq-item-open' : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:bg-white/50 md:py-8"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className={`text-xs font-semibold transition-colors ${isOpen ? 'text-[#00c2a8]' : 'text-[#00c2a8]/60'}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className={`text-base font-semibold transition-colors md:text-lg ${isOpen ? 'text-[#00c2a8]' : 'text-[#0b1c2d]'}`}>
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-180 border-[#00c2a8] bg-[#00c2a8]" : "border-[#00c2a8]/30 bg-transparent group-hover:border-[#00c2a8]/60"}`}
                    >
                      <svg 
                        className={`h-3 w-3 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#00c2a8]'}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M12 6v6m0 0v6m0-6h6m-6 0H6"}
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="faq-answer-wrapper overflow-hidden"
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="faq-answer-content min-h-0">
                      <div className="border-l-2 border-[#00c2a8]/20 pb-6 pl-8 pr-12 md:pb-8 md:pl-10">
                        <ul className="space-y-3">
                          {faq.bullets.map((bullet, i) => (
                            <li 
                              key={i} 
                              className="flex items-start gap-3 text-sm text-[#0b1c2d]/60 md:text-base"
                              style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateX(0)' : 'translateX(-8px)',
                                transition: `all 0.4s ease-out ${i * 50}ms`,
                              }}
                            >
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00c2a8]" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div 
          ref={contactRef}
          className={`mx-auto mt-16 max-w-md text-center md:mt-20 transition-all duration-700 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2a8]/60">
              {isZh ? "联系" : "Contact"}
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/30" />
          </div>
          <h4 className="mb-3 text-xl font-bold text-[#0b1c2d] md:text-2xl">
            {isZh ? "还有疑问？" : "Still have questions?"}
          </h4>
          <p className="mb-6 text-[#0b1c2d]/60">
            {isZh ? "欢迎联系机构业务团队。" : "Reach out to our institutional team."}
          </p>
          <a
            href="mailto:info@mero.tech"
            className="inline-flex items-center gap-2 border border-[#0b1c2d]/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d] transition-all hover:border-[#00c2a8] hover:text-[#00c2a8]"
          >
            {isZh ? "联系我们" : "Contact Us"}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
