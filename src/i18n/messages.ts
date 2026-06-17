export const defaultLocale = "en";
export const chineseLocale = "zh-CN";

export const messages = {
  en: {
    translation: {
      seo: {
        homeTitle: "Commodity Tokenisation Infrastructure at GIFT IFSC",
        homeDescription:
          "Mero provides commodity-backed digital asset infrastructure at GIFT IFSC, with first-release pilot workflows and roadmap pathways for expanded products and markets.",
      },
      nav: {
        assets: "Assets",
        lending: "Lending",
        yield: "Yield",
        faq: "FAQ",
        contact: "Contact",
      },
      compliance: {
        barAria: "Professional investor disclaimer",
        title: "Important - please read",
        confirm:
          "I confirm I am a professional or institutional investor and I agree to continue",
        footer:
          "By continuing you acknowledge that you have read and understood the above. If you do not agree, please leave this website.",
        disclaimer:
          "The information on this website is intended solely for professional and institutional investors in jurisdictions where such distribution is permitted. It is not directed at, and must not be relied upon by, retail clients or any persons in the United Kingdom, United States, or any jurisdiction where such distribution would be contrary to local law or regulation. Nothing on this website constitutes a financial promotion, offer, or solicitation.",
      },
    },
  },
  "zh-CN": {
    translation: {
      seo: {
        homeTitle: "GIFT IFSC 大宗商品代币化基础设施",
        homeDescription:
          "Mero 在 GIFT IFSC 提供以大宗商品为支撑的数字资产基础设施，涵盖首阶段试点流程以及面向更多产品与市场的路线图。",
      },
      nav: {
        assets: "资产",
        lending: "借贷",
        yield: "收益",
        faq: "常见问题",
        contact: "联系",
      },
      compliance: {
        barAria: "专业投资者免责声明",
        title: "重要提示 - 请阅读",
        confirm: "我确认自己是专业或机构投资者，并同意继续访问",
        footer: "继续访问即表示您已阅读并理解上述内容。如不同意，请离开本网站。",
        disclaimer:
          "本网站信息仅面向在其司法辖区内允许接收此类信息的专业和机构投资者。该信息不面向英国、美国的零售客户或任何在当地法律法规下禁止此类分发的司法辖区内人士，也不得被其依赖。本网站任何内容均不构成金融推广、要约或招揽。",
      },
    },
  },
} as const;

export type SupportedLocale = keyof typeof messages;
