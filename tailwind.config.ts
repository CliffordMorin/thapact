import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        canelaLight: ["Canela-Light", "sans-serif"],
        canelaItalic: ["Canela-LightItalic", "sans-serif"],
        neueMontreal: ["PP Neue Montreal", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
