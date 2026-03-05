import { useState, FormEvent } from "react";
import supabase from "../lib/supabase";

export function StayInformedSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  const onSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const emailValue = formData.get("email");
    const email = typeof emailValue === "string" ? emailValue.trim().toLowerCase() : "";

    if (!email) {
      setMessageType("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    setMessageType(null);

    const { error } = await supabase.from("subscriptions").insert([{ email }]);

    if (error) {
      setMessageType("error");
      setMessage("Subscription failed. Please try again.");
    } else {
      setMessageType("success");
      setMessage("Thank you. You are now subscribed to Mero updates.");
      form.reset();
    }

    setIsSubmitting(false);
  };

  return (
    <section id="stay-informed" className="relative bg-[#fafbfc] py-20 md:py-28 lg:py-32">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#066253]/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#066253]">
                Newsletter
              </span>
              <span className="h-px w-8 bg-[#066253]/40" />
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-[1.15] text-[#0b1c2d] md:text-4xl">
              Stay informed
            </h2>
            <p className="text-[#0b1c2d]/60 md:text-lg">
              Get updates on Mero, USDM, and institutional finance insights.
            </p>
          </div>

          {/* Form card */}
          <div className="border border-[#0b1c2d]/10 bg-white p-8 md:p-10">
            <form onSubmit={onSubscribe} className="space-y-6">
              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/60"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@institution.com"
                  required
                  autoComplete="email"
                  className="h-12 w-full border border-[#0b1c2d]/10 bg-[#fafbfc] px-4 text-sm text-[#0b1c2d] outline-none transition-all placeholder:text-[#0b1c2d]/30 focus:border-[#066253] focus:bg-white"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-[#0b1c2d] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#066253] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
                    </>
                  )}
                </span>
                {/* Corner accent */}
                <span className="absolute -right-1 -top-1 h-2 w-2 bg-[#00c2a8] opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              {/* Message */}
              {message && (
                <div
                  className={`border-l-2 py-3 pl-4 text-sm ${
                    messageType === "error"
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-emerald-500 bg-emerald-50 text-emerald-700"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {message}
                </div>
              )}

              {/* Terms */}
              <p className="text-center text-[10px] leading-relaxed text-[#0b1c2d]/40">
                By subscribing, you agree to receive updates from Mero. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-wider text-[#0b1c2d]/40">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 bg-[#066253]" />
              Institutional Updates
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 bg-[#066253]" />
              Monthly Frequency
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 bg-[#066253]" />
              Unsubscribe Anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
