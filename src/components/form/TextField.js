import React, {Component} from 'react'
import PropTypes from 'prop-types'
import InputWrapper from './InputWrapper'
import './TextField.css'
import Cleave from 'cleave.js/react'

class TextField extends Component {
  static propTypes = {
    label: PropTypes.string,
    format: PropTypes.object,
    centered: PropTypes.bool,
  }

  render () {
    var { label, format, centered, ...pass_props } = this.props

    return (
      <InputWrapper label={label}>
        <Cleave type='text' options={format} {...pass_props}
          className={centered ? 'center-text' : null}/>
      </InputWrapper>
    )
  }
}

export default TextField
