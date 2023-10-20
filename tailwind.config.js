/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/**/*.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
