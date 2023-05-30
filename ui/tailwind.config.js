/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008b8b",
        secondry: "#bee6e6",
        navbarTextDark: "#000000",
        navbarTextLight: "#ffffff",
        inputFormFocusRing: "#000000",
        gradient: {
          start: "#c4e0e5",
          end: "#4ca1af ",
        },
        button: {
          login: {
            primary: "#008b8b",
            secondry: "#0fabab",
          },
        },
        blue: {
          primary: "#4170e8",
          secondry: "#6087eb",
          dark : "#dbeafe",
          light : "#eff6ff"
        },
        red: {
          primary: "#ed374e",
          secondry: "#f0596c",
        },
        green: {
          primary: "#0fab91",
          secondry: "#0fabab",
        },
        textGray: "#878787"
      },
    },
  },
  plugins: [],
};
