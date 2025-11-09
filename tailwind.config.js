/** @type {import('tailwindcss').Config} */

export default {
  content: ["./stories/**/*.{js,jsx,ts,tsx,mdx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base color palette
        blue: {
          100: "#0086ed",
          200: "#0076d1",
          300: "#0067b5",
          400: "#005799",
          500: "#00477d",
          600: "#003760",
          700: "#002745",
          800: "#001729",
        },
        beige: {
          100: "#ebe8ce",
          200: "#d1cfb8",
          300: "#b8b5a2",
          400: "#9e9c8b",
          500: "#858475",
          600: "#69675c",
          700: "#4a4940",
          800: "#2b2b27",
        },
        yellow: {
          100: "#f0e800",
          200: "#d4cd00",
          300: "#b8b100",
          400: "#9c9600",
          500: "#807b00",
          600: "#636000",
          700: "#474500",
          800: "#2b2a00",
        },
        monotone: {
          100: "#fafafa",
          200: "#d6d6d6",
          300: "#bababa",
          400: "#9e9e9e",
          500: "#828282",
          600: "#636363",
          700: "#474747",
          800: "#1a1a1a",
        },
        // Semantic color tokens
        primary: {
          main: "#003760", // blue-600
          sub: "#858475", // beige-500
          accent: "#d4cd00", // yellow-200
        },
        neutral: {
          background: "#fafafa", // monotone-100
          "text-main": "#1a1a1a", // monotone-800
          "text-sub": "#636363", // monotone-600
          link: "#0076d1", // blue-200
          border: "#9e9e9e", // monotone-400
        },
      },
    },
  },
  plugins: [],
};
