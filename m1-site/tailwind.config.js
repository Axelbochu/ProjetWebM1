/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light': '#F0EEE3', 
        'custom-dark': '#272935',
      },
      fontFamily: {
        'elegant': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

