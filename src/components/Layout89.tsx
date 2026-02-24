import { Button } from "@relume_io/relume-ui";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

const LazyWorldMap = lazy(() => import("./WorldMap"));

export function Layout89() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [mapFocusProgress, setMapFocusProgress] = useState(0);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

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
      const target = mapContainerRef.current;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight || 1;

      const enterY = viewportHeight * 0.95;
      const exitY = -rect.height * 0.4;
      const rawProgress = (enterY - rect.top) / (enterY - exitY);
      const nextProgress = Math.min(1, Math.max(0, rawProgress));

      setMapFocusProgress((current) =>
        Math.abs(current - nextProgress) > 0.002 ? nextProgress : current
      );
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
    <section id="relume" className="h-[100vh] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="px-[5%] grid grid-cols-1 mb-5 items-start justify-between gap-x-12 gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Global Reach</p>
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
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
            </div>
          </div>
        </div>
        <div
          ref={mapContainerRef}
          className="h-[28rem] w-full overflow-hidden md:h-[32rem] lg:h-[37rem]"
        >
          {shouldLoadMap ? (
            <Suspense fallback={<div className="h-full w-full bg-[#eef1f6]" />}>
              <LazyWorldMap focusProgress={mapFocusProgress} />
            </Suspense>
          ) : (
            <div className="h-full w-full bg-[#eef1f6]" />
          )}
        </div>
      </div>
    </section>
  );
}
