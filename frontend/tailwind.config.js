/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract
  },
  theme: {
    extend: {
      fontFamily: {
        expletus: ["Expletus Sans", "sans-serif"],
      },

      colors: {
        primary: "#FF885B",
        secondary: "#FFE5CF",
        tertiary: "#557C56",
      },

      textColor: {
        "hover-primary": "#FF885B",
        "hover-secondary": "#557C56",
      },
    },
  },
  plugins: [
    fluid
  ],
};