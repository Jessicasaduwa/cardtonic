/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maskImage: {
        "fade-out": "linear-gradient(to bottom, black, transparent)",
      },
      backgroundImage: {
        "custom-image": "url('/2024-11-26 (2).png.jpg')",
      },
      animation: {
        "scroll-left": "scroll-left 40s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
