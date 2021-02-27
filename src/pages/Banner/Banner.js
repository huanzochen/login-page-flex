import React from 'react'
import { bannerObj } from './Data'
import './Banner.css'

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="banner">
        <h1 className='heading'>
          {bannerObj.headLine}
        </h1>
      </div>
    )
  }
}

export default Banner