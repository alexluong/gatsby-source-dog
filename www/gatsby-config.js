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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-prismjs",
          "gatsby-remark-smartypants",
          "gatsby-plugin-catch-links",
          "gatsby-remark-images",
        ],
      },
    },
    {
      resolve: "gatsby-source-dog",
      options: {
        breeds: {
          list: true,
          random: true,
          number: 5,
        },
        breed: ["Border Collie"],
      },
    },
  ],
}
