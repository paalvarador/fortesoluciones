/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page.js", // <--- Agrega esta línea específica si tu archivo está en la raíz de app
    "./src/app/page.js", // <--- Y esta también por seguridad
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}