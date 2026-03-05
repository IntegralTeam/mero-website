import MarcusChen from "../assets/MarcusChen.png";
import SarahOkonkwo from "../assets/SarahOkonkwo.png";
import RajeshPatel from "../assets/RajeshPatel.png";

const TESTIMONIALS = [
  {
    quote: "Mero gives us the yield we need without the currency risk we don't.",
    name: "Marcus Chen",
    title: "Chief Investment Officer",
    company: "Regional Bank",
    image: MarcusChen,
  },
  {
    quote: "Real commodities backing real returns. This is institutional infrastructure done right.",
    name: "Sarah Okonkwo",
    title: "Head of Treasury",
    company: "Pan-African Bank",
    image: SarahOkonkwo,
  },
  {
    quote: "Finally, a stablecoin platform built for banks, not against them.",
    name: "Rajesh Patel",
    title: "Managing Director",
    company: "South Asian Finance",
    image: RajeshPatel,
  },
] as const;

// Decorative quote mark
function QuoteMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10 opacity-20 md:h-12 md:w-12"
    >
      <path
        d="M14 24C14 19.5817 17.5817 16 22 16V20C19.7909 20 18 21.7909 18 24V28H22V36H14V24Z"
        fill="#00c2a8"
      />
      <path
        d="M30 24C30 19.5817 33.5817 16 38 16V20C35.7909 20 34 21.7909 34 24V28H38V36H30V24Z"
        fill="#00c2a8"
      />
    </svg>
  );
}

export function Testimonial6() {
  return (
    <section className="relative overflow-hidden bg-[#0b1c2d] py-20 md:py-28 lg:py-32">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative px-[5%]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-500/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Testimonials
            </span>
            <span className="h-px w-8 bg-emerald-500/40" />
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-[1.15] text-white md:text-4xl lg:text-[2.75rem]">
            What banks are saying
          </h2>
          <p className="text-white/50 md:text-lg">
            Trusted by institutional leaders across emerging markets
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative flex flex-col border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04] md:p-10"
            >
              {/* Quote mark */}
              <div className="mb-6">
                <QuoteMark />
              </div>

              {/* Quote text */}
              <blockquote className="mb-8 flex-1 text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute -inset-0.5 rounded-full border border-emerald-500/0 transition-colors duration-300 group-hover:border-emerald-500/50" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-white/40">
                    {testimonial.title}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-emerald-400/60">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-0 w-0 border-l-[24px] border-t-[24px] border-l-transparent border-t-emerald-500/0 transition-all duration-300 group-hover:border-t-emerald-500/20" />

              {/* Number indicator */}
              <span className="absolute bottom-4 right-4 text-6xl font-bold text-white/[0.02] transition-colors duration-300 group-hover:text-white/[0.05] md:text-7xl">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 md:mt-20 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">
              Verified institutional partners
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">
              Regulated entities only
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">
              Emerging markets focus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
