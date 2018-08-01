import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"
import GatsbyImage from "components/GatsbyImage"
import withRandomImage from "hoc/withRandomImage"

const Docs = ({ image: { fluid, original }, html }) => (
  <Layout>
    <h1>Documentation</h1>

    <p>
      Gatsby source plugin for pulling data into Gatsby from{" "}
      <a href="https://dog.ceo/dog-api">Dog API</a>
    </p>

    <GatsbyImage
      fluid={fluid}
      alt="Some pretty random dog"
      style={{
        width: original.width,
        height: original.height,
        maxWidth: "100%",
      }}
    />

    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export default withRandomImage(props => (
  <StaticQuery
    query={graphql`
      {
        post: markdownRemark(frontmatter: { name: { eq: "docs" } }) {
          html
        }
      }
    `}
    render={data => <Docs {...props} html={data.post.html} />}
  />
))
