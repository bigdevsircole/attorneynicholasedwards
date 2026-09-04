import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0F1C",
          900: "#070B14",
          800: "#0A0F1C",
          700: "#0F1B33",
          600: "#14213D",
        },
        line: {
          dark: "#26314F",
          light: "#DAD2BD",
        },
        gold: {
          DEFAULT: "#B8912F",
          light: "#D9B45C",
          dim: "#8C6D22",
        },
        parchment: {
          DEFAULT: "#F3EFE4",
          dim: "#EAE3D2",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
