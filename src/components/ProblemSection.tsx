import gold from "../assets/gold.jpg";

export function ProblemSection() {
  return (
    <section id="problem" className="relative bg-white">
      <div className="grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative min-h-[26rem] overflow-hidden">
          <img
            src={gold}
            alt="Gold bars held in a vault"
            width={1024}
            height={1536}
            className="absolute inset-0 h-full w-full object-cover object-[50%_70%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(11,28,45,0.92) 0%, rgba(11,28,45,0.55) 40%, rgba(11,28,45,0.15) 75%, rgba(11,28,45,0.35) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.12) 0%, transparent 60%)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 px-[5%] pb-10 md:px-[5vw] md:pb-14">
            <div className="mb-5 inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3 py-1">
              <span className="h-1.5 w-1.5 bg-[#C9A84C]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8C96E]">
                The problem
              </span>
            </div>
            <h2 className="max-w-md font-display text-4xl font-light leading-[1.2] text-white md:text-5xl">
              Vaulted gold is <span className="text-[#E8C96E]">dead capital</span>
            </h2>
          </div>
        </div>

        <div className="relative flex items-center bg-[#fafbfc] px-[5%] py-16 md:px-[5vw] md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,28,45,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,28,45,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative max-w-xl">
            <span className="mb-8 block h-0.5 w-12 bg-gradient-to-r from-[#C9A84C] to-[#00c2a8]" />
            <p className="font-display text-2xl font-light leading-[1.5] text-[#0b1c2d]/80 md:text-[1.75rem]">
              Gold held in vaults costs money to store and insure, and earns nothing. Lenders rarely
              accept it as collateral. The receipt is hard to verify, pledges sit in side letters, and
              enforcement means moving metal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
