module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f4e76d",
          DEFAULT: "#f0dc28",
          dark: "#e7bc00",
        },
      },
      fontFamily: {
        primary: '"DM Sans", san-serif',
      },
      borderWidth: {
        thin: "0.399px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first", "last"],
      borderRadius: ["first", "last"],
      backgroundColor: ["first", "last"],
    },
  },
  plugins: [],
};
