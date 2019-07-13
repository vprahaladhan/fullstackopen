import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '99300224' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ phoneno, setPhoneNo ] = useState('')

  const names = () => persons.map(person => <li key={person.name}>{person.name} {person.phone}</li>)

  const addNameToPhonebook = (event) => {
    event.preventDefault()
    persons.every(person => !person.name.includes(newName)) ? 
      setPersons(persons.concat({name: newName, phone: phoneno})) : alert(`'${newName}' already exists in the phone book`)
    setNewName('')
    setPhoneNo('')
  } 

  const setName = (event) => setNewName(event.target.value)

  const setPhoneNumber = (event) => setPhoneNo(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameToPhonebook}>
        <div>
          name: <input value={newName} onChange={setName}/><br/>
          phone: <input value={phoneno} onChange={setPhoneNumber}/>
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