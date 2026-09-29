import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { COMPANY, CONTACT_EMAIL } from "../lib/site";

export type LegalKind = "privacy" | "cookies";

const TITLES: Record<LegalKind, string> = {
  privacy: "Privacy notice",
  cookies: "Cookie notice",
};

function MailLink({ children }: { children?: string }) {
  const address = children ?? CONTACT_EMAIL;
  return (
    <a href={`mailto:${address}`} className="text-[#066253] underline decoration-[#00c2a8]/40 underline-offset-2 hover:decoration-[#066253]">
      {address}
    </a>
  );
}

function PrivacyBody() {
  return (
    <>
      <p>
        This notice covers the public website of {COMPANY.legalName}. It describes this website only.
        The site has no accounts, no login and no forms.
      </p>

      <h2 className="pt-4 font-display text-2xl font-light text-[#0b1c2d]">Who we are</h2>
      <p>
        {COMPANY.legalName} is registered in England and Wales, company number {COMPANY.number}.
        Registered office: {COMPANY.registeredOffice}. For privacy requests, email <MailLink />.
      </p>

      <h2 className="pt-4 font-display text-2xl font-light text-[#0b1c2d]">What this website handles</h2>
      <ul className="list-disc space-y-3 pl-5">
        <li>
          <span className="font-semibold text-[#0b1c2d]">Pages you open.</span> The host of this
          website keeps ordinary technical logs, such as IP address, browser type, the time, and the
          page requested. Those logs are used to keep the site available and secure. The host decides
          how long the logs are kept.
        </li>
        <li>
          <span className="font-semibold text-[#0b1c2d]">Email you send us.</span> The site publishes{" "}
          <MailLink />. If you write to that address, we receive your email address and whatever you
          include in the message. We use that to reply, and we keep the correspondence while we need
          it for the enquiry. We do not add you to a mailing list.
        </li>
        <li>
          <span className="font-semibold text-[#0b1c2d]">The typeface.</span> The site loads its
          typeface from Google Fonts. Your browser sends that request to Google, which receives your
          IP address under Google&apos;s own terms. We do not receive a copy of that request, and we do
          not use it for advertising.
        </li>
      </ul>

      <h2 className="pt-4 font-display text-2xl font-light text-[#0b1c2d]">What this website does not do</h2>
      <p>
        It does not collect account or client records, because there is no account to create. It does
        not run analytics or advertising, and it does not sell personal data. Cookies are described in
        the <a href="/cookies" className="text-[#066253] underline decoration-[#00c2a8]/40 underline-offset-2 hover:decoration-[#066253]">cookie notice</a>.
      </p>

      <h2 className="pt-4 font-display text-2xl font-light text-[#0b1c2d]">Your choices</h2>
      <p>
        You can ask what personal data we hold from an email you sent us, and you can ask us to correct
        or delete it. You can also complain to the Information Commissioner&apos;s Office at{" "}
        <a
          href="https://ico.org.uk"
          className="text-[#066253] underline decoration-[#00c2a8]/40 underline-offset-2 hover:decoration-[#066253]"
          rel="noreferrer"
        >
          ico.org.uk
        </a>
        . Write to <MailLink />.
      </p>
    </>
  );
}

function CookieBody() {
  return (
    <>
      <p>
        This notice describes cookies on this website as it is today. The site does not set its own
        cookies. It does not set analytics, advertising or other non-essential cookies, so there is no
        consent banner.
      </p>
      <p>
        Loading a page can still request the typeface from Google Fonts. That is a network request,
        not a cookie set by this site. It is described in the{" "}
        <a href="/privacy" className="text-[#066253] underline decoration-[#00c2a8]/40 underline-offset-2 hover:decoration-[#066253]">
          privacy notice
        </a>
        .
      </p>
      <p>
        If we later add analytics or any other non-essential cookie, we will update this notice and
        ask for your consent before that cookie is stored.
      </p>
      <p>
        You can block cookies in your browser. This site will keep working if you do, because it does
        not rely on a cookie of its own.
      </p>
    </>
  );
}

export function LegalPage({ kind }: { kind: LegalKind }) {
  const title = TITLES[kind];

  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Mero Technologies`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <>
      <Navbar />
      <main>
        <header className="hero-gradient-bg px-[5%] pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="container max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">Legal</p>
            <h1 className="font-display text-4xl font-light text-white md:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-white/50">Last updated 29 September 2026</p>
          </div>
        </header>
        <article className="bg-white px-[5%] py-16 text-base leading-relaxed text-[#0b1c2d]/75 md:py-20">
          <div className="container max-w-3xl space-y-5">
            {kind === "privacy" ? <PrivacyBody /> : <CookieBody />}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
