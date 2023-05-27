/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        amiri: ["amiri"],
      },
    },
    colors: {
      bgprimary: "#1f242d",
      bgsecondary: "#323946",
      primary: "#0ef",
      red: "red",
    },
  },
  plugins: [require("daisyui")],
};
