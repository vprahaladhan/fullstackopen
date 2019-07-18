import React from 'react'

const Persons = ({filteredNames, deletePhonebookEntry}) => {

  const names = () => filteredNames.map(
    person => <li key={person.id}>
                Name: {person.name} Phone#: {person.number}&nbsp;&nbsp;
                <button value={person.id} onClick={deletePhonebookEntry}>delete</button>
              </li>
  )

  return (
    <ol>
      {names()}
    </ol>
  )
}

export default Persons