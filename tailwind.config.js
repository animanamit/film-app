module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        m4: 'repeat(4,198px)',
        main: '1fr auto 1fr',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
