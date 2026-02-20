import React from "react";

export function MaterialIcon({
  name,
  className = "",
  filled = false,
  size,
  style,
}) {
  const resolvedSize =
    typeof size === "number" ? `${size}px` : typeof size === "string" ? size : undefined;

  return (
    <span
      className={`material-symbols-outlined inline-flex items-center justify-center align-middle leading-none ${className}`.trim()}
      style={{
        ...(filled
          ? {
              fontVariationSettings:
                '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
            }
          : {}),
        ...(resolvedSize
          ? {
              fontSize: resolvedSize,
              width: resolvedSize,
              height: resolvedSize,
            }
          : {}),
        ...style,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
