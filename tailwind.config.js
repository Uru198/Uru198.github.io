/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      //aqui podemos guardar nuestros propios colores
      colors: {

      }
    },
  },
  plugins: [require("daisyui")],
}

