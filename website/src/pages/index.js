import React from "react"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>

    <h2>To install the plugin, run:</h2>
    <pre>yarn add gatsby-source-dog</pre>

    <h2>Set up</h2>
    <p>
      Inside your <code>gatsby-config.js</code>:
    </p>
    <pre>{config}</pre>
  </Layout>
)

export default IndexPage

const config = `
// gatsby-config.js:
{
  ...
  plugins: [
    ...
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
    ...
  ],
  ...
}
`
