/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max':'320px'},    // Mobile screen size
        'md': {'max':'768px'},    // Tablet screen size (if needed)
        'lg': {'max':'1024px'},   // Desktop screen size
        'xl': {'max':'1440px'},   // Large desktop screen size
      },
      colors: {
        lime: {
          DEFAULT: 'hsl(61, 70%, 52%)', // Primary lime color
        },
        red: {
          DEFAULT: 'hsl(4, 69%, 50%)',  // Primary red color
        },
        white: 'hsl(0, 0%, 100%)',       // Neutral white color
        slate100: 'hsl(202, 86%, 94%)', // Neutral slate 100 color
        slate300: 'hsl(203, 41%, 72%)', // Neutral slate 300 color
        slate500: 'hsl(200, 26%, 54%)', // Neutral slate 500 color
        slate700: 'hsl(200, 24%, 40%)', // Neutral slate 700 color
        slate900: 'hsl(202, 55%, 16%)', // Neutral slate 900 color
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'], // Font family for body
      },
      fontSize: {
        'sm': '16px',  // Body copy font size
      },
      fontWeight: {
        'normal': 500, // Font weight normal
        'bold': 700,   // Font weight bold
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
