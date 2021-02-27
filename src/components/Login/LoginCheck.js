import React from 'react'
import Button from '../Button'
import './LoginCheck.css'

class LoginCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="login_check__hero-row">  
        <div className="register">
          <div className="text">
            <div className="login_check__text-wrapper">
              <p>{this.props.register_hint}</p>
            </div>
          </div>
          <div className="href">
            <div className="login_check__href-wrapper">
              <a href={this.props.register_href} >{this.props.register_href}</a>
            </div>
          </div>
        </div>
        <div className="login">
          <div className="login_check__button-wrapper">
            <Button
              children={this.props.login_title}
              buttonColor='lightblue'
              handleSubmit={this.props.handleSubmit}
            ></Button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginCheck