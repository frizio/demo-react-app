import React from 'react'

const heading = {
  fontSize: '26px',
  color: 'blue'
}

function InlineStyling() {
  return (
    <div>
      <h2 style={heading}>Demo Inline styling</h2>
      <h2 className='error'>This is an error in child component</h2>
    </div>
  )
}

export default InlineStyling
