module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        ams: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('../components/shared/imgs/amsproject.jpg')",
        d2c: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('../components/shared/imgs/d2cproject.jpg')",
        cpw: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('../components/shared/imgs/cpwproject.jpg')",
        tileams: "url('../components/shared/imgs/amsvans.jpg')",
        tiled2c: "url('../components/shared/imgs/d2c.jpg')",
        tilecpw: "url('../components/shared/imgs/cpw.jpg')",
      },
    },
  },
  plugins: [],
}
