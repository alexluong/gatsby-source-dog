import React from "react"
import PropTypes from "prop-types"
import { css } from "react-emotion"
import { Spring, animated } from "react-spring"
import SidebarContent from "./Content"

const propTypes = {
  open: PropTypes.bool.isRequired,
}

const Sidebar = ({ open }) => (
  <Spring native to={{ width: open ? 100 : 0, opacity: open ? 1 : 0 }}>
    {({ width, opacity }) => (
      <animated.div
        id="sidebar"
        className={sidebarCss}
        style={{
          width: width.interpolate(w => `${w}%`),
          opacity: opacity.interpolate(d => `${d}`),
        }}
      >
        <SidebarContent />
      </animated.div>
    )}
  </Spring>
)

Sidebar.propTypes = propTypes

export default Sidebar

const sidebarCss = css`
  max-width: 300px;
  min-width: 300px;
  /* height: 600px; */
  position: relative;
  transition: all 0.2s ease;

  @media screen and (max-width: 1000px) {
    max-width: 250px;
    min-width: 250px;
  }
`
