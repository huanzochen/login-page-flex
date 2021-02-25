import React from 'react'
import LoginBox from '../components/Login/LoginBox'
import LoginCheck from '../components/Login/LoginCheck'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>  
        <LoginBox></LoginBox>
        <LoginCheck></LoginCheck>
      </div>

    )
  }
}

export default Login