/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {

    extend: {
      colors: {
        gray: {
          "100": "rgba(255, 255, 255, 0.77)",
          "200": "rgba(255, 255, 255, 0.47)",
          "300": "rgba(255, 255, 255, 0.7)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.1)",
        },
        white: "#fff",
        "half-white": "rgba(255, 255, 255, 0.5)",
        red: "#ff2525",  
        tomato: "#ff3535",  
        gainsboro: {
          "100": "rgba(230, 230, 230, 0.75)",
          "200": "rgba(222, 222, 222, 0.76)",
        },
        lightgray: "#cfcfcf",
      },
      // spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "sf-pro-display": "'SF Pro Display'",
        roboto: "Roboto",
      },
    //  borderRadius: {
    //     "5xs-33": "7.3px",
    //     "8xss": "5px",
    //     "3xss": "10px",
        
    //   },
    },
    fontSize: {
      "mini-6": "14.6px",
      "2xs": "11px",
      base: "16px",
      mini: "15px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    // screens: {
    //   pc: {
    //     max: "1200px",
    //   },
    //   ipad: {
    //     max: "960px",
    //   },
    //   phone: {
    //     max: "420px",
    //   },
    // },
  },
  corePlugins: {
    preflight: true,

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}