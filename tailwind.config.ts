import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: "#938973", // Háttérszín a headerhez
        red: "#ff0000", // Hover szín
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Globális betűtípus
      },
    },
  },
  plugins: [],
} satisfies Config;
