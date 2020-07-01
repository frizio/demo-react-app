import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const {name, heroName} = this.props;
    //const {state1, state2} = this.state;
    return <h3>Welcome from {name} aka {heroName}</h3>;
  }
}

export default Welcome
