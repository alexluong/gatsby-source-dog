import React from "react"
import { StaticQuery, graphql } from "gatsby"

const withRandomImage = Component => {
  return props => (
    <StaticQuery
      query={graphql`
        {
          allDogImage {
            edges {
              node {
                image {
                  childImageSharp {
                    original {
                      width
                      height
                    }
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const imgArr = data.allDogImage.edges
        const image =
          imgArr[Math.floor(Math.random() * imgArr.length)].node.image
            .childImageSharp
        return <Component image={image} {...props} />
      }}
    />
  )
}

export default withRandomImage
