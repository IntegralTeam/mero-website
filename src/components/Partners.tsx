import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ECOSYSTEM_GROUPS = [
  {
    category: "Infrastructure",
    partners: [
      { name: "Sui Network", descriptor: "Settlement layer" },
      { name: "Circle · USDC", descriptor: "Settlement currency" },
    ],
  },
  {
    category: "Yield Products",
    partners: [
      { name: "BlackRock · BUIDL", descriptor: "Tokenised US treasury fund · ~5% net" },
      { name: "Apollo · ACRED", descriptor: "Tokenised credit fund · ~7–8% net" },
      { name: "Franklin Templeton · BENJI", descriptor: "Tokenised money market · ~5% net" },
      { name: "SpiderRock / BlackRock", descriptor: "Gold ETF overlay · 1.3–9% net" },
      { name: "Paradox / Hilbert", descriptor: "Delta-neutral strategies · ~12–18% gross" },
    ],
  },
  {
    category: "Regulatory & Compliance",
    partners: [
      { name: "IFSCA", descriptor: "GIFT IFSC Regulatory Sandbox" },
      { name: "Chainalysis", descriptor: "On-chain AML screening" },
      { name: "Elliptic", descriptor: "On-chain transaction monitoring" },
    ],
  },
] as const;

export function Partners() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const groupAnimations = ECOSYSTEM_GROUPS.map(() => useScrollAnimation({ threshold: 0.1 }));
  
  return (
    <section id="partners" className="relative overflow-hidden bg-[#0a1628] py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative px-[5%]">
        <div 
          ref={sectionRef}
          className={`mb-10 flex items-center justify-center gap-3 md:mb-12 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="h-px w-8 bg-[#00c2a8]/30" />
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Ecosystem &amp; Institutional Partners
          </h2>
          <span className="h-px w-8 bg-[#00c2a8]/30" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {ECOSYSTEM_GROUPS.map((group, groupIndex) => {
            const groupAnimation = groupAnimations[groupIndex];
            return (
              <div 
                key={group.category}
                ref={groupAnimation.ref}
                className={`transition-all duration-700 ${groupAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${groupIndex * 150}ms` }}
              >
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00c2a8]/50">
                  {group.category}
                </p>
                <div className="space-y-3">
                  {group.partners.map((partner, partnerIndex) => (
                    <div
                      key={partner.name}
                      className="group border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all duration-200 hover:border-[#00c2a8]/20 hover:bg-white/[0.04]"
                      style={{ transitionDelay: `${partnerIndex * 50}ms` }}
                    >
                      <p className="text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                        {partner.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-white/35">{partner.descriptor}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-6 text-center md:mt-12">
          <p className="text-[10px] uppercase tracking-wider text-white/20">
            Phase 1 — GIFT IFSC Regulatory Sandbox — Sui Network
          </p>
        </div>
      </div>
    </section>
  );
}
