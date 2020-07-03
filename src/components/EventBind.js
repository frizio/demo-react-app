import React, { Component } from 'react'

class EventBind extends Component {

  //snippet rconst:.
  constructor(props) {
    super(props)
    this.state = {
       message: 'Hello...!'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  

  clickHandler() {
    console.log('Handler binded.');
    console.log(this);
    this.setState({
      message: '...Goodbye!'
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default EventBind
