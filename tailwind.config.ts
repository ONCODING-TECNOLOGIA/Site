import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1152px" },
      },
      colors: {
        red: "var(--red)",
        green: "var(--green)",
        yellow: "var(--yellow)",
        blue: "var(--blue)",
        black: "var(--black)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
export default config;
