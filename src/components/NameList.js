import React from 'react'

function NameList() {

  const persons = [
    {id: 1, name: 'Al', age: '28', skill: 'Angular'},
    {id: 2, name: 'Bob', age: '30', skill: 'React'},
    {id: 3, name: 'Carl', age: '18', skill: 'Vue'},
  ];

const nameList = persons.map(person => <h2>I'm {person.name}. I have {person.age} yo. My skill is {person.skill}</h2>);

  return (
    <div>
      { nameList }
    </div>
  )
}

export default NameList
