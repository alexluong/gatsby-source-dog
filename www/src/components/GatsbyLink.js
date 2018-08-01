import React from "react"
import PropTypes from "prop-types"
import { css } from "react-emotion"
import { Link } from "gatsby"

const GatsbyLink = ({
  to,
  href,
  color,
  style,
  className,
  children,
  ...props
}) => {
  if (to) {
    return (
      <Link
        to={to}
        style={{ ...style, color }}
        className={css`
          ${linkCss} ${className};
        `}
        {...props}
      >
        {children}
      </Link>
    )
  } else if (href) {
    return (
      <a
        href={href}
        style={{ ...style, color }}
        className={`${className} ${linkCss}`}
        {...props}
      >
        {children}
      </a>
    )
  } else {
    console.error(`ERROR: GatsbyLink need to have "href" or "to" props.`)
    return null
  }
}

GatsbyLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

GatsbyLink.defaultProps = {
  color: "#fff",
  className: "",
  style: {},
}

export default GatsbyLink

const linkCss = css`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.4rem;
  display: inline-block;

  transition: all 0.2s ease-in-out;

  &:focus,
  &:active,
  &:visited {
    color: currentColor;
  }

  &:hover {
    background-color: blue;
  }
`
