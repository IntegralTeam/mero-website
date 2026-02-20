/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-primary": "#d1d5db",
        "background-primary": "#ffffff",
        "neutral-white": "#ffffff",
        "text-alternative": "#ffffff",
      },
      spacing: {
        18: "4.5rem",
      },
      minHeight: {
        18: "4.5rem",
      },
      fontSize: {
        md: "1.125rem",
        "10xl": "6rem",
      },
      keyframes: {
        "loop-horizontally": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "loop-horizontally": "loop-horizontally 25s linear infinite",
      },
    },
  },
  plugins: [],
};
