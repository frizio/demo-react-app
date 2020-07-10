import React, { PureComponent } from 'react'

class PureComponentDemo extends PureComponent {
  render() {
    console.log('Pure Component rendered');
    return (
      <div>
        <h2>Pure Component Demo {this.props.name}</h2>
      </div>
    )
  }
}

export default PureComponentDemo
