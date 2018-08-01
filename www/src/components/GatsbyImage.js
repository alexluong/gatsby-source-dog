import React from "react"
import Image from "gatsby-image"

const GatsbyImage = ({ style, ...props }) => (
  <Image {...props} style={{ marginBottom: "1.5rem", ...style }} />
)

GatsbyImage.defaultProps = {
  style: {},
}

export default GatsbyImage
