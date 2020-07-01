import React, { Component } from 'react';

class Message extends Component {
  render() {
    console.log(this.props);
    return <h3>Welcome friend!</h3>
  }
}

export default Message
