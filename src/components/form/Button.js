import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component {
  static propTypes = {
    submit: PropTypes.bool,
    reset: PropTypes.bool,
  }

  state = {
    type: 'button'
  }

  constructor(props) {
    super(props)

    if (props.submit)
      this.state.type = 'submit'
    else if (props.reset)
      this.state.type = 'reset'
  }

  render () {
    var { submit, reset, children, ...pass_props} = this.props

    return (
      <button type={this.state.type} {...pass_props}>
        <div className='button-content'>
          {children}
        </div>
      </button>
    )
  }
}

export default Button
