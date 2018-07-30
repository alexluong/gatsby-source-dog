import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { css } from "react-emotion"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
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
          <div className={containerCss}>
            <main className={mainCss}>
              <div className={contentCss}>{children}</div>
              <Sidebar open={on} />
            </main>
          </div>
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

const containerCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const mainCss = css`
  max-width: 1400px;
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-around;
`

const contentCss = css`
  /* flex-shrink: 1; */
  max-width: 600px;
  /* margin-left: 2rem; */
`
