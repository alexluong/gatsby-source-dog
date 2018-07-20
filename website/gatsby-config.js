module.exports = {
  siteMetadata: {
    title: "Gatsby Source Dog Demo",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-dog",
      options: {
        breeds: {
          list: true,
          random: {
            number: 5,
          },
        },
        breed: [
          "husky",
          "Border Collie",
          "retriever-golden",
          {
            name: "corgi",
          },
          {
            name: "Great Dane",
            random: true,
          },
          {
            name: "pug",
            random: true,
            number: 3,
          },
        ],
      },
    },
  ],
}
