/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as necessary
  ],
  theme: {
    extend: {
      backgroundImage: {
        "icons-pattern": `url('/src/assets/icons/icons.svg'), url('/src/assets/icons/icons1.svg'), url('/src/assets/icons/icons2.svg'), url('/src/assets/icons/icons3.svg'),
                          url('/src/assets/icons/icons4.svg'), url('/src/assets/icons/icons5.svg'), url('/src/assets/icons/icons6.svg'), url('/src/assets/icons/icons7.svg'),
                          url('/src/assets/icons/icons8.svg'), url('/src/assets/icons/icons9.svg'), url('/src/assets/icons/icons10.svg')`,
      },
      fontFamily: {
        nexa: "Nexa",
        averta: "Averta", // Add your custom font here
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
