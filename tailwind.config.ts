import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans Georgian", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
        accent: ["DM Sans", "sans-serif"],
      },
      colors: {
        ocean: "#2B7CB8",
        "ocean-dark": "#1A3C5E",
        gold: "#F4A261",
        "sea-foam": "#F5FAFD",
        "cloud-gray": "#E8EFF5",
        "trust-green": "#48BB78",
      },
    },
  },
  plugins: [],
};

export default config;
