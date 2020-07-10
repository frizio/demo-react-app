import React, { Component } from 'react'
import PureCompoentDemoRegularComp from './PureComponentDemoRegularComp';
import PureComponentDemo from './PureComponentDemo';

class PureComponentDemoParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'frizio'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(
        {name: 'frizio'}
      );
    }, 2000);
  }

  render() {
    console.log('********************* Parent Component rendered *********************');
    return (
      <div>
        <h2>Parent Component</h2>
        <PureCompoentDemoRegularComp name={this.state.name}/>
        <PureComponentDemo name={this.state.name} />
      </div>
    )
  }
}

export default PureComponentDemoParentComp
