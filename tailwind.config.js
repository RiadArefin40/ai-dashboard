/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      margin: {
        'start': 'margin-inline-start',
        'end': 'margin-inline-end',
      },
      padding: {
        'start': 'padding-inline-start',
        'end': 'padding-inline-end',
      },
      keyframes: {
        'slide-in': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(-2px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      scale: {
        '102': '1.02',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
} 