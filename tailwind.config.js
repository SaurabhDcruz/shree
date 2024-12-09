/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-3': 'var(--shadow-white-3)',
        'shadow-1': 'var(--shadow-1)',
        'shadow-2': 'var(--shadow-2)',
        'shadow-white-3':'var(--shadow-white-3)',
        'shadow-gray':'var(--shadow-gray)',
        'inner-shadow': 'var(--inner-shadow)'
      },
      backgroundImage:{
        'gradient-box-w':'var(--gradient-box-w)',
        'gradient-box-primary':'var(--gradient-box-primary)',
        'gradient-red-hover':'var(--gradient-red-hover)'
      },
    },
  },
  plugins: [],
}