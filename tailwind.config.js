/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(215,220,221,1) 100%)",
      },
    },
  },
  plugins: [],
};
