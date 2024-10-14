/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/css")
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}",
    "./pp/**/*.{html,js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

