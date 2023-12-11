// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         yellow: {
//           DEFAULT: "#FCB72B",
//         },
//         darkNavy: {
//           DEFAULT: "#495567",
//         },
//         dimGrey: {
//           DEFAULT: "#939CAA",
//         },
//         lightGrey: {
//           DEFAULT: "#E5ECF4",
//         },
//         snow: {
//           DEFAULT: "#F2F5F9",
//         },
//         lightYellow: {
//           DEFAULT: "#FFF4DFw",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgYellow: {
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
      fontFamily: {
        spaceMono: ["space-mono"],
        lexendDeca: ["lexend-deca"],
      },
      container: {
        center: true,
        screens: {
          xl: "1136px",
        },
      },
      backgroundImage: {
        hero: "url('/mock-images/home/Bitmap.png')",
        heroBg: "url('/public/mock-images/home/heroShadow.png')",
        footerTop: "url('/mock-images/footer/bgImage.png')",
      },
    },
  },
  plugins: [],
};
