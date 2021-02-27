import React from 'react'
import LoginBox from '../../components/Login/LoginBox'
import LoginCheck from '../../components/Login/LoginCheck'
import { loginBoxTextObj, loginCheckTextObj } from './Data.js'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>  
        <LoginBox
          {...loginBoxTextObj}
        ></LoginBox>
        <LoginCheck
          {...loginCheckTextObj}
        ></LoginCheck>
      </>
    )
  }
}

export default Login