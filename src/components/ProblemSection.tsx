import gold from "../assets/gold.jpg";
import { Reveal } from "./Reveal";

export function ProblemSection() {
  return (
    <section id="problem" className="relative bg-[#0b1c2d]">
      <div className="grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] lg:grid-cols-2 lg:grid-rows-1">
        <Reveal variant="clip" className="relative min-h-[26rem] overflow-hidden">
          <img
            src={gold}
            alt="Gold bars held in a vault"
            width={1024}
            height={1536}
            className="reveal-media absolute inset-0 h-full w-full object-cover object-[50%_70%] lg:object-top"
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
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background: "radial-gradient(ellipse 70% 35% at 25% 50%, rgba(11,28,45,0.75) 0%, transparent 100%)",
            }}
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end px-[5%] pb-10 md:px-[5vw] md:pb-14 lg:justify-center lg:pb-0">
            <Reveal variant="blur" delay={600}>
              <div className="mb-5 inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3 py-1">
                <span className="h-1.5 w-1.5 bg-[#C9A84C]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8C96E]">
                  The problem
                </span>
              </div>
              <h2 className="max-w-xl font-display text-4xl font-light leading-[1.15] text-white md:text-5xl">
                Vaulted gold is hard to{" "}
                <span className="text-[#E8C96E]">verify, pledge and enforce</span>
              </h2>
            </Reveal>
          </div>
        </Reveal>

        <div className="emerald-gradient-bg relative flex items-center overflow-hidden px-[5%] py-16 md:px-[5vw] md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="pointer-events-none absolute -left-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 65%)" }}
          />
          <Reveal variant="right" delay={300} className="relative max-w-xl">
            <span className="mb-8 block h-0.5 w-12 bg-gradient-to-r from-[#C9A84C] to-[#00c2a8]" />
            <p className="font-display text-2xl font-light leading-[1.5] text-white/85 md:text-[1.75rem]">
              Using vaulted gold as collateral means verifying the metal and who owns it, recording a
              pledge that will hold, monitoring it, and having a clear enforcement path.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
