import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
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
    this.setState({ loginIsClick: !this.state.loginIsClick })
  }

  clickPasswordBox() {
    this.setState({ passwordIsClick: !this.state.passwordIsClick })
  }

  render() {
    const loginBoxIsSelect = this.state.loginIsClick ? 'box-lightred' : ''
    const passwordBoxIsSelect = this.state.passwordIsClick ? 'box-lightred' : ''
    return (
      <div className="login_box__hero-row">
        <form onSubmit={this.handleSubmit} >
          <div className="col">
            <div className={`login_box__input-box ${loginBoxIsSelect}`} onClick={this.clickLoginBox}>
              <div className='login_box__input-box-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className='login_box__input-box-input'>
                <input name="username" onChange={this.props.handleChange} placeholder={this.props.email_hint} value={this.props.username}></input>
              </div>
              <div className='login_box__input-box-line'>
              </div>
              <div className='login_box__input-box-extra'>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`login_box__input-box ${passwordBoxIsSelect}`} onClick={this.clickPasswordBox}>
              <div className='login_box__input-box-icon'>
                <FontAwesomeIcon icon={faKey} />
              </div>
              <div className='login_box__input-box-input'>
                <input name="password" onChange={this.props.handleChange} placeholder={this.props.password_hint} value={this.props.password}></input>
              </div>
              <div className='login_box__input-box-line'>
              </div>
              <div className='login_box__input-box-extra'>
                <p> {this.props.password_extra} </p>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default LoginBox