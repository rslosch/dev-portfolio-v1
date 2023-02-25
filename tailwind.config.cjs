/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ["syne", "sans-serif"],
        spacegrotesk: ["spacegrotesk", "sans-serif"],
      },
      minWidth: {
        '1/4': '25%',  
        '1/3': '33.333333%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '2/3': '66.666667%',
        '3/4': '75%',
      },
      colors: {
        "primary-purple-1": "#2F2235",
        "primary-purple-2": "#3F3244",

        "primary-1": "#2F232B",
        "primary-2": "#60495A",
        "primary-3": "#815F76",
        "primary-4": "#A07E94",
        "primary-5": "#BAA1B1",

        "secondary-1": "#344231",
        "secondary-2": "#51694D",
        "secondary-3": "#658260",
        "secondary-4": "#6F8F6A",
        "secondary-5": "#A1CF99",


        "primary-silver-1": "#A9ACA9",

        "primary-gray-1": "#1E1F1E",
        "primary-gray-2": "#464946",
        "primary-gray-3": "#787D78",
        "primary-gray-4": "#BFC3BA",
        "primary-gray-5": "#F5F5F5",
      }
    },
  },
  plugins: [],
}