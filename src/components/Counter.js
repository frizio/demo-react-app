import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  increment() {
    this.setState(
      (prevState, props) => ({
          count: prevState.count + 1
      }),
      () => {
        console.log('Callback (async) count value', this.state.count);
      }
    );
    //console.log('Sync count value:', this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
