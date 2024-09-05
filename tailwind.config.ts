import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" }, // 'opacity' dưới dạng chuỗi
          "100%": { opacity: "1", transform: "translateY(0)" }, // 'opacity' dưới dạng chuỗi
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.8)" }, // 'opacity' dưới dạng chuỗi
          "100%": { opacity: "1", transform: "scale(1)" }, // 'opacity' dưới dạng chuỗi
        },
      },
      animation: {
        fadeIn: "fadeIn 2s forwards",
        fadeInScale: "fadeInScale 1.5s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
