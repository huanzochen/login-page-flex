import React from 'react'
import './LoginBox.css'

class LoginBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="login_box__hero-row">
        <div className="col">
          <input></input>
        </div>
        <div className="col">
          <input></input>
        </div>
      </div>

    )
  }
}

export default LoginBox