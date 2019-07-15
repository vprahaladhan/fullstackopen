import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries] = useState([]) 
  const [ name, setName ] = useState('')

  // const [ capital, setCapital ] = useState('')
  // const [ population, setPopulation ] = useState('')
  // const [ languages, setLanguages ] = useState([])
  // const [ flag, setFlag ] = useState('')
  const [ searchText, setSearchText ] = useState('')

  const countriesToShow = countries.filter(country => country.name.search(new RegExp(searchText, 'i')) >= 0)
  const countriesList = () => countriesToShow.map(country => <li key={country.name}>{country.name}</li>)
  const allCountries = countriesList()

  // const setNewName = (event) => setName(event.target.value)

  // const setPhoneNumber = (event) => setPhoneNo(event.target.value)

  const showCountriesWith = (event) => setSearchText(event.target.value)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={showCountriesWith}/>
      {/* <h2>add a new</h2>
      <PersonForm name={newName} phone={phoneno} addName={addNameToPhonebook} setNewName={setName} setPhone={setPhoneNumber} /> */}
      {allCountries.length === 1 ? 
        <div>
          <h1>{countriesToShow[0].name}</h1>
          <div>
            Capital {countriesToShow[0].capital}<br/>
            Population {countriesToShow[0].population}
            <h2><p>Languages</p></h2>
            <ul>{countriesToShow[0].languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}</ul>
            <p><img src={countriesToShow[0].flag} alt={countriesToShow[0].name} height="100" width="100"/></p>
          </div>
        </div> : 
        (allCountries.length > 10 ? "Too many countries, specify another filter" : <ul style={{listStyle:'none'}}>{allCountries}</ul>)}
      {/* <Persons filteredNames={namesToShow} /> */}
    </div>
  )
}

export default App