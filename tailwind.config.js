/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"IBM Plex Sans"', "sans-serif"],
        accent: ['"Cormorant Garamond"', "serif"],
      },
      colors: {
        ink: "#090907",
        olive: {
          950: "#18200d",
          900: "#2d3c17",
          800: "#3c4e1f",
          700: "#506829",
          600: "#6d8739",
          500: "#96ae57",
          300: "#d8e3b5",
          100: "#eef4de",
        },
        stone: {
          50: "#f7f5ef",
          100: "#f0ede3",
          150: "#e8e2d6",
          200: "#ddd5c4",
          700: "#5c564b",
        },
        alert: "#da5c2d",
      },
      boxShadow: {
        halo: "0 35px 80px -38px rgba(45, 60, 23, 0.45)",
        card: "0 24px 48px -28px rgba(9, 9, 7, 0.28)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(150, 174, 87, 0)" },
          "50%": { boxShadow: "0 0 30px rgba(150, 174, 87, 0.25)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        glow: "glow 4.8s ease-in-out infinite",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(80, 104, 41, 0.16) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
