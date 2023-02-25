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
      },
      colors: {
        "primary-purple-1": "#2F2235",
        "primary-purple-2": "#3F3244",

        "primary-eggplant-1": "#2F232B",
        "primary-eggplant-2": "#60495A",
        "primary-eggplant-3": "#815F76",
        "primary-eggplant-4": "#A07E94",
        "primary-eggplant-5": "#BAA1B1",

        "primary-green-1": "#344231",
        "primary-green-2": "#51694D",
        "primary-green-3": "#658260",
        "primary-green-4": "#6F8F6A",
        "primary-green-5": "#A1CF99",


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