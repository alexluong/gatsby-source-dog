module.exports = {
  siteMetadata: {
    title: "Gatsby Source Dog",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-dog",
      options: {
        breeds: {
          random: true,
          number: 5,
        },
        breed: ["Border Collie"],
      },
    },
  ],
}
