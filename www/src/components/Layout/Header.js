import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "react-emotion"
// import ArrowBack from "react-icons/lib/md/arrow-back"
// import ArrowForward from "react-icons/lib/md/arrow-forward"

const Header = ({ siteTitle }) => (
  <div className={headerCss}>
    <h1 className={titleCss}>
      {/* {sidebarOpen ? (
        <ArrowBack onClick={toggleSidebar} />
      ) : (
        <ArrowForward onClick={toggleSidebar} />
      )} */}

      <Link to="/" className={linkCss}>
        {siteTitle}
      </Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  // sidebarOpen: PropTypes.bool.isRequired,
  // toggleSidebar: PropTypes.func.isRequired,
}

export default Header

const headerCss = css`
  background: rebeccapurple;
  padding: 1.45rem 1.0875rem;
`

const titleCss = css`
  margin: 0;
  color: white;
`

const linkCss = css`
  color: white;
  text-decoration: none;
  margin-left: 1rem;
`
