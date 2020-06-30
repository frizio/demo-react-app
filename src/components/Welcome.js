import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    console.log(this.props);
    return <h3>Welcome from {this.props.name} aka {this.props.heroName}</h3>;
  }
}

export default Welcome
