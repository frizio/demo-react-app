import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stylesheet primary={true} />
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
        {/* <Greet name='Al' heroName='Batman'/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Hello/> */}
        {/* <Welcome name='Dave' heroName='Jocker'/> */}
        {/*
        <Welcome name='Ed' heroName='Two Face'/>
        <Welcome name='Fran' heroName='Catwoman'e/>
        */}
        {/*
        <Greet name='Al' heroName='Batman'>
          <p>This is a child props/component</p>
        </Greet>
        <Greet name='Bob' heroName='Robin'>
          <button>To Do</button>
        </Greet>
        <Greet name='Carl' heroName='Alfred' />
        */}
      </div>
    );
  }
}

export default App;
