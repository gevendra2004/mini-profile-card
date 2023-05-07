/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
          first: "#227770",
          firstlight: "#569F99",
          firstlighter: "#77C5BE",
          title: "#183936",
        },
        boxShadow: {
          shadow: '0 8px 32px rgba(23, 79 , 77 , .15)'
        }
    },
  },
  plugins: [],
};
