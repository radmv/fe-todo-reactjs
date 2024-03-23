/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          blue: "#5313CA",
          skyBlue: "#75F1F1",
          orange: "#FF9963",
          primary: "#050729",
          gray: "#F3F0F8",
          grey: {
            primary: "#EDEEF2",
            secondary: "#989AAE",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
