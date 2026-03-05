import { MARKET_REGION_PATHS } from "./marketRegionPaths";

type MarketRegionKey = "indonesia" | "india" | "latinAmerica" | "africa";

type MarketRegionMeta = {
  path: string;
  viewBox: string;
};

const MARKET_REGION_META: Record<MarketRegionKey, MarketRegionMeta> = {
  indonesia: {
    path: MARKET_REGION_PATHS.ID,
    viewBox: "700 430 210 170",
  },
  india: {
    path: MARKET_REGION_PATHS.IN,
    viewBox: "700 360 160 170",
  },
  latinAmerica: {
    path: MARKET_REGION_PATHS.BR,
    viewBox: "220 360 210 240",
  },
  africa: {
    path: MARKET_REGION_PATHS.ZA,
    viewBox: "430 330 260 300",
  },
};

type MarketRegionIconProps = {
  region: MarketRegionKey;
  size?: number;
  className?: string;
};

export function MarketRegionIcon({
  region,
  size = 24,
  className = "",
}: MarketRegionIconProps) {
  const { path, viewBox } = MARKET_REGION_META[region];

  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100%" height="100%" fill="#000" rx="4" ry="4" />
      <path d={path} fill="none" stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}
