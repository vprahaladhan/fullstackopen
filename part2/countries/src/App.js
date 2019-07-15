import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

const App = () => {

  const [ countries, setCountries] = useState([]) 
  const [ searchText, setSearchText ] = useState('')

  const countriesToShow = countries.filter(country => country.name.search(new RegExp(searchText, 'i')) >= 0)

  const showCountriesWith = (event) => {
    setSearchText(event.target.value)
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

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
      <Filter search={showCountriesWith} />
      {countriesToShow.length === 1 ? 
        <CountryDetails country={countriesToShow[0]} /> : 
        countriesToShow.length > 10 ? 
          "Too many countries, specify another filter" : 
          <ul style={{listStyle:'none'}}><Countries countries={countriesToShow} setCountries={setCountries}/></ul>}
    </div>
  )
}

export default App