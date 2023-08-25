/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
                blue: {
                    '700': '#0070f3', // Change this to your desired color
                },
            },
    },
  },
  plugins: [],
};
