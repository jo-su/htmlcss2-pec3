/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'serif': ['Josefin Sans', 'system-ui'],
      'sans': ['Hedvig Letters Sans', 'ui-serif']
    },
    extend: {
      colors: {
        primary: colors.lime,
        secondary: colors.slate,
        vibrant: '#00ae02',
      },
      spacing: {
        none: '0px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      containers: {
        'md': '400px',
        'lg': '700px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

