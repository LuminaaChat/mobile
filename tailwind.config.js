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
        background: "var(--background)",
        "height-emphasis": "var(--height-emphasis)",
        // on colors
        "on-primary": "var(--on-primary)",
        "on-secondary-ultra-light": "var(--on-secondary-ultra-light)",
        "on-background": "var(--on-background)",
        "on-background-medium-emphasis": "var(--on-background-medium-emphasis)",
        "on-background-highlight": "var(--on-background-highlight)",
        "on-height-emphasis": "var(--on-height-emphasis)",
        "on-disabled": "var(--on-disabled)",
      },
    },
  },
  plugins: [],
};
