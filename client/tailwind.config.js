/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        primaryHover: "#7034d5",
        dark: "#2D3748",
        light: "#CBD5E0",
        header: "#4c1d95",
        background: "#F7FAFC",
        inputBackground: "#EDF2F7",
      },
    },
  },
};
