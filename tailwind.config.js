/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // alias
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        "primary-ultra-light": "var(--primary-ultra-light)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "secondary-ultra-light": "var(--secondary-ultra-light)",
        accent: "var(--accent)",
        positive: "var(--positive)",
        warning: "var(--warning)",
        // colors
        yellow: "var(--primary)",
        "yellow-dark": "var(--primary)",
        "yellow-light": "var(--primary-light)",
        "yellow-ultra-light": "var(--primary-ultra-light)",
        blue: "var(--secondary)",
        "blue-light": "var(--secondary-light)",
        "blue-ultra-light": "var(--secondary-ultra-light)",
        turquoise: "var(--accent)",
        disabled: "var(--disabled)",
        // green: "var(--positive)",
        // red: "var(--warning)",
        // on colors
        "on-primary-background": "var(--on-primary-background)",
        "on-yellow-background": "var(--on-primary-background)",
        "on-secondary-ultra-light-background":
          "var(--on-secondary-ultra-light-background)",
        "on-blue-ultra-light-background":
          "var(--on-secondary-ultra-light-background)",
        "on-background": "var(--on-background)",
        "on-background-medium-emphasis": "var(--on-background-medium-emphasis)",
        "on-background-highlight": "var(--on-background-highlight)",
        "on-height-emphasis-background": "var(--on-height-emphasis-background)",
        "on-disabled": "var(--on-disabled)",
      },
    },
  },
  plugins: [],
};
