import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './InputWrapper.css'

class InputWrapper extends Component {
  static propTypes = {
    label: PropTypes.string,
  }

  state = {type: 'button'}

  render () {
    return (
      <div className='vertical-labels'>
        {this.props.label ? <label className='upper-label'>{this.props.label}</label> : null}
        <div className='child-wrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default InputWrapper
