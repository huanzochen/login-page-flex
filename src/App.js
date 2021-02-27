import React from 'react'
import Banner from './pages/Banner/Banner'
import AccountTypes from './pages/AccountTypes/AccountTypes'
import WelcomeText from './pages/WelcomeText/WelcomeText'
import Login from './pages/Login/Login'
import Footer from './pages/Footer/Footer'
import './styles.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type:''
    }
    this.changeAccountType = this.changeAccountType.bind(this)
  }

  changeAccountType(selectedTypeName) {
    this.setState({ type:selectedTypeName.toLowerCase() })
  }

  render() {
    return (
      <div>
        <Banner></Banner>
        <AccountTypes
          changeAccountType={this.changeAccountType}
        ></AccountTypes>
        <WelcomeText
          type={this.state.type}
        ></WelcomeText>
        <Login></Login>
        <Footer></Footer>
      </div>
    )
  }
}


export default App

