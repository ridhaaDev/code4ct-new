/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'home-bg': "url('../src/images/Code4CT-homepage.jpg')"
      },
      colors: {
 primary: "#e38f84"
      }

    }
  },
  plugins: [],
}
