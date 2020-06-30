import React from 'react';

const Greet = (props) => {
  console.log(props);
  return <h2>Demo <code>ReactJS</code> App with {props.name} aka {props.heroName}.</h2>;
}

export default Greet;