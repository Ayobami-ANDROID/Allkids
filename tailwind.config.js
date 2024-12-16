/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export const plugins = [];

export const content = ["./index.html", "./src/**/**/*.{css,js,jsx}"];

export const theme = {
  extend: {
    colors: {
      "red-normal": "var(--red)",
      "teal-normal": "var(--teal)",
      "blue-normal": "var(--blue)",
      "pink-normal": "var(--pink)",
      "green-normal": "var(--green)",
      "orange-normal": "var(--orange)",
      "yellow-normal": "var(--yellow)",
      "pale-blue-normal": "var(--pale-blue)",
    },
    padding: {
      "spacing-small": "5%",
      "spacing-normal": "8%",
      "spacing-large": "10%",
      "spacing-x-small": "2%",
      "spacing-x-large": "14%",
    },
    margin: {
      "spacing-small": "5%",
      "spacing-normal": "8%",
      "spacing-large": "10%",
      "spacing-x-small": "2%",
      "spacing-x-large": "14%",
    },
    gridTemplateColumns: {
      "auto-fill-18": "repeat(auto-fill, minmax(18em, 1fr))",
      "auto-fill-20": "repeat(auto-fill, minmax(20em, 1fr))",
      "auto-fill-22": "repeat(auto-fill, minmax(22em, 1fr))",
      "auto-fill-24": "repeat(auto-fill, minmax(24em, 1fr))",
    },
    screens: {
      xss: "300px",
      xs: "340px",
      xsm: "500px",
      mxl: "1400px",
      ...defaultTheme.screens,
    },
  },
};
