import React, { Component } from 'react'
import ChildComponent from './ChildrenComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'John the Parent'
    }
  }
  
  greetParent = ()=> {
    alert(`Hello from ${this.state.parentName}`);
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
