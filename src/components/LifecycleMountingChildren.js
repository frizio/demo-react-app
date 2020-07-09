import React, { Component } from 'react'

class LifecycleMountingChildren extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Frizio'
    }
    console.log('Children constructor method called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Children getDerivedStateFromProps method called');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Children shouldComponentUpdate method called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Children getSnapshotBeforeUpdate method called');
    return null;
  }

  componentDidUpdate() {
    console.log('Children componentDidUpdate method called');
  }

  render() {
    console.log('Children render method called');
    return (
      <div>
        <h2>Children component</h2>
      </div>
    )
  }

  componentDidMount() {
    console.log('Children componentDidMount method called');
  }

}

export default LifecycleMountingChildren