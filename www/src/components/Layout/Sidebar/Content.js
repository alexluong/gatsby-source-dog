import React from "react"
import styled, { css } from "react-emotion"
import GatsbyLink from "components/GatsbyLink"

class SidebarContent extends React.Component {
  state = { update: true }

  componentDidMount() {
    window.addEventListener("resize", this.updatePosition)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition)
  }

  updatePosition = () => {
    this.setState({ update: true })
  }

  render() {
    const sidebar = document.getElementById("sidebar")
    const sidebarRect = sidebar ? sidebar.getBoundingClientRect() : {}

    console.log("update")

    return (
      <Container dimension={sidebarRect}>
        <h2 className={titleCss}>Docs</h2>
        <GatsbyLink to="/">API explanation</GatsbyLink>
        <br />
        <GatsbyLink to="/">Other plugins integration</GatsbyLink>
        <hr />
        <h2 className={titleCss}>Examples</h2>
        <GatsbyLink to="/">All images</GatsbyLink>
        <br />
        <GatsbyLink to="/">One random image</GatsbyLink>
        <br />
        <GatsbyLink to="/">One breed images</GatsbyLink>
        <br />
        <GatsbyLink to="/">List of breeds</GatsbyLink>
      </Container>
    )
  }
}

export default SidebarContent

const Container = styled.div`
  position: fixed;
  top: ${({ dimension }) => `${dimension.top}px`};
  left: ${({ dimension }) => `${dimension.left}px`};
  width: ${({ dimension }) => `${dimension.width}px`};
  /* height: ${({ dimension }) => `${dimension.height}px`}; */
  background-color: rebeccapurple;
  padding: 2rem;
`

const titleCss = css`
  color: white;
`
