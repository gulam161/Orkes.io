/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {},
      backgroundColor: {
        "custom-gradient": " linear-gradient(#e1f6fd, #f6fcfe)",
      },
      boxShadow: {
        custom: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
