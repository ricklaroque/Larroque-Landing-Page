/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8f2',
          100: '#fff1e6',
          500: '#cf4d19'
        }
      }
    }
  },
  plugins: [],
}

