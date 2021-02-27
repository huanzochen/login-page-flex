import React from 'react'
import LoginBox from '../../components/Login/LoginBox'
import LoginCheck from '../../components/Login/LoginCheck'
import { loginBoxTextObj, loginCheckTextObj } from './Data.js'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      password:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const { username, password } = this.state
    event.preventDefault()
  }

  render() {
    return (
      <>  
        <LoginBox
          {...loginBoxTextObj}
          handleChange={this.handleChange}
        ></LoginBox>
        <LoginCheck
          {...loginCheckTextObj}
          handleSubmit={this.handleSubmit}
        ></LoginCheck>
      </>
    )
  }
}

export default Login