/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      qrColor1: "hsl(212, 45%, 89%)",
      qrColor2: "hsl(220, 15%, 55%)",
      qrColor3: "hsl(218, 44%, 22%)",
    },
  },
  plugins: [],
}
