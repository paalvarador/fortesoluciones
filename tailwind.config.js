/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paleta tomada de la referencia del cliente (pin de Pinterest) y del
      // logo FORTE: azul marino profundo + rojo intenso sobre blanco.
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d6dcec',
          200: '#aeb9d6',
          300: '#7f8fb8',
          400: '#55678f',
          500: '#3a4a72',
          600: '#2c3a5e',
          700: '#233050',
          800: '#1c2643',
          900: '#161e36',
          950: '#0e1426',
        },
        brand: {
          50: '#fdeeee',
          100: '#fbd5d6',
          200: '#f5a5a7',
          300: '#ee6f73',
          400: '#e53b40',
          500: '#dc1f25',
          600: '#c8161d',
          700: '#a51117',
          800: '#860f14',
          900: '#6e1014',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(14, 20, 38, 0.18)',
        'card-hover': '0 22px 45px -15px rgba(14, 20, 38, 0.32)',
      },
    },
  },
  plugins: [],
}
