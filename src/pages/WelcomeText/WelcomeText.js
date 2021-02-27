import React from 'react'
import { welcomeTextObj } from './Data'
import './WelcomeText.css'

class WelcomeText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="welcome_text__section">  
        <div className="container">
          <div className="welcome_text__hero-row">
            <div className="col">
              <div className="welcome_text__text-wrapper">
                <p>{welcomeTextObj.title}</p>
              </div>
            </div>
            <div className="col">
              <div className="welcome_text__text-wrapper">
                <p>{welcomeTextObj.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default WelcomeText