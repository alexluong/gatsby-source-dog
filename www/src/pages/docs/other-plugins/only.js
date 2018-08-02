import React from "react"
import OtherPluginsPageHelper from "components/OtherPluginsPageHelper"
import withRandomImage from "hoc/withRandomImage"

const Only = ({ url }) => (
  <OtherPluginsPageHelper>
    <h3>Only Gatsby Source Dog</h3>

    <p>
      <code>gatsby-source-dog</code> alone only gives us image URLs. That would
      be sufficient for us to display the image to the screen.
    </p>

    <img alt="Use URL to display dog" src={url} />

    <p>However, there are a few disadvantages with these aproach.</p>
    <ul>
      <li>
        We have to make a network request to get the image from the internet.
        This will affect page load.
      </li>
      <li>
        The structure of our website will be affected. The text will be jumpy as
        it has to give space for the image.
      </li>
      <li>
        And last but not least, the image will appear out of the sudden, which
        may not be the best user experience.
      </li>
    </ul>
  </OtherPluginsPageHelper>
)

export default withRandomImage(Only)
