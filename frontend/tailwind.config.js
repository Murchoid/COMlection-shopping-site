/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral:"#ffffff",
        primary: "#111827",
        darkcolor: "#121212",
        secondary: {
          light: "#43c6ac",
          lighter: "#69d1bd",
          dark: "#369e8a",
          darker: "#226356"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
