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
          xl: "1110px",
          tablet: "767px",
          mobile: "330px",
        },
      },
      screens: {
        mobile: "375px",
        tablet: "768px",
      },
      backgroundImage: {
        hero: "url('/mock-images/home/Bitmap.png')",
        heroBg: "url('/mock-images/home/heroShadow.png')",
        footerTop: "url('/mock-images/footer/bgImage.png')",
        aboutBg: "url('/mock-images/about/truck.png')",
        aboutHeroTop: "url('/mock-images/careers/heroTopBg.png')",
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const columnFuntion = {
          ".smPadding": {
            paddingLeft: "92px",
            paddingRight: "92px",
          },
          ".dfCenter": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          ".dfBetween": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          ".dfCol": {
            display: "flex",
            flexDirection: "column",
          },
          ".dfRow": {
            display: "flex",
            flexDirection: "row",
          },
        };
        addUtilities(columnFuntion, ["responsive", "hover"]);
      },
    ],
  },
  plugins: [],
};
