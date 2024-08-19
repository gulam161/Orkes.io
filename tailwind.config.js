/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "int-purple": "#342960",
        "int-red": "#561827",
        "int-brown": "#231307",
        "int-gray": "#313435",
      },
      backgroundColor: {
        "custom-gradient": "linear-gradient(270deg, #d7dcdd, white)",
      },
      boxShadow: {
        custom: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
