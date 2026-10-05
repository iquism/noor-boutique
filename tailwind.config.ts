import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F1",
        ivory: "#FFFDF9",
        sand: "#F3EDE3",
        linen: "#EFE7D9",
        blush: "#F7E4E1",
        rosegold: {
          DEFAULT: "#B76E79",
          light: "#D69AA3",
          dark: "#96555F",
        },
        charcoal: {
          DEFAULT: "#2A2421",
          soft: "#5C534B",
          mute: "#8A7E74",
        },
        goldline: "#D9BE8C",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
