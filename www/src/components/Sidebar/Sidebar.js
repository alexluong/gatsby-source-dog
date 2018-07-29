import React from "react"
import PropTypes from "prop-types"
import { css } from "react-emotion"
import { Spring, animated } from "react-spring"
import SidebarContent from "./Content"

const propTypes = {
  open: PropTypes.bool.isRequired,
}

const Sidebar = ({ open, ...props }) => (
  <Spring native to={{ width: open ? 20 : 0, opacity: open ? 1 : 0 }}>
    {({ width, opacity }) => (
      <animated.div
        className={sidebarCss}
        style={{
          width: width.interpolate(w => `${w}vw`),
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
  width: 20vw;
  background: #fff;
  border-right: 1px solid #e8e8e8;
`
