/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'sm' : '375px',
      'md' : '578px',
      'lg' : '1440px'
    },
    extend: {
      colors:{
        'lightPink' : 'hsl(275, 100%, 97%)',
        'grayishPurple' : 'hsl(292, 16%, 49%)',
        'darkPurple' : 'hsl(292, 42%, 14%)'
      }
    },
    fontFamily:{
      'WorkSans' : ['"Work Sans"']
    }
  },
  plugins: [],
}

