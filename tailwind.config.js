/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: "0px",
        tablet: "625px",
        desktop: "1200px",
      },
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "18px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
        "5xl": "148px",
      },
      colors: {
        text: "#2e2e2e",
        background: "#ffffff",
        primary: "#486adb",
        secondary: "#ddeafd",
        accent: "#3c83f6",
        "yelp-red": "#FF1A1A",
      },
    },
  },
};
