/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#3755C1",
        "default-dark": "#1F2024",
        "off-white": "#FAFAFA",
        "off-white-300": "#F8F9FE",
        "default-gray": "#E8E9F1",
        "default-grey": "#8F9098",
        "default-grey-400": "#71727A",
        "default-green-100": "#00C49A",
        "default-green-200": "#33A885",
        "default-green-500": "#0596A2",
        "default-green-600": "#159274",
        "default-blue-400": "#2E8BFF"
      },
    },
  },
  plugins: [],
};
