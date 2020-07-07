import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome frizio!</div>
    } else {
      return <div>Welcome guest!</div>
    }
  }
}

export default UserGreeting
