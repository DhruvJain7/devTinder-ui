import daisyui from "daisyui"; // 1. Import it at the top

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"JetBrains Mono"', "monospace"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [
    daisyui, // 2. Use the imported variable here (No 'require')
  ],
  daisyui: {
    themes: [
      {
        ide: {
          primary: "#58A6FF",
          "primary-content": "#0D1117",
          secondary: "#7EE787",
          "secondary-content": "#0D1117",
          accent: "#FF7B72",
          neutral: "#30363D",
          "base-100": "#0D1117",
          "base-200": "#161B22",
          "base-300": "#21262D",
          "base-content": "#C9D1D9",

          info: "#58A6FF",
          success: "#7EE787",
          warning: "#D29922",
          error: "#FF7B72",
        },
      },
    ],
  },
};
