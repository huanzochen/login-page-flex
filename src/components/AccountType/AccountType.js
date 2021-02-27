import React from 'react'
import './AccountType.css'

class AccountType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="acccount_type__box">
            <div className="acccount_type__img-wrapper">
              {/* <img 
                src={this.props.icon} 
                alt={this.props.typeName}
                className="acccount_type__img"></img>  */}
              <svg className="acccount_type__img"
              ><polygon src={this.props.icon} ></polygon>
              </svg>
            </div>
            {this.props.typeName}
          </div>
        </div>
      </>
    )
  }
}

export default AccountType