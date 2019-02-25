import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputWrapper from './InputWrapper'
import './ComboBox.css'

class ComboBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }

  render () {
    var {label, items, ...pass_props} = this.props

    const options = items.map(op =>
      <option key={op.toLowerCase()} value={op.toLowerCase()}>{op}</option>
    )

    options.push(
      <option key='' hidden disabled value style={{display: 'none'}}></option>
    )

    return (
      <InputWrapper label={label}>
        <select defaultValue {...pass_props}>
          {options}
        </select>
      </InputWrapper>
    )
  }
}

export default ComboBox
