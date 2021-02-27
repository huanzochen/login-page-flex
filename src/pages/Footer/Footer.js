import React from 'react'
import { footerObj } from './Data.js'
import './Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="footer">
          <img src={footerObj.icon} className="footer__svg-wrapper"></img>
        </div>
      </>
    )
  }
}

export default Footer