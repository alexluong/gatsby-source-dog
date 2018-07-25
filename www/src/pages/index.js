import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"

const IndexPage = ({ imgURL }) => (
  <Layout>
    <p>
      Gatsby source plugin for pulling data into Gatsby from{" "}
      <a href="https://dog.ceo/dog-api">Dog API</a>
    </p>

    <img src={imgURL} alt="Some random beautiful dog" />

    <h2>To install the plugin, run:</h2>
    <pre>yarn add gatsby-source-dog</pre>

    <h2>Set up</h2>
    <p>
      Inside your <code>gatsby-config.js</code>:
    </p>
    <pre>{config}</pre>
  </Layout>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        allDogImage {
          edges {
            node {
              url
            }
          }
        }
      }
    `}
    render={data => {
      const imgArr = data.allDogImage.edges
      const randomURL =
        imgArr[Math.floor(Math.random() * imgArr.length)].node.url
      return <IndexPage imgURL={randomURL} {...props} />
    }}
  />
)

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
        random: true,
        number: 5,
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
    ...
  ],
  ...
}
`
