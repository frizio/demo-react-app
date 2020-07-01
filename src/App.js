import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        {/* <Message/> */}
        {/*
        <Greet name='Al' heroName='Batman'>
          <p>This is a child props/component</p>
        </Greet>
        <Greet name='Bob' heroName='Robin'>
          <button>To Do</button>
        </Greet>
        <Greet name='Carl' heroName='Alfred' />
        */}
        {/*
        <Welcome name='Dave' heroName='Jocker'/>
        <Welcome name='Ed' heroName='Two Face'/>
        <Welcome name='Fran' heroName='Catwoman'e/>
        */}

        {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
