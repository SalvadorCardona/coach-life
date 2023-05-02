/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E76F51",
        "primary-darker": "#AD533D",
        "primary-darkest": "#743829",
        "primary-lighter": "#F5A692",
        "primary-lightest": "#FAC3B5",
        secondary: "#2A9D8F",
        "secondary-darker": "#29766B",
        "secondary-darkest": "#154F48",
        "secondary-lighter": "#7CC8BE",
        "secondary-lightest": "#D2EEEA",
        success: "#F4A261",
        "success-darker": "#B77A49",
        "success-lighter": "#FBBA88",
        warning: "#E9C46A",
        "warning-darker": "#AF9350",
        "warning-lighter": "#F2D58F",
        danger: "#DB3242",
        "danger-darker": "#98232E",
        "danger-lighter": "#EF7F8A",
        "neutral-4": "#616161",
      },
    },
  },
  plugins: [],
}
