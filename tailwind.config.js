module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      small: '11px',
      xs: '.75rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    extend: {
      gridTemplateColumns: {
        m4: 'repeat(4,198px)',
        main: '1fr 3fr 1fr',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
