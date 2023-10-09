/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#877EFF",
        secondary: "#FFB620",
        bluee: "#0095F6",
        logout: "#FF5A5A",
        navbar: "rgba(16, 16, 18, 0.6)",
        dark1: "#000000",
        dark2: "#121417",
        dark3: "#101012",
        dark4: "#1F1F22",
        light1: "#FFFFFF",
        light2: "#EFEFEF",
        light3: "#7878A3",
        light4: "#5C5C7B",
        gray1: "#697C89",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      height: {
        custom: "calc(100vh-36px)",
      },
    },
  },
  plugins: [],
};
