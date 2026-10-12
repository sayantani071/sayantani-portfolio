/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#101622',
        primary: '#e5b7c4',
        secondary: '#cbd8e8',
        accent: '#ead8b8',
        pink: {
          50: '#fbf6f7',
          100: '#f5e9ec',
          200: '#ead1d8',
          300: '#dcb8c3',
          400: '#c99aaa',
          500: '#b77f91',
          600: '#9e6879',
          700: '#805463',
          800: '#62424e',
          900: '#46313a',
          950: '#2c2028',
        },
        rose: {
          50: '#faf6f5',
          100: '#f1e6e4',
          200: '#e5cfcd',
          300: '#d2b3b1',
          400: '#bc9495',
          500: '#a47b7e',
          600: '#886568',
          700: '#6c5154',
          800: '#524144',
          900: '#3d3235',
          950: '#292224',
        },
        sakura: {
          50: '#fbf6f7',
          100: '#f5e9ec',
          200: '#ead1d8',
          300: '#dcb8c3',
          400: '#c99aaa',
          500: '#b77f91',
          600: '#9e6879',
          700: '#805463',
          800: '#62424e',
          900: '#46313a',
          950: '#2c2028',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['Fira Code', 'monospace'],
        heading: ["'Caviar Dreams'", 'sans-serif'],
        typewriter: ["'Type Machine'", "'Fira Code'", 'monospace'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide': 'slide 2s linear infinite',
        'text-flow': 'textFlow 5s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(250%)' },
        },
        textFlow: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
}
