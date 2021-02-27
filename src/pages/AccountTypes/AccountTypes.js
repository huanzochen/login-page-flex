import React from 'react'
import AccountType from '../../components/AccountType/AccountType'
import { AccountTypesObjOne, AccountTypesObjTwo } from './Data'
import './AccountTypes.css'

class AccountTypes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClick: false
    }
  }

  render() {
    return (
      <>
        <div className="acccount_types__section">  
          <div className="container">
            <div className="account_types__hero-row">
              <AccountType 
                {...AccountTypesObjOne}
                changeAccountType={this.props.changeAccountType}
              ></AccountType>
              <AccountType 
                {...AccountTypesObjTwo}
                changeAccountType={this.props.changeAccountType}
              ></AccountType>
            </div>
          </div>
        </div>  

      </>

    )
  }
}

export default AccountTypes