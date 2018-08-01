import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"

const Post = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  return (
    <React.Fragment>
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`
