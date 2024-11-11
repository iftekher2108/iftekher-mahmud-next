/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#0061ff",
          
"secondary": "#009aff",
          
"accent": "#0081ff",
          
"neutral": "#0c0305",
          
"base-100": "#ffffff",
          
"info": "#00b7f0",
          
"success": "#2ce100",
          
"warning": "#b43700",
          
"error": "#ef0045",
          },
        },
      ],
    },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
};
