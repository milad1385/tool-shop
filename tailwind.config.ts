import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "hover:bg-black",
    "hover:bg-green-500",
    "hover:bg-red-500",
    "hover:bg-yellow-500",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "18px",
        },
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Iran: "Iran",
        dana: "Dana",
        IranMedium: "IranMedium",
        Lalezar: "Lalezar",
      },
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
} satisfies Config;
