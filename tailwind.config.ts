import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      navy: { 950: "#071426", 900: "#0b1d33", 800: "#102b49", 700: "#193b5d" },
      silver: "#d7e0ea",
      teal: "#1aa6a0"
    },
    boxShadow: { soft: "0 14px 40px rgba(10, 31, 55, 0.08)" }
  }},
  plugins: [],
};
export default config;
