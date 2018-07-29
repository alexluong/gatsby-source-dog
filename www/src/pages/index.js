import React from "react"
import Image from "gatsby-image"
import Link from "gatsby-link"
import Layout from "components/Layout"
import withRandomImage from "hoc/withRandomImage"

const IndexPage = ({ image }) => (
  <Layout>
    <p>
      Gatsby source plugin for pulling data into Gatsby from{" "}
      <a href="https://dog.ceo/dog-api">Dog API</a>
    </p>

    <Image
      fluid={image.fluid}
      alt="Some random beautiful dog"
      style={imageStyle(image.original.width, image.original.height)}
    />

    <h2>Documentation</h2>
    <p>
      For a detailed explanation of the API, please read through the{" "}
      <Link to="/doc">documentation page</Link>
    </p>

    <h2>Quick Start</h2>

    <h3>Installation</h3>
    <pre>yarn add gatsby-source-dog</pre>

    <h3>Config</h3>
    <p>
      Inside your <code>gatsby-config.js</code>:
    </p>
    <pre>{config}</pre>

    <h3>Query</h3>
    <p>In this page, I randomly display a dog image. Here is how I did it:</p>
    <ol>
      <li>Get all dog images</li>
      <li>Randomly select one image</li>
    </ol>
    <pre>{randomImage}</pre>

    <p>For more examples, please check out:</p>
    <ul>
      <li>Example 1</li>
      <li>Example 2</li>
      <li>Example 3</li>
    </ul>
  </Layout>
)

export default withRandomImage(IndexPage)

function imageStyle(width, height) {
  return {
    width: `${width}px`,
    height: `${height}px`,
    marginBottom: "2rem",
    maxWidth: "100%",
  }
}

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

const randomImage = `
// src/pages/index.js

<StaticQuery
  query={graphql\`
    {
      allDogImage {
        edges {
          node {
            url
          }
        }
      }
    }
  \`}
  render={data => {
    const imgArr = data.allDogImage.edges
    const randomURL =
      imgArr[Math.floor(Math.random() * imgArr.length)].node.url
    return <IndexPage imgURL={randomURL} {...props} />
  }}
/>
`
