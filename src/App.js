import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name='Al' heroName='Batman' />
        <Greet name='Bob' heroName='Robin' />
        <Greet name='Carl' heroName='Alfred' />
        {/*<Welcome/>*/}
        {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
