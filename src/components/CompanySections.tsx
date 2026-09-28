import { useEffect, useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "../lib/site";

type TeamMember = {
  name: string;
  title: string;
  bio: string;
};

// Names, titles and one-line bios must match the investor deck exactly. The section stays hidden
// until this list is filled in.
const TEAM: TeamMember[] = [];

const STATUS_ROWS = [
  { label: "Status", value: "Applicant" },
  { label: "Preliminary stage", value: "Passed, July 2026" },
  { label: "Testing", value: "In isolation" },
  { label: "Live clients, funds or metal", value: "None" },
] as const;

export function BusinessModel() {
  return (
    <section id="business-model" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,194,168,0.08) 0%, transparent 65%)" }}
      />
      <div className="container relative px-[5%]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="left" className="lg:col-span-4">
            <SectionHeading eyebrow="How Mero is paid" title="Business model" />
          </Reveal>
          <Reveal variant="clip" delay={150} className="relative overflow-hidden bg-[#0b1c2d] p-8 md:p-10 lg:col-span-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-60"
              style={{ background: "radial-gradient(circle, rgba(0,194,168,0.25) 0%, transparent 70%)" }}
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-gradient-to-br from-[#00c2a8] to-[#066253] text-white">
                <Icon name="reconcile" className="h-7 w-7" />
              </div>
              <p className="text-lg leading-relaxed text-white/70 md:text-xl">
                <span className="font-semibold text-white">Flat-fee infrastructure.</span> Mero is paid for
                the platform, never a share of any loan or return.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatusOrbit() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 md:h-[40rem] md:w-[40rem]"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="statusArc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C96E" stopOpacity="0" />
          <stop offset="100%" stopColor="#E8C96E" />
        </linearGradient>
        <radialGradient id="statusGlow">
          <stop offset="0%" stopColor="#E8C96E" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8C96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" stroke="rgba(201,168,76,0.10)" />
      <circle cx="200" cy="200" r="150" stroke="rgba(201,168,76,0.14)" strokeDasharray="2 6">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="90s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="200" r="110" stroke="rgba(0,194,168,0.14)" />
      <path d="M 200 10 A 190 190 0 0 1 364.5 295" stroke="url(#statusArc)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="364.5" cy="295" r="16" fill="url(#statusGlow)">
        <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="364.5" cy="295" r="4" fill="#E8C96E" />
    </svg>
  );
}

export function WhereWeAre() {
  return (
    <section id="where-we-are" className="relative overflow-hidden bg-[#0a1628] py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.16) 0%, transparent 60%)" }}
      />

      <div className="container relative px-[5%]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <Reveal variant="up" className="lg:col-span-5">
            <SectionHeading eyebrow="Status" title="Where we are" tone="light" />
            <p className="mt-8 text-lg leading-relaxed text-white/60">
              Mero Technologies is an applicant to the IFSCA FinTech Innovation Sandbox at GIFT IFSC,
              having passed the preliminary stage in July 2026. Testing runs in isolation, with no live
              clients, funds or metal, before any live pilot.
            </p>
          </Reveal>

          <div className="relative flex min-h-[26rem] items-center justify-center lg:col-span-7 lg:min-h-[34rem]">
            <Reveal variant="orbit" className="pointer-events-none absolute inset-0">
              <StatusOrbit />
            </Reveal>
            <Reveal
              variant="blur"
              delay={350}
              className="relative w-full max-w-md border border-white/10 bg-[#0b1c2d]/80 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              <div className="h-0.5 bg-gradient-to-r from-[#C9A84C] via-[#E8C96E] to-[#00c2a8]" />
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E8C96E]/80">
                    GIFT IFSC, India
                  </p>
                  <p className="mt-2 font-display text-lg leading-snug text-white">
                    IFSCA FinTech Innovation Sandbox
                  </p>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center bg-[#C9A84C]/15 text-[#E8C96E]">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
              </div>
              <dl className="divide-y divide-white/[0.06] px-6">
                {STATUS_ROWS.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-6 py-4">
                    <dt className="text-sm text-white/45">{row.label}</dt>
                    <dd className="text-right text-sm font-semibold text-white">
                      {row.label === "Status" ? (
                        <span className="inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-2.5 py-1 text-xs uppercase tracking-[0.15em] text-[#E8C96E]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E8C96E]" />
                          {row.value}
                        </span>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  if (TEAM.length === 0) return null;

  return (
    <section id="team" className="relative bg-white py-20 md:py-28">
      <div className="container px-[5%]">
        <div className="mb-12 md:mb-14">
          <SectionHeading title="Team" />
        </div>
        <div className="grid grid-cols-1 gap-px bg-[#0b1c2d]/10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="bg-white p-8">
              <h3 className="text-lg font-bold text-[#0b1c2d]">{member.name}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
                {member.title}
              </p>
              <p className="text-sm leading-relaxed text-[#0b1c2d]/65">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MAGNET_RADIUS = 320;
const MAGNET_PULL = 0.45;

function useMagneticButton() {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const shineRef = useRef<HTMLSpanElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const button = buttonRef.current;
    const label = labelRef.current;
    const shine = shineRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !button || !label || !shine || !spotlight) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const target = { x: 0, y: 0, p: 0 };
    const current = { x: 0, y: 0, p: 0 };
    let frame = 0;

    const render = () => {
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      current.p += (target.p - current.p) * 0.14;

      button.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) scale(${1 + current.p * 0.06})`;
      label.style.transform = `translate3d(${current.x * 0.3}px, ${current.y * 0.3}px, 0)`;
      button.style.boxShadow = [
        `${current.x * 0.8}px ${current.y * 0.8 + 16}px ${36 + current.p * 44}px -6px rgba(0, 194, 168, ${0.12 + current.p * 0.5})`,
        `${-current.x * 0.25}px ${24 - current.y * 0.25}px 40px -20px rgba(11, 28, 45, 0.55)`,
      ].join(", ");
      shine.style.opacity = String(current.p);

      const settled =
        Math.abs(target.x - current.x) < 0.05 &&
        Math.abs(target.y - current.y) < 0.05 &&
        Math.abs(target.p - current.p) < 0.005;
      frame = settled ? 0 : requestAnimationFrame(render);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2 - current.x;
      const centerY = rect.top + rect.height / 2 - current.y;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const proximity = Math.max(0, 1 - Math.hypot(dx, dy) / MAGNET_RADIUS);

      target.x = dx * MAGNET_PULL * proximity;
      target.y = dy * MAGNET_PULL * proximity;
      target.p = proximity;

      shine.style.setProperty("--shine-x", `${event.clientX - rect.left}px`);
      shine.style.setProperty("--shine-y", `${event.clientY - rect.top}px`);

      const sectionRect = section.getBoundingClientRect();
      spotlight.style.setProperty("--spot-x", `${event.clientX - sectionRect.left}px`);
      spotlight.style.setProperty("--spot-y", `${event.clientY - sectionRect.top}px`);
      spotlight.style.opacity = "1";

      schedule();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      target.p = 0;
      spotlight.style.opacity = "0";
      schedule();
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { sectionRef, buttonRef, labelRef, shineRef, spotlightRef };
}

export function Contact() {
  const { sectionRef, buttonRef, labelRef, shineRef, spotlightRef } = useMagneticButton();

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#fafbfc] py-28 md:py-36 lg:py-44"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 opacity-70"
        style={{ background: "radial-gradient(ellipse, rgba(0,194,168,0.10) 0%, transparent 65%)" }}
      />
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(520px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0,194,168,0.14), transparent 65%)",
        }}
      />
      <div className="container relative flex flex-col items-center px-[5%]">
        <Reveal variant="blur">
          <SectionHeading eyebrow="Contact" title="Talk to us" align="center" />
        </Reveal>
        <Reveal variant="zoom" delay={250} className="mt-12">
          <a
            ref={buttonRef}
            href={`mailto:${CONTACT_EMAIL}`}
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-[#0b1c2d] px-10 py-5 text-base font-semibold tracking-wide text-white shadow-[0_16px_36px_-6px_rgba(0,194,168,0.12),0_24px_40px_-20px_rgba(11,28,45,0.55)] transition-colors duration-300 will-change-transform hover:bg-[#00c2a8] hover:text-[#0b1c2d]"
          >
            <span
              ref={shineRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0"
              style={{
                background:
                  "radial-gradient(140px circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.22), transparent 70%)",
              }}
            />
            <span ref={labelRef} className="relative inline-flex items-center gap-3">
              {CONTACT_EMAIL}
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
