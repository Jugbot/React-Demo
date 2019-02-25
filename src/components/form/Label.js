import React from 'react'

const Label = function Label(props) {
  return (
    <label>
      {props.label}
      {props.children}
    </label>
  )
}

export default Label
