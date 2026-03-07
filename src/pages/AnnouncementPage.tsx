import { Seo } from "../lib/seo";
import logo from "../assets/logo-light.svg";

export function AnnouncementPage() {
  return (
    <>
      <Seo
        title="Coming Soon"
        description="Mero is preparing its main website for launch."
        path="/"
      />

      <main className="hero-gradient-bg relative flex min-h-screen items-center justify-center overflow-hidden px-[5%] py-16">
        <div className="announcement-grid absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <section className="announcement-content relative z-10 mx-auto max-w-2xl text-center">
          <img
            src={logo}
            alt="Mero"
            className="announcement-item announcement-item-1 mx-auto mb-8 h-auto w-64 md:w-96"
          />

          <p className="announcement-item announcement-item-2 mb-6 text-lg text-white/80 md:text-xl">
            Infrastructure layer for tokenised commodities
          </p>

          <h2 className="announcement-item announcement-item-3 mb-4 text-3xl font-bold text-white">
            Coming Soon
          </h2>

          <p className="announcement-item announcement-item-4 text-sm tracking-[0.15em] text-white/70">
            Сontact:{" "}
            <a href="mailto:info@mero.tech" className="font-semibold text-white hover:text-emerald-200">
              info@mero.tech
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
