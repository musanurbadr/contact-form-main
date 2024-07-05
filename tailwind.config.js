/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        '3xs': '300px',
      },
      fontFamily: {
        custom : ["Karla", 'sans-serif'],
      },
      colors: {
        'green-200': 'hsl(148, 38%, 91%)',
        'green-600': 'hsl(169, 82%, 27%)',
        'red': 'hsl(0, 66%, 54%)',
        'white': 'hsl(0, 0%, 100%)',
        'grey-500': 'hsl(186, 15%, 59%)',
        'grey-900': 'hsl(187, 24%, 22%)',
      },
  },
  plugins: [],
}
}
