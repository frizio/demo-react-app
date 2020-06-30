import React from 'react';

const Hello = () => {
  /*
  return (
    <div id='hello' className='dummyClass'>
      <h2>Play with JSX </h2>
    </div>
  )
  */
  return React.createElement(
    'div', 
    {id:'hello', className:'dummyClass'}, 
    React.createElement('h2', null, 'Play without JSX')
  );

}

export default Hello;
