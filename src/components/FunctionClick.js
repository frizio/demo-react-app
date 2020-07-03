import React from 'react'

function FunctionClick() {

  function clickHandler() {
    console.log('Click event handled by function component');
  }

  return (
    <div>
      <button onClick={clickHandler}>Click me with function component</button>
    </div>
  )

}

export default FunctionClick
