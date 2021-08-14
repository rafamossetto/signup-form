module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        "prim-red": "hsl(0, 100%, 74%)",
        "prim-green": "hsl(154, 59%, 51%)",
        "prim-blue": "hsl(248, 32%, 49%)",
        "prim-grey": "hsl(249, 10%, 26%)",
        "prim-neut-violet": "hsl(246, 25%, 77%)",
      },
      backgroundImage: (theme) => ({
        "pc-wallpaper": "url('/images/bg-intro-desktop.png')",
        "mb-wallpaper": "url('/images/bg-intro-mobile.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
