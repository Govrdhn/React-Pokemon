/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        second: {
          50 : '#e6e6e6',
          100: '#bfbfbf',
          200: '#a6a6a6',
          300: '#8c8c8c',
          400: '#737373',
          500: '#595959',
          600: '#404040',
          700: '#333333',
          800: '#262626',
          900: '#202020',
          950: '#181818',
        }
      }
    },
  },
  plugins: [],
}

