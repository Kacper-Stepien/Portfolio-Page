/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#15171a",
        light: "#E3E4DF",
        primary: "#F0DB4F",
        secondary: "#02A8B6",
      },
    },
  },
  plugins: [],
};
