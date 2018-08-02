import React from "react"
import { css } from "react-emotion"
import Layout from "components/Layout"
import GatsbyLink from "components/GatsbyLink"

const OtherPluginsPageHelper = ({ children }) => (
  <Layout>
    <h1>Other Plugins Integration</h1>

    <p>
      Because <code>gatsby-source-dog</code>'s sole purpose is to fetch dog
      images, it would be best to use it with other image plugins in the great
      Gatsby ecosystem like{" "}
      <a href="https://www.gatsbyjs.org/packages/gatsby-image/">
        <code>gatsby-image</code>
      </a>,{" "}
      <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/">
        <code>gatsby-plugin-sharp</code>
      </a>, and{" "}
      <a href="https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/">
        <code>gatsby-transformer-sharp</code>
      </a>.
    </p>

    <p>
      Here are two pages to let you see the differences between 2 approaches.
      And try refresh the page a few times to see the full effect.
    </p>

    <div className={containerCss}>
      <GatsbyLink to="/docs/other-plugins/only" className={linkCss}>
        Only Gatsby Source Dog
      </GatsbyLink>
      <GatsbyLink to="/docs/other-plugins/with-others" className={linkCss}>
        Used With Other Plugins
      </GatsbyLink>
    </div>

    {children}
  </Layout>
)

export default OtherPluginsPageHelper

const containerCss = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.45rem;
`

const linkCss = css`
  background-color: rebeccapurple;
  padding: 1.2rem 2rem;
`
