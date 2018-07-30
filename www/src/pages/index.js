import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
// import Link from "gatsby-link"
import Layout from "components/Layout"

const IndexPage = ({ html }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export default () => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: { page: { eq: "index" } }) {
          html
        }
      }
    `}
    render={data => <IndexPage html={data.markdownRemark.html} />}
  />
)
