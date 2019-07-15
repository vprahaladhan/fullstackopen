import React from 'react'

const Persons = ({filteredNames}) => {

  const names = () => filteredNames.map(person => <li key={person.name}>Name: {person.name} Phone#: {person.phone}</li>)

  return (
    <ul>
      {names()}
    </ul>
  )
}

export default Persons