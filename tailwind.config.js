/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: {
        900: "#000",
      },
      gray: {
        DEFAULT: "#8D8D8D",
      },
      white: {
        DEFAULT: "#FFF",
      },
    },
    container: {
      center: true,
      "max-width": {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1316px",
      },
      padding: "0.75rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1316px",
    },
    borderRadius: {
      DEFAULT: "10px",
      full: "9999px",
    },
    fontFamily: {
      serif: ["Libre Baskerville", "serif"],
    },
  },
  plugins: [],
};
