import React from "react"
import PropTypes from "prop-types"
import { css } from "react-emotion"
import GatsbyLink from "components/GatsbyLink"

const Header = ({ siteTitle }) => (
  <div className={headerCss}>
    <h1 className={titleCss}>
      <GatsbyLink to="/" className={linkCss}>
        {siteTitle}
      </GatsbyLink>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header

const headerCss = css`
  background: rebeccapurple;
  padding: 1.45rem 5rem;
`

const titleCss = css`
  margin: 0;
  color: white;
`

const linkCss = css`
  color: white;
  text-decoration: none;
  &:hover {
    background-color: transparent;
  }
`
