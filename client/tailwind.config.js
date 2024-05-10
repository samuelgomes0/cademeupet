/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7FAFC",
        header: "#2B6CB0",
        dark: "#2D3748",
        light: "#CBD5E0",
        buttonPrimary: "#48BB78",
        buttonPrimaryHover: "#38A169",
        buttonSecondary: "#3182CE",
        buttonSecondaryHover: "#2B6CB0",
        selection: "#B2F5EA",
      },
    },
  },
};
