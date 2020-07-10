import React from 'react'

function MemoComponentDemo({name}) {
  console.log('Render MemoComponent');
  return (
    <div>
      <h2>Memo Component {name}</h2>
    </div>
  )
}

export default React.memo(MemoComponentDemo)
