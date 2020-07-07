import React from 'react'
import Person from './Person';

function NameList() {

  const persons = [
    {id: 1, name: 'Al', age: '28', skill: 'Angular'},
    {id: 2, name: 'Bob', age: '30', skill: 'React'},
    {id: 3, name: 'Carl', age: '18', skill: 'Vue'},
  ];

  const personList = persons.map(person => ( <Person key={person.name} person={person}/> ) );

  const names = ['Al', 'Bob', 'Carl', 'Al'];
const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);


  return (
    <div>
      { nameList }
    </div>
  )
}

export default NameList
