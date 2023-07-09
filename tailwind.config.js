/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "905px",
      lg: "1240px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "display-large": [
          "clamp(4.63rem, calc(3.45rem + 3.13vw), 5.88rem)",
          {
            lineHeight: "clamp(5.75rem, calc(5.16rem + 1.56vw), 6.38rem)",
            letterSpacing: "-0.03em",
            fontWeight: "700",
          },
        ],
        "display-medium": [
          "clamp(3.63rem, calc(2.69rem + 2.50vw), 4.63rem)",
          {
            lineHeight: "clamp(4.13rem, calc(3.19rem + 2.50vw), 5.13rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "display-small": [
          "clamp(2.88rem, calc(2.17rem + 1.88vw), 3.63rem)",
          {
            lineHeight: "clamp(3.38rem, calc(2.67rem + 1.88vw), 4.13rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "headline-large": [
          "clamp(2.25rem, calc(1.66rem + 1.56vw), 2.88rem)",
          {
            lineHeight: "clamp(2.75rem, calc(2.16rem + 1.56vw), 3.38rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "headline-medium": [
          "clamp(1.75rem, calc(1.28rem + 1.25vw), 2.25rem)",
          {
            lineHeight: "clamp(2.25rem, calc(1.78rem + 1.25vw), 2.75rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "headline-small": [
          "clamp(1.38rem, calc(1.02rem + 0.94vw), 1.75rem)",
          {
            lineHeight: "clamp(1.88rem, calc(1.52rem + 0.94vw), 2.25rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "title-large": [
          "clamp(1.13rem, calc(1.01rem + 0.31vw), 1.25rem)",
          {
            lineHeight: "clamp(1.63rem, calc(1.51rem + 0.31vw), 1.75rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "title-medium": [
          "clamp(1.00rem, calc(0.88rem + 0.31vw), 1.13rem)",
          {
            lineHeight: "clamp(1.50rem, calc(1.38rem + 0.31vw), 1.63rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "title-small": [
          "clamp(0.88rem, calc(0.76rem + 0.31vw), 1.00rem)",
          {
            lineHeight: "clamp(1.38rem, calc(1.26rem + 0.31vw), 1.50rem)",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "label-large": [
          "clamp(0.75rem, calc(0.63rem + 0.31vw), 0.88rem)",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.06em",
            fontWeight: "700",
          },
        ],
        "label-medium": [
          "clamp(0.69rem, calc(0.63rem + 0.16vw), 0.75rem)",
          {
            lineHeight: "1.125",
            letterSpacing: "0.06em",
            fontWeight: "700",
          },
        ],
        "label-small": [
          "clamp(0.63rem, calc(0.57rem + 0.16vw), 0.69rem)",
          {
            lineHeight: "1rem",
            letterSpacing: "0.06em",
            fontWeight: "700",
          },
        ],
        "body-large": [
          "clamp(0.88rem, calc(0.76rem + 0.31vw), 1.00rem)",
          {
            lineHeight: "clamp(1.38rem, calc(1.26rem + 0.31vw), 1.50rem)",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "body-medium": [
          "clamp(0.75rem, calc(0.63rem + 0.31vw), 0.88rem)",
          {
            lineHeight: "clamp(1.25rem, calc(1.13rem + 0.31vw), 1.375rem)",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "body-small": [
          "clamp(0.69rem, calc(0.63rem + 0.16vw), 0.75rem)",
          {
            lineHeight: "clamp(1.25rem, calc(2.22rem + -1.25vw), 1.75rem)",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
