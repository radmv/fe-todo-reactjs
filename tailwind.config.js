import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          black: "#101010",
          bg: "#181818",
          outline: "#484848",
          text: {
            primary: "#F3F5F7",
            input: "#585858",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbitePlugin],
};
