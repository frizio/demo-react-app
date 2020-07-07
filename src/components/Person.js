import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>
        I'm {person.name}. I have {person.age} yo. My skill is {person.skill}.
      </h2>
    </div>
  )
}

export default Person
