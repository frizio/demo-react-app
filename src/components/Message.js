import React, { Component } from 'react';

class Message extends Component {

  constructor() {
    super();
    this.state = {
      message: 'Welcome amigo'
    }
  }

  changeMessage() {
    this.setState(
      {
        message: 'Thank you for subscribing'
      }
    );
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>{this.state.message}!</h3>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
      </div>
    );
  }

}

export default Message
