import React, { Component } from 'react'
import ChildComponent from './ChildrenComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Jerry the Parent'
    }
  }
  
  greetParent = (name)=> {
    alert(`Hello from ${this.state.parentName}. The child is ${name}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
