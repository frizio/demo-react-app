import React, { Component } from 'react'

class PureCompoentDemoRegularComp extends Component {
  render() {
    console.log('Regular Compoent rendered');
    return (
      <div>
        <h2>Regular Component {this.props.name}</h2>
      </div>
    )
  }
}

export default PureCompoentDemoRegularComp
