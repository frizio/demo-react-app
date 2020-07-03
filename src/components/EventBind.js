import React, { Component } from 'react'

class EventBind extends Component {

  //snippet rconst:.
  constructor(props) {
    super(props)
    this.state = {
       message: 'Hello...!'
    }
  }
  

  clickHandler() {
    console.log('Create a state props messagge, bind it to ui and change them with event handler.');
    console.log(this);
    console.log('this is undefined. -> Binding event handling')
    /*
    this.setState({
      message: '...Goodbye!'
    });
    */
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
