/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "from-zero": "skill 1s ease-in-out",
      },
      keyframes: {
        skill: {
          from: { width: 0 },
        },
      },
    },
  },
  plugins: [],
};
