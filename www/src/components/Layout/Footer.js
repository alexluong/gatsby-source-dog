import React from "react"
import { css } from "react-emotion"

const Footer = () => (
  <footer className={footerCss}>
    <div>
      <p>
        Special thanks to{" "}
        <a href="https://twitter.com/ryanwiemer">Ryan Wiemer</a> for an awesome
        photo of Birch the dog
      </p>

      <p>
        Site by <a href="https://www.alexluong.com">Alex Luong</a>
      </p>
    </div>
  </footer>
)

export default Footer

const footerCss = css`
  background-color: #cecece;
  padding: 1.5rem 0;
  div {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;

    p {
      margin: 0;

      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
    }

    a {
      color: currentColor;
    }
  }
`
