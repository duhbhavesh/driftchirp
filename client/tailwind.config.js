module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            transparent: 'transparent',
            current: 'currentColor',
            blue: {
               light: '#4A72E8',
               DEFAULT: '#2453E2',
               dark: '#1C4BD9',
            },
            black: {
               darkest: '#0B0E11',
               dark: '#151A21',
               DEFAULT: '#1B2129',
               light: '#202731',
               lightest: '#303B4A',
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
