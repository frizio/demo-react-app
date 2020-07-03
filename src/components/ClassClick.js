import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
    console.log('Click event handled by class component');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me with class component</button>
      </div>
    )
  }
}

export default ClassClick
