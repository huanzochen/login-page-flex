import React from 'react'
import './AccountType.css'

class AccountType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClick: false
    }
    this.clickType = this.clickType.bind(this)
  }

  clickType() {
    this.props.changeAccountType(this.props.typeName)
    this.setState({ isClick: !this.state.isClick })
  }

  render() {
    const typeIsSelect = this.state.isClick ? 'lightred' : ''
    return (
      <>
        <div className="row">
          <div className={`acccount_type__box ${typeIsSelect}`} onClick={this.clickType}>
            <div className="acccount_type__img-wrapper" >
              <img 
                src={this.props.icon} 
                alt={this.props.typeName}
                className="acccount_type__img"></img> 
            </div>
            <div className="acccount_type__text-wrapper">
              {this.props.typeName}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AccountType