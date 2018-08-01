import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"
import GatsbyImage from "components/GatsbyImage"

const IndexPage = ({ html, fluidImage }) => (
  <Layout>
    <p>
      Gatsby source plugin for pulling data into Gatsby from{" "}
      <a href="https://dog.ceo/dog-api">Dog API</a>
    </p>

    <GatsbyImage alt="Awesome doggo in Gatsby shirt" fluid={fluidImage} />

    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export default () => (
  <StaticQuery
    query={graphql`
      {
        post: markdownRemark(frontmatter: { name: { eq: "index" } }) {
          html
        }
        image: file(relativePath: { regex: "/dog.jpeg/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <IndexPage
        html={data.post.html}
        fluidImage={data.image.childImageSharp.fluid}
      />
    )}
  />
)
