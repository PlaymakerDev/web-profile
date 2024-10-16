/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      'os-bold': ['OpenSans-Bold', ...defaultTheme.fontFamily.sans],
      'os-bold-italic': ['OpenSans-BoldItalic', ...defaultTheme.fontFamily.sans],
      'os-extra-bold': ['OpenSans-ExtraBold', ...defaultTheme.fontFamily.sans],
      'os-extra-bold-italic': ['OpenSans-ExtraBoldItalic', ...defaultTheme.fontFamily.sans],
      'os-italic': ['OpenSans-Italic', ...defaultTheme.fontFamily.sans],
      'os-light': ['OpenSans-Light', ...defaultTheme.fontFamily.sans],
      'os-light-italic': ['OpenSans-LightItalic', ...defaultTheme.fontFamily.sans],
      'os-medium': ['OpenSans-Medium', ...defaultTheme.fontFamily.sans],
      'os-medium-italic': ['OpenSans-MediumItalic', ...defaultTheme.fontFamily.sans],
      'os-regular': ['OpenSans-Regular', ...defaultTheme.fontFamily.sans],
      'os-semi-bold': ['OpenSans-SemiBold', ...defaultTheme.fontFamily.sans],
      'os-semi-bold-italic': ['OpenSans-SemiBoldItalic', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
};
