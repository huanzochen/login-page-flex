import React from 'react'
import AccountType from '../../components/AccountType/AccountType'
import { AccountTypesObjOne, AccountTypesObjTwo } from './Data'
import './AccountTypes.css'

class AccountTypes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }        

  render() {
    return (
      <>
        <div className="acccount_types__section">  
          <div className="container">
            <div className="account_types__hero-row">
              <AccountType {...AccountTypesObjOne}></AccountType>
              <AccountType {...AccountTypesObjTwo}></AccountType>
            </div>
          </div>
        </div>  

      </>

    )
  }
}

export default AccountTypes