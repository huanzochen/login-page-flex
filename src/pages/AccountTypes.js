import React from 'react'
import AccountType from '../components/AccountType/AccountType'

class AccountTypes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>  
        <AccountType></AccountType>
      </div>

    )
  }
}

export default AccountTypes