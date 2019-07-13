import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const names = () => persons.map(person => <li key={person.name}>{person.name}</li>)

  const addNameToPhonebook = (event) => {
    event.preventDefault()
    persons.every(person => !person.name.includes(newName)) ? 
      setPersons(persons.concat({name: newName})) : alert(`'${newName}' already exists in the phone book`)
    setNewName('')
  } 

  const setName = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameToPhonebook}>
        <div>
          name: <input value={newName} onChange={setName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {names()}
      </ul>
    </div>
  )
}

export default App