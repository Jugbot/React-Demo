import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Form.css'

class Form extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }
  //
  // deepSearch(props) {
  //   React.Children.map(props.children, (obj) => {
  //     console.log(obj)
  //   })
  // }
  //
  // constructor(props) {
  //   super(props)
  //   this.deepSearch(props)
  // }

  // formSubmit(event) {
  //   if (this.props.preventDefault)
  //     event.preventDefault()
  //   this.props.onSubmit(event)
  //   return false
  // }

  render () {
    var {children, ...pass_props} = this.props

    return (
      <form {...pass_props}>
        {children}
      </form>
    )
  }
}

export default Form
