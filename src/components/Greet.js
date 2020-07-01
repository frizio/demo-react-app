import React from 'react';

const Greet = (props) => {

  const {name, heroName} = props;

  return (
    <div>
      <h2>Demo <code>ReactJS</code> App with {name} aka {heroName}.</h2>
      {props.children}
    </div>
  );

}

export default Greet
