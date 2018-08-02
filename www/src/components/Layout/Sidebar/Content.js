import React from "react"
import styled, { css } from "react-emotion"
import GatsbyLink from "components/GatsbyLink"

class SidebarContent extends React.Component {
  state = {
    rect: {},
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePosition)
    this.updatePosition()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition)
  }

  updatePosition = () => {
    const sidebar = document.getElementById("sidebar")
    const sidebarRect = sidebar ? sidebar.getBoundingClientRect() : {}
    this.setState({ rect: sidebarRect })
  }

  render() {
    const { rect } = this.state

    return (
      <Container dimension={rect}>
        <h2 className={titleCss}>
          <GatsbyLink to="/docs">Docs</GatsbyLink>
        </h2>
        <GatsbyLink to="/docs/api">API explanation</GatsbyLink>
        <br />
        <GatsbyLink to="/docs/other-plugins">
          Other plugins integration
        </GatsbyLink>

        <hr />

        <h2 className={titleCss}>
          <GatsbyLink to="/examples">Examples</GatsbyLink>
        </h2>
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
  color: white;
`

const titleCss = css`
  color: white;
  margin-bottom: 0.5rem;

  a {
    margin: 0;
    transition: all 0.1s ease-in;

    &:hover {
      background-color: transparent;
      transform: rotate(-7deg) scale(1.2);
      font-weight: 400;
      font-style: italic;
      text-decoration: underline;
    }
  }
`
