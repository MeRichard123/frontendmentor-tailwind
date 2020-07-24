module.exports = {
  purge: [],
  theme: {
    extend: {
      width: {
        ch: "60ch",
      },
    },
    boxShadow: {
      default: "0 25px 50px -12px hsl(0, 36%, 70%)",
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      neutral: "hsl(0, 6%, 24%);",
      softRed: "hsl(0, 93%, 68%)",
      red: "hsl(0, 36%, 70%)",
    },
    letterSpacing: {
      widest: "0.5em",
    },
  },
  variants: {},
  plugins: [],
};

// Classed added:
// .font-Josefin
// colour for tailwind colours
