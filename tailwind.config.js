module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/img/guillaume-briard-lSXpV8bDeMA-unsplash.jpg')",
        "mountain-01":
          "url('/public/img/benjamin-voros-phIFdC6lA4E-unsplash.jpg')",
        "mountain-02":
          "url('/public/img/jeremy-bishop-dvACrXUExLs-unsplash.jpg')",
        "mountain-04":
          "url('/public/img/ezra-jeffrey-comeau-r4M6ZlaDLLU-unsplash.jpeg')",
        "mountain-05":
          "url('/public/img/vidar-nordli-mathisen-2cNh00feVzw-unsplash.jpeg')",
      },
    },
  },
  plugins: [],
};
