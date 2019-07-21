import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

const App = () => {

  const [ countries, setCountries] = useState([]) 
  const [ searchText, setSearchText ] = useState('')
  const [ cityWeather, setCityWeather] = useState([])

  const APIXU_KEY = '9243f70408aa4396a1f153032191507'

  const countriesToShow = countries.filter(country => country.name.search(new RegExp(searchText, 'i')) >= 0)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const showCountriesWith = (event) => {
    setSearchText(event.target.value)
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  const setWeather = (city) => {
    axios.get(`http://api.apixu.com/v1/current.json?key=${APIXU_KEY}&q=${city}`)
          .then(response => response.data)
          .then(data => setCityWeather([data.current.temp_c, data.current.condition.icon, data.current.wind_kph, data.current.wind_dir]))
    return cityWeather
  }

  return (
    <div>
      <Filter search={showCountriesWith} />
      {countriesToShow.length === 1 ? 
        <CountryDetails country={countriesToShow[0]} weather={setWeather(countriesToShow[0].capital)} /> : 
        countriesToShow.length > 10 ? 
          "Too many countries, specify another filter" : 
          <ul style={{listStyle:'none'}}><Countries countries={countriesToShow} setCountries={setCountries}/></ul>}
    </div>
  )
}

export default App