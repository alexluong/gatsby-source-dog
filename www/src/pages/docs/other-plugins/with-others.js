import React from "react"
import OtherPluginsPageHelper from "components/OtherPluginsPageHelper"
import GatsbyImage from "components/GatsbyImage"

import withRandomImage from "hoc/withRandomImage"

const WithOthers = ({ image }) => (
  <OtherPluginsPageHelper>
    <h3>Used With Other Plugins</h3>

    <GatsbyImage
      alt="Use other plugin to display fluid image of a random dog"
      fluid={image.fluid}
      style={{
        width: image.original.width,
        height: image.original.height,
        maxWidth: "100%",
      }}
    />

    <p>
      With the other plugins, we can generate a sharp image when we build the
      site.
    </p>
    <p>
      Therefore, we can make use of all the fancy "blur up" or "trace svg"
      effect with <code>gatsby-image</code>
    </p>
    <p>
      This approach is the solution to all the disadvantages of using the plugin
      by itself.
    </p>
  </OtherPluginsPageHelper>
)

export default withRandomImage(WithOthers)
