/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1200px",
        xl: "1440px",
        "2xl": "1600px",
      },
    },
    screens: {
      m: "320px",
      xs: "444px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', 'sans-serif'",
      },
      colors: {
        bgSilver: "#C4C4C4",
        bgOrange: "#FF9001",
        bgOrangeRed: "#EF4823",
        bgColor: "#4B4B4B",
        bgText: "#C4C4C4",
        bgAdmission: "#F04923",
        bgRecord: "#E6E7E8",
        allTxColor: "#4B4B4B",
        bgButton: "#F1F2F2",
      },
      screens: {},
    },
  },
  plugins: [],
};
