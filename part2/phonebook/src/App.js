import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PhonebookService from './services/PhonebookService'
import Notification from './components/Notification'
import axios from 'axios'

const App = () => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ phoneno, setPhoneNo ] = useState('')
  const [ searchText, setSearchText ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ msgColor, setMsgColor ] = useState(null)

  const namesToShow = persons.filter(person => person.name.search(new RegExp(searchText, 'i')) >= 0)
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  const fetchAllEntries = () =>         
    PhonebookService.fetchPhonebookEntries()
      .then(response =>  setPersons(response))
  
  const addNameToPhonebook = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name.trim() === newName.trim()) 
    person == null ? 
      postToServer(newName, phoneno) : updatePhonebookEntry({...person, number: phoneno})
  } 

  const postToServer = (name, number) => {
    PhonebookService
      .addEntryToPhonebook({name, number})
      .then(response => {
        fetchAllEntries()
        !response.error ? 
          displayMessage(`Successfully added ${name} to phonebook`, 'green') : displayMessage(response.error, 'red')
      })
      .catch(error => displayMessage("Unknown error!", "red"))
    blankAllInputFields()
  }

  const updatePhonebookEntry = (person) => {
    if (window.confirm(`${person.name} is already added to phonebook, replace old number with new one?`)) { 
      PhonebookService
        .updatePhonebookEntry(person)
        .then(response => {
          fetchAllEntries()
          displayMessage(`Successfully updated ${person.name}'s phone num to ${person.number}`, 'green')
        })
        .catch(error => {
          displayMessage(`${error}`, 'red')
        })
      blankAllInputFields()
    }
  }

  const deleteEntry = (event) => {
    const person = persons.find(person => person.id.toString() === event.target.value)
    let msg
    if (window.confirm(`Do you want to delete ${person.name}?`)) { 
      PhonebookService
        .deletePhonebookEntry(person.id)
        .then(response => msg = `${person.name} successfully deleted from server!`)
        .catch(error => msg = `${person.name} doesn't exist on server!`)
        .finally(() => {
          displayMessage(msg, 'red')
          fetchAllEntries()
        })
    }
  }

  const displayMessage = (msg, color) => {
    setMessage(msg)
    setMsgColor(color)
    setTimeout(() => setMessage(null), 2000) 
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
      {message ? <Notification message={message} msgColor={msgColor} /> : <></>}
    </div>
  )
}

export default App