/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './stores/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    colors: {
      white: '#E8EFF6',
      black: '#1E1C1C',
      orange: {
        500: '#DB7E11',
        700: '#B96400',
      },
      'orange-gray': {
        100: '#DFDFDF',
        200: '#BFBFBF',
        900: '#353434',
      },
      'blue-gray': {
        50: '#DEE3E8',
        100: '#D6DCE3',
        200: '#B8C6CB',
      },
    },

    extend: {
      spacing: {
        'sticky-widget': '2rem',
        0.25: '0.188rem',
      },
      fontSize: {
        xxs: '0.719rem',
      },
      width: {
        page: '33.125rem',
        'action-panel': '20rem',
        'action-panel-popover': '21.25rem',
      },
    },
  },

  plugins: [],
}
