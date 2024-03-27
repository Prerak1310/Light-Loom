/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        panel: ["url('../public/logo192.png')"],
        appointment: ["url(./assets/appointment.jpg)"],
        homebackground: ["url('./assets/homebackground.jpg')"],
        banner: ["url('./assets/banner.jpg')"],
      },
    },
  },
  plugins: [],
};
