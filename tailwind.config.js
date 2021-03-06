module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#335963",
        "color-domi": "#EEE",
        primary: "#335963",
        avistaloo: "#335963",
      },
      screens: {
        navxs: { min: "0px", max: "336px" },

        navsm: { min: "337px", max: "767px" },

        navmd: { min: "768px", max: "1102px" },

        navlg: { min: "1103px", max: "5000px" },
      },
      backgroundImage: {
        "header-background": "url('/src/assets/styles/images/background-header.jpg')",
      },
      boxShadow: {
        "4xl": "0 0 20px rgba(51, 89, 99, 0.5)",
      },
    },
  },
  plugins: [],
}
