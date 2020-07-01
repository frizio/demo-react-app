import React, { Component } from 'react';

class Message extends Component {

  constructor() {
    super();
    this.state = {
      message: 'Welcome amigo'
    }
  }

  render() {
    console.log(this.props);
  return <h3>{this.state.message}!</h3>
  }
}

export default Message
