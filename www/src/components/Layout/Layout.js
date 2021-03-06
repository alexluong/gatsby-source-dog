import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { css } from "react-emotion"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Toggle from "components/Toggle"
import resetCss from "config/resetCss"

import "prismjs/themes/prism.css"

resetCss()

const Layout = ({ children, data }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Toggle on>
      {({ on }) => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className={mainCss}>
            <div className={contentCss}>{children}</div>
            <Sidebar open={on} />
          </main>
          <Footer />
        </>
      )}
    </Toggle>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

const mainCss = css`
  max-width: 1400px;
  min-height: calc(100vh - 100px);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1.5rem 5rem;
  display: flex;
  justify-content: space-between;
`

const contentCss = css`
  max-width: 600px;
  width: 100%;
`
