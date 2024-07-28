export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D32F2F", // Your primary color
          light: "#EF5350", // A lighter shade of your primary color
          dark: "#C62828", // A darker shade of your primary color
        },
        secondary: {
          DEFAULT: "#333333", // Main secondary color
          light: "#ffffff", // Lighter shade for secondary text
          dark: "#1C1C1C", // Darker shade if needed
        },
        accent: {
          green: "#388E3C", // Accent color for buttons or highlights
          blue: "#1976D2", // Accent color for links or other elements
        },
      },
      fontFamily: {
        "open-sans": '"Open Sans", sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
