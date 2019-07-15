import React from 'react'

const Persons = ({filteredNames}) => {

  const names = () => filteredNames.map(person => <li key={person.id}>Name: {person.name} Phone#: {person.number}</li>)

  return (
    <ol>
      {names()}
    </ol>
  )
}

export default Persons