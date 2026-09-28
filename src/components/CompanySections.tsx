import { SectionHeading } from "./SectionHeading";
import { Icon } from "./icons";
import { CONTACT_EMAIL } from "../lib/site";

type TeamMember = {
  name: string;
  title: string;
  bio: string;
};

// Names, titles and one-line bios must match the investor deck exactly. The section stays hidden
// until this list is filled in.
const TEAM: TeamMember[] = [];

const STATUS_STEPS = [
  { label: "IFSCA FinTech Innovation Sandbox applicant", done: true },
  { label: "Preliminary stage passed", detail: "July 2026", done: true },
  { label: "Testing in isolation", detail: "No live clients, funds or metal", done: false },
] as const;

export function BusinessModel() {
  return (
    <section id="business-model" className="relative bg-white py-16 md:py-24">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />
      <div className="container px-[5%]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="How Mero is paid" title="Business model" />
          </div>
          <div className="relative overflow-hidden bg-[#0b1c2d] p-8 md:p-10 lg:col-span-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-60"
              style={{ background: "radial-gradient(circle, rgba(0,194,168,0.25) 0%, transparent 70%)" }}
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#00c2a8]/15 text-[#00c2a8] ring-1 ring-[#00c2a8]/30">
                <Icon name="reconcile" className="h-7 w-7" />
              </div>
              <p className="text-lg leading-relaxed text-white/70 md:text-xl">
                <span className="font-semibold text-white">Flat-fee infrastructure.</span> Mero is paid for
                the platform, never a share of any loan or return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusNode({ done }: { done: boolean }) {
  if (done) {
    return (
      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E8C96E] to-[#C9A84C] text-white shadow-[0_8px_24px_rgba(201,168,76,0.35)] ring-8 ring-[#C9A84C]/10">
        <svg className="h-6 w-6" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  return (
    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#C9A84C]/60 bg-white ring-8 ring-[#C9A84C]/5">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A84C] opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#C9A84C]" />
      </span>
    </span>
  );
}

export function WhereWeAre() {
  return (
    <section id="where-we-are" className="relative overflow-hidden bg-[#fbf5e4] py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-full w-1/2 opacity-60"
        style={{ background: "radial-gradient(ellipse at left, rgba(201,168,76,0.18) 0%, transparent 65%)" }}
      />
      <div className="container relative px-[5%]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Status" title="Where we are" />
          </div>
          <p className="text-lg leading-relaxed text-[#0b1c2d]/75 md:text-xl lg:col-span-7">
            Mero Technologies is an applicant to the IFSCA FinTech Innovation Sandbox at GIFT IFSC,
            having passed the preliminary stage in July 2026. Testing runs in isolation, with no live
            clients, funds or metal, before any live pilot.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden border border-[#C9A84C]/25 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(11,28,45,0.25)] md:mt-20 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C9A84C]/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#C9A84C]/20" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(232,201,110,0.18) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative mb-10 flex flex-wrap items-center gap-3 md:mb-14">
            <span className="inline-flex items-center gap-2 bg-[#0b1c2d] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 bg-[#E8C96E]" />
              IFSCA FinTech Innovation Sandbox
            </span>
            <span className="inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#fbf5e4] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a6d1f]">
              GIFT IFSC, India
            </span>
          </div>

          <ol className="relative grid grid-cols-1 md:grid-cols-3" aria-label="Sandbox status">
            {STATUS_STEPS.map((step, index) => {
              const next = STATUS_STEPS[index + 1];
              return (
                <li
                  key={step.label}
                  className="relative flex gap-5 pb-10 last:pb-0 md:flex-col md:items-center md:gap-6 md:pb-0 md:text-center"
                >
                  {next && (
                    <>
                      <span
                        className={`absolute left-7 top-14 h-[calc(100%-3.5rem)] -translate-x-1/2 md:hidden ${
                          next.done ? "w-0.5 bg-[#C9A84C]" : "border-l-2 border-dashed border-[#C9A84C]/50"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`absolute left-1/2 top-7 hidden w-full -translate-y-1/2 md:block ${
                          next.done
                            ? "h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E]"
                            : "border-t-2 border-dashed border-[#C9A84C]/50"
                        }`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                  <StatusNode done={step.done} />
                  <div className="pt-1 md:max-w-[15rem] md:pt-0">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                      {`Step 0${index + 1}`}
                    </p>
                    <p className="font-display text-lg leading-snug text-[#0b1c2d] md:text-xl">{step.label}</p>
                    {"detail" in step && (
                      <p className="mt-2 text-sm text-[#0b1c2d]/55">{step.detail}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
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

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#fafbfc] py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 opacity-70"
        style={{ background: "radial-gradient(ellipse, rgba(0,194,168,0.10) 0%, transparent 65%)" }}
      />
      <div className="container relative flex flex-col items-center px-[5%]">
        <SectionHeading eyebrow="Contact" title="Talk to us" align="center" />
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="group relative mt-10 inline-flex items-center gap-3 bg-[#0b1c2d] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#00c2a8] hover:text-[#0b1c2d]"
        >
          {CONTACT_EMAIL}
          <span className="text-lg transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
          <span className="absolute -right-1 -top-1 h-2 w-2 bg-[#00c2a8]" />
        </a>
      </div>
    </section>
  );
}
