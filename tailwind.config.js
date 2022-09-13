const plugin = require('tailwindcss/plugin')

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [ '"Press Start 2P"',"Dancing Script", "Quintessential", ...defaultTheme.fontFamily.serif],
        special: [ "Redressed", "Satisfy", "Quintessential", ...defaultTheme.fontFamily.serif],
        custom: [ "Nunito" ,"Gentium Plus", "Lato","Fredoka", ...defaultTheme.fontFamily.serif]
    },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}
