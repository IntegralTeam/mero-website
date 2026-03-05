import { Button } from "@relume_io/relume-ui";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

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
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight || 1;

      const scrollable = Math.max(1, rect.height - viewportHeight);
      const rawProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const nextProgress =
        rawProgress < MAP_ACTIVE_PROGRESS_END
          ? rawProgress / MAP_ACTIVE_PROGRESS_END
          : 1;

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
    <section
      id="relume"
      ref={mapSectionRef}
      className="relative z-0 h-[190vh] md:h-[195vh]"
    >
      <div className="sticky top-0 flex h-screen items-center py-16 md:py-20 lg:py-20">
        <div className="container">
          <div className="px-[5%] grid grid-cols-1 mb-5 items-end justify-between gap-x-12 gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700 md:mb-4">Global Reach</p>
              <h3 className="text-4xl font-bold leading-[1.2] md:text-[3.75rem] lg:text-[3.75rem]">
                Emerging markets demand real solutions
              </h3>
            </div>
            <div>
              <p className="md:text-md">
                Explore Mero's target markets across the globe. Click any region
                on the interactive map to discover local market opportunities,
                regulatory landscape, and institutional demand for
                commodity-backed stablecoins.
              </p>
              {/* <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore markets" variant="secondary">
                  Explore markets
                </Button>
                <Button
                  title="Learn more"
                  variant="link"
                  size="link"
                  iconRight={<MaterialIcon name="chevron_right" />}
                >
                  Learn more
                </Button>
              </div> */}
            </div>
          </div>
          <div
            ref={mapContainerRef}
            className="h-[28rem] w-full overflow-hidden md:h-[32rem] lg:h-[37rem]"
          >
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
