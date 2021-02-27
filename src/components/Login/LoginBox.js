import React from 'react'
import './LoginBox.css'

class LoginBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginIsClick:false,
      passwordIsClick:false
    }
    this.clickLoginBox = this.clickLoginBox.bind(this)
    this.clickPasswordBox = this.clickPasswordBox.bind(this)

  }

  clickLoginBox() {
    console.log(this.state.loginIsClick)
    this.setState({ loginIsClick: !this.state.loginIsClick })
  }

  clickPasswordBox() {
    console.log(this.state.passwordIsClick)
    this.setState({ passwordIsClick: !this.state.passwordIsClick })
  }

  render() {
    const loginBoxIsSelect = this.state.loginIsClick ? 'box-lightblue' : ''
    const passwordBoxIsSelect = this.state.passwordIsClick ? 'box-lightblue' : ''
    return (
      <div className="login_box__hero-row">
        <form onSubmit={this.handleSubmit} >
          <div className="col">
            <div className={`login_box__input-box ${loginBoxIsSelect}`} onClick={this.clickLoginBox}>
              <input name="username" onChange={this.props.handleChange} placeholder={this.props.email_hint} value={this.props.username}></input>
            </div>
          </div>
          <div className="col">
            <div className={`login_box__input-box ${passwordBoxIsSelect}`} onClick={this.clickPasswordBox}>
              <input name="password" onChange={this.props.handleChange} placeholder={this.props.password_hint} value={this.props.password}></input>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default LoginBox