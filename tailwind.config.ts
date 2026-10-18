import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      navy: { 950: "#0c211c", 900: "#15352b", 800: "#214d3d", 700: "#32634d" },
      silver: "#d7e0ea",
      teal: "#1aa6a0"
    },
    boxShadow: { soft: "0 14px 40px rgba(10, 31, 55, 0.08)" }
  }},
  plugins: [],
};
export default config;
