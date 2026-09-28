type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({ eyebrow, title, align = "left", tone = "dark" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : undefined}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-[#00c2a8]/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
            {eyebrow}
          </span>
          {centered && <span className="h-px w-8 bg-[#00c2a8]/60" />}
        </div>
      )}
      <h2
        className={`font-display text-3xl font-light leading-[1.25] md:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-white" : "text-[#0b1c2d]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
