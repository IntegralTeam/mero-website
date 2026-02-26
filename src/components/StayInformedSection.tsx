import { Button } from "@relume_io/relume-ui";
import supabase from "../lib/supabase";
import { FormEvent, useState } from "react";

export function StayInformedSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  const onSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const emailValue = formData.get("email");
    const email =
      typeof emailValue === "string" ? emailValue.trim().toLowerCase() : "";

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
      setMessage("Thanks. You are subscribed.");
      form.reset();
    }

    setIsSubmitting(false);
  };

  return (
    <section id="stay-informed" className="pb-16 md:pb-24 lg:pb-28">
      <div className="container overflow-hidden">
        <div className="px-[6%] py-14 text-center md:py-16 lg:py-20">
          <h2 className="mb-4 text-4xl font-bold leading-[1.2] md:text-[3.75rem] lg:text-[3.75rem]">
            Stay informed
          </h2>
          <p className="mx-auto mb-8 max-w-2xl md:text-md">
            Get updates on Mero, USDM, and institutional finance insights.
          </p>

          <form
            className="mx-auto max-w-xl"
            onSubmit={onSubscribe}
          >
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="h-10 flex-1 border-0 border-b border-[#bdbdc2] bg-transparent px-0 text-base text-[#111111] outline-none placeholder:text-[#6b6b70]"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            {message ? (
              <p
                className={`mt-3 text-left text-sm ${
                  messageType === "error" ? "text-red-600" : "text-green-700"
                }`}
                role="status"
                aria-live="polite"
              >
                {message}
              </p>
            ) : null}
            <p className="mt-3 text-left text-xs text-[#333333]">
              By clicking Subscribe you&apos;re confirming that you agree with our
              Terms and Conditions.
            </p>
          </form>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2200&q=80"
          alt="Team members in an office meeting"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
