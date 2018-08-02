import React from "react"
import PropTypes from "prop-types"
import { css } from "react-emotion"
import GatsbyLink from "components/GatsbyLink"
import githubMark from "assets/github.png"

const Header = ({ siteTitle }) => (
  <header className={headerCss}>
    <div className={containerCss}>
      <h1 className={titleCss}>
        <GatsbyLink to="/" className={linkCss}>
          {siteTitle}
        </GatsbyLink>
      </h1>

      <div className={rightCss}>
        <a href="https://github.com/alexluong/gatsby-source-dog">
          <img alt="Github mark" src={githubMark} />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header

const headerCss = css`
  background: rebeccapurple;
  height: 100px;
`

const containerCss = css`
  max-width: 1400px;
  padding: 0 5rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const rightCss = css`
  display: flex;
  align-items: center;

  a {
    img {
      margin: 0;
    }
  }
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
