/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white1: "hsl(0, 0%, 100%)",
        grey1: "hsl(0, 0%, 20%)",
        darkGrey1: "hsl(0, 0%, 12%)",
        offBlack1: "hsl(0, 0%, 8%)",
        green1: "hsl(75, 94%, 57%)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slide: "slide 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
