/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, jsx, js}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#FCB72B",
        },
        darkNavy: {
          DEFAULT: "#495567",
        },
        dimGrey: {
          DEFAULT: "#939CAA",
        },
        lightGrey: {
          DEFAULT: "#E5ECF4",
        },
        snow: {
          DEFAULT: "#F2F5F9",
        },
        lightYellow: {
          DEFAULT: "#FFF4DFw",
        },
      },
    },
  },
  plugins: [],
};
