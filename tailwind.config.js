/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ui-black' : '#25274d',
        'ui-light-black' : '#464866',
        'ui-grey' : '#aaabb8',
        'ui-light-blue' : '#2e9cca',
        'ui-dark-blue' : '#29648a'
      }
    },
  },
  plugins: [],
}

