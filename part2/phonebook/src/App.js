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

  const fetchAllEntries = () =>         
    PhonebookService.fetchPhonebookEntries()
      .then(response =>  setPersons(response))
  
  const addNameToPhonebook = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name == newName) 
    person == null ? 
      postToServer(newName, phoneno) : updatePhonebookEntry({...person, number: phoneno})
  } 

  const postToServer = (name, number) => {
    PhonebookService
      .addEntryToPhonebook({name, number})
      .then(response => fetchAllEntries())
    blankAllInputFields()
  }

  const deleteEntry = (event) => {
    const person = persons.find(person => person.id.toString() === event.target.value)
    if (window.confirm(`Do you want to delete ${person.name}?`)) { 
      PhonebookService
        .deletePhonebookEntry(person.id)
        .then(response => {
          window.alert(`${person.name} successfully deleted!`)
          fetchAllEntries()
        })
      }
  }

  const updatePhonebookEntry = (person) => {
    if (window.confirm(`${person.name} is already added to phonebook, replace old number with new one?`)) { 
      PhonebookService
        .updatePhonebookEntry(person)
        .then(response => fetchAllEntries())
      blankAllInputFields()
    }
  }

  const blankAllInputFields = () => {
    setNewName('')
    setPhoneNo('')
    setSearchText('')
  }

  const setName = (event) => setNewName(event.target.value)

  const setPhoneNumber = (event) => setPhoneNo(event.target.value)

  const showNamesWith = (event) => setSearchText(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={showNamesWith}/>
      <h2>add a new</h2>
      <PersonForm name={newName} phone={phoneno} addName={addNameToPhonebook} setNewName={setName} setPhone={setPhoneNumber} />
      <h2>Numbers</h2>
      <Persons filteredNames={namesToShow} deletePhonebookEntry={deleteEntry} />
    </div>
  )
}

export default App