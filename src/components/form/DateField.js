import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputWrapper from './InputWrapper'
import './DateField.css'

class DateField extends Component {
  render () {
    return (
      <InputWrapper label={this.props.label}>
        <div className='layout row'>
          <div className='flex'>
            <input type='text' value={this.props.value} placeholder='MM' className='center-text' size='2' maxlength='2'/>
          </div>
          -
          <div className='flex'>
            <input type='text' value={this.props.value} placeholder='DD' className='center-text' size='2' maxlength='2'/>
          </div>
          -
          <div className='flex'>
            <input type='text' value={this.props.value} placeholder='YY' className='center-text' size='2' maxlength='2'/>
          </div>
        </div>
      </InputWrapper>
    )
  }
}

export default DateField
