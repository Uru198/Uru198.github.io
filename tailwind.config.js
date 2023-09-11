/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //aqui podemos guardar nuestros propios colores
      colors: {

      }
    },
  },
  plugins: [require("daisyui")],
}

