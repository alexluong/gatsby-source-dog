import React from "react"
import PropTypes from "prop-types"
import { css } from "react-emotion"
import GatsbyLink from "components/GatsbyLink"

const Header = ({ siteTitle }) => (
  <div className={containerCss}>
    <div className={headerCss}>
      <h1 className={titleCss}>
        <GatsbyLink to="/" className={linkCss}>
          {siteTitle}
        </GatsbyLink>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header

const containerCss = css`
  background: rebeccapurple;
  padding: 1.45rem 0;
`

const headerCss = css`
  max-width: 1400px;
  padding: 0 5rem;
  width: 100%;
  margin: 0 auto;
`

const titleCss = css`
  margin: 0;
  color: white;
`

const linkCss = css`
  color: white;
  text-decoration: none;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`
