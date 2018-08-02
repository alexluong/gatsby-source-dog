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
                url
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
        const randomNumber = Math.floor(Math.random() * imgArr.length)
        const image = imgArr[randomNumber].node

        return (
          <Component
            image={image.image.childImageSharp}
            url={image.url}
            {...props}
          />
        )
      }}
    />
  )
}

export default withRandomImage
