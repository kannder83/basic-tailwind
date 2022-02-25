module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/public/img/guillaume-briard-lSXpV8bDeMA-unsplash.jpg')",
        'mountain-01': "url('/public/img/benjamin-voros-phIFdC6lA4E-unsplash.jpg')",
        'mountain-02': "url('/public/img/jeremy-bishop-dvACrXUExLs-unsplash.jpg')"
      }
    },
  },
  plugins: [],
};
