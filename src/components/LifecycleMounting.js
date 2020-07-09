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

  shouldComponentUpdate() {
    console.log('Parent shouldComponentUpdate method called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Parent getSnapshotBeforeUpdate method called');
    return null;
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate method called');
  }

  changeTheState = () => {
    this.setState(
      { name: 'Maria' }
    );
  }

  render() {
    console.log('Parent render method called');
    return (
      <div>
        <h2>Demo Mounting Lifecycle methods</h2>
        <h2>Parent component</h2>
        <button onClick={this.changeTheState}>Change parent state</button>
        <LifecycleMountingChildren/>
      </div>
    )
  }

  componentDidMount() {
    console.log('Parent componentDidMount method called');
  }

}

export default LifecycleMounting