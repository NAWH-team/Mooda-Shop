/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    // Add any other file extensions or paths your project uses
  ],
  theme: {

    extend: {
      // colors: {
      //   gray: {
      //     "100": "rgba(255, 255, 255, 0.77)",
      //     "200": "rgba(255, 255, 255, 0.47)",
      //     "300": "rgba(255, 255, 255, 0.7)",
      //   },
      //   white: "#fff",
      //   red: "#ff2525",  
      //   tomato: "#ff3535",
      //   // gainsboro: {
      //   //   "100": "rgba(230, 230, 230, 0.75)",
      //   //   "200": "rgba(222, 222, 222, 0.76)",
      //   // },
      //   lightgray: "#cfcfcf",
      // },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "sf-pro-display": "'SF Pro Display'",
        roboto: "Roboto",
      },
      // borderRadius: {
      //   "3xs": "10px",
      // },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    // screens: {
    //   lg: {
    //     max: "1200px",
    //   },
    //   md: {
    //     max: "960px",
    //   },
    //   sm: {
    //     max: "420px",
    //   },
    },
  // },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
    extend: {},
  },
  plugins: [],
}
