import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          bg: "#101211", // Deep warm noir
          subtle: "#181A19",
          card: "#1E201F",
          light: "#F8FAF3",
        },
        surface: {
          dark: "#141615",
          charcoal: "#1A1C1B",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(198, 164, 119, 0.35)",
        },
        brand: {
          gold: "#C6A477", // Warm architectural bronze/gold
          goldLight: "#DFCAAB",
          goldDark: "#9A784B",
          accent: "#755A33",
        },
        text: {
          primary: "#F8FAF3",
          secondary: "#C4C7C4",
          muted: "#838482",
          dark: "#191C18",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        xs: "390px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      spacing: {
        margin: "clamp(1rem, 4vw, 3rem)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
