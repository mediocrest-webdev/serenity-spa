/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(105, 50%, 90%)", 
        secondary: "hsl(105, 50%, 10%)",
        tertiary: "hsl(45, 80%, 20%)",
        accent: "hsl(165, 80%, 20%)",
      },
      fontSize: {
        xs: "0.75em", // Small text for captions
        sm: "0.875em", // Smaller body text
        base: "1em", // Default body text size for readability
        lg: "1.125em", // Larger body text, good for subheadings
        xl: "clamp(1em, 2.5vw, 1.25em)", // Main headings or larger emphasis
        "2xl": "clamp(1.25em, 3vw, 1.5em)", // Key section headings
        "3xl": "clamp(1.5em, 3.5vw, 1.875em)", // Primary page headings
        "4xl": "clamp(1.75em, 4vw, 2.25em)", // Large hero section headings
        "5xl": "clamp(2em, 5vw, 3em)", // Biggest headlines for marketing
      },
      spacing: {
        // Material Design-inspired spacing scale in ems
        '0': '0',             // No spacing
        'xs': '0.25em',       // 4dp equivalent
        'sm': '0.5em',        // 8dp equivalent
        'md': '1em',          // 16dp equivalent (base unit)
        'lg': '1.5em',        // 24dp equivalent
        'xl': '2em',          // 32dp equivalent
        '2xl': '3em',         // 48dp equivalent
        '3xl': '4em',         // 64dp equivalent
      }
    },
    container: {
      center: true, // This centers the container horizontally
      padding: '0 1rem', // Optional: adds padding to the container
    },
  },
  plugins: [],
};
