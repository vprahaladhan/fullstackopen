import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PhonebookService from './services/PhonebookService'
import axios from 'axios'

const App = () => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ phoneno, setPhoneNo ] = useState('')
  const [ searchText, setSearchText ] = useState('')

  const namesToShow = persons.filter(person => person.name.search(new RegExp(searchText, 'i')) >= 0)
  
  const postToServer = (name, number, id) => {
    PhonebookService
      .addEntryToPhonebook({name, number, id})
      .then(response => {
        PhonebookService.fetchPhonebookEntries()
          .then(response => {
            console.log(response)
            setPersons(response)
            }
          )
        }
      )
  }    

  const addNameToPhonebook = (event) => {
    event.preventDefault()
    persons.every(person => !person.name.includes(newName)) ? 
      postToServer(newName, phoneno, persons.length + 1) : alert(`'${newName}' already exists in the phone book`)
    setNewName('')
    setPhoneNo('')
    setSearchText('')
  } 

  const setName = (event) => setNewName(event.target.value)

  const setPhoneNumber = (event) => setPhoneNo(event.target.value)

  const showNamesWith = (event) => setSearchText(event.target.value)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={showNamesWith}/>
      <h2>add a new</h2>
      <PersonForm name={newName} phone={phoneno} addName={addNameToPhonebook} setNewName={setName} setPhone={setPhoneNumber} />
      <h2>Numbers</h2>
      <Persons filteredNames={namesToShow} />
    </div>
  )
}

export default App