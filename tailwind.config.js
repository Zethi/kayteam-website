/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 1px 5px -2px rgba(0,0,0,1)",
        box: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      },
      lineHeight: {
        11: "52px"
      },
      colors: {
        "kt-orange": "#FF5307"
      },
      borderRadius: {
        s: "4px"
      }
    }
  },
  plugins: []
};
