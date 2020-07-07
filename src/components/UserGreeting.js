import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  

  render() {

    return (
      this.state.isLoggedIn ? <div>Welcome frizio!</div> : <div>Welcome guest!</div>
    )
    
  }

}

export default UserGreeting
