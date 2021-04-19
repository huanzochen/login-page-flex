import React from 'react'
import './Button.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.COLOR = ['lightblue', 'lightred']
  }

  render() {
    const checkButtonColor = this.COLOR.includes(this.props.buttonColor) ?
      this.props.buttonColor
      : this.COLOR[0]
    return (
      <button
        className={`btn ${checkButtonColor}`}
        onClick={this.props.handleSubmit}
      >{this.props.children}</button>
    )
  }
}

export default Button