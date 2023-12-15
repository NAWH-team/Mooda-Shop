/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "rgba(255, 255, 255, 0.77)",
          "200": "rgba(255, 255, 255, 0.47)",
          "300": "rgba(255, 255, 255, 0.7)",
        },
        white: "#fff",
        red: "#ff2525",  
        tomato: "#ff3535",
     
        lightgray: "#cfcfcf",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "sf-pro-display": "'SF Pro Display'",
        roboto: "Roboto",
      },
     
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },

  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};
