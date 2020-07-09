import React, { Component } from 'react'
import LifecycleMountingChildren from './LifecycleMountingChildren';

class LifecycleMounting extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Frizio'
    }
    console.log('Parent constructor method called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Parent getDerivedStateFromProps method called');
    return null;
  }

  render() {
    console.log('Parent render method called');
    return (
      <div>
        <h2>Demo Mounting Lifecycle methods</h2>
        <h2>Parent component</h2>
        <LifecycleMountingChildren/>
      </div>
    )
  }

  componentDidMount() {
    console.log('Parent componentDidMount method called');
  }

}

export default LifecycleMounting