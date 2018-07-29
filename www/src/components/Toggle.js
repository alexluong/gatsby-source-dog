import React from "react"
import PropTypes from "prop-types"

class Toggle extends React.Component {
  static propTypes = {
    on: PropTypes.bool,
  }

  static defaultProps = {
    on: false,
  }

  state = {
    on: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      on: props.on,
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on,
    }))
  }

  close = () => {
    if (this.state.on) {
      this.setState({ on: false })
    }
  }

  open = () => {
    if (!this.state.on) {
      this.setState({ on: true })
    }
  }

  render() {
    const {
      toggle,
      open,
      close,
      props: { children },
      state: { on },
    } = this

    return children({ on, toggle, open, close })
  }
}

export default Toggle
