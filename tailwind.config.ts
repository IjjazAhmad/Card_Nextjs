import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        skyBlue: "#00ABE1",
        blueBg: "#3994E9",
        greenBg: "#31CE5D",
        yellowBg: "#FBBC12",
        textColor: "#127398",
        whitedark: "#f5faff",
      },
      boxShadow: {
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        1: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        2: "0px 1px 5px 0px #004A7426",
      },
    },
  },
  plugins: [],
};
export default config;
