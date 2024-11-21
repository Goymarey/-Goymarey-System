module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          themeBlue: '#1DA1F2',
          themeBlack: '#000000',
          themeWhite: '#FFFFFF',
        },
        fontFamily: {
          sans: ['Arial', 'sans-serif'],
        },
        transitionProperty: {
          height: 'height',
          spacing: 'margin, padding',
        },
        animation: {
          fadeIn: 'fadeIn 2s ease-in forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
    },
    variants: {
      extend: {
        animation: ['hover', 'focus'],
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
    plugins: [],
  };
  