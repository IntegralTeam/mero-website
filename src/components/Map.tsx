import { lazy, Suspense, useEffect, useRef, useState } from "react";

const LazyWorldMap = lazy(() => import("./WorldMap"));

export function Map() {
  const MAP_ACTIVE_PROGRESS_END = 0.78;
  const MAP_AUTO_HANDOFF_AT = 0.93;
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [mapFocusProgress, setMapFocusProgress] = useState(0);
  const mapSectionRef = useRef<HTMLElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef(0);
  const hasAutoHandedOffRef = useRef(false);

  useEffect(() => {
    if (shouldLoadMap) return;
    const target = mapContainerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  useEffect(() => {
    if (!shouldLoadMap) return;

    const computeFocusProgress = () => {
      const section = mapSectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
      const scrollable = Math.max(1, rect.height - viewportHeight);
      const rawProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const nextProgress =
        rawProgress < MAP_ACTIVE_PROGRESS_END ? rawProgress / MAP_ACTIVE_PROGRESS_END : 1;

      setMapFocusProgress((current) =>
        Math.abs(current - nextProgress) > 0.002 ? nextProgress : current
      );

      const isDesktop = window.matchMedia("(min-width: 992px)").matches;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (rawProgress < 0.45) {
        hasAutoHandedOffRef.current = false;
      }

      if (
        isDesktop &&
        isScrollingDown &&
        !hasAutoHandedOffRef.current &&
        rawProgress >= MAP_AUTO_HANDOFF_AT &&
        rawProgress < 1
      ) {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          hasAutoHandedOffRef.current = true;
          aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    let rafId = 0;
    let ticking = false;

    const onScrollLike = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(() => {
        computeFocusProgress();
        ticking = false;
      });
    };

    computeFocusProgress();
    window.addEventListener("scroll", onScrollLike, { passive: true });
    window.addEventListener("resize", onScrollLike);

    return () => {
      window.removeEventListener("scroll", onScrollLike);
      window.removeEventListener("resize", onScrollLike);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [shouldLoadMap]);

  return (
    <section id="relume" ref={mapSectionRef} className="relative z-0 h-[190vh] md:h-[195vh]">
      <div className="sticky top-0 flex h-screen items-center py-16 md:py-20 lg:py-20">
        <div className="container">
          <div className="mb-5 grid grid-cols-1 items-end justify-between gap-x-12 gap-y-5 px-[5%] md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700 md:mb-4">
                Global Reach
              </p>
              <h2 className="text-3xl font-bold leading-[1.15] lg:leading-[1.20] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
                Target markets and regional pathways
              </h2>
            </div>
            <div>
              <p className="text-[#0b1c2d]/60 md:text-lg">
                Explore regions where Mero intends to operate. This map is a
                product demonstration using simulated scenario data and does not
                represent live deployment, active clients, or committed
                partnerships.
              </p>
            </div>
          </div>
          <div ref={mapContainerRef} className="h-[28rem] w-full overflow-hidden md:h-[32rem] lg:h-[37rem]">
            {shouldLoadMap ? (
              <Suspense fallback={<div className="h-full w-full bg-white" />}>
                <LazyWorldMap focusProgress={mapFocusProgress} />
              </Suspense>
            ) : (
              <div className="h-full w-full bg-white" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
