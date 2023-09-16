/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }
      
      'lg':'1024px',

      'xl':'1280px',

      '2xl':'2000px',

      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-darkgreen': '#064636',
        'primary-lightgreen': '#F4F6F4',
        'primary-darkblue': '#03045e',
      }
      
    },
    
    
  },
  plugins: [],
}
