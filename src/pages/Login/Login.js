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
    const usernameArray = Array.from(username)
    const passwordArray = Array.from(password)
    if (usernameArray.length < 6 || passwordArray.length < 6) alert('帳號密碼長度不足!')
    else {
      for (let i = 0; i <= usernameArray.length - 6; i++) {
        const userValidate = usernameArray.slice(i, i + 6).join('')
        for (let k = 0; k <= passwordArray.length - 6; k++) {
          const passwordValidate = passwordArray.slice(k, k + 6).join('')
          if (userValidate === passwordValidate) {
            alert('不通過')
            return
          }
        }
      }
      alert('通過')
    }
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