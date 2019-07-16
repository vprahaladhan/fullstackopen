import React from 'react'
import WeatherDetails from './WeatherDetails'

const CountryDetails = ({country, weather}) => {

  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        Capital {country.capital}<br/>
        Population {country.population}
        <h2><p>Languages</p></h2>
        <ul>{country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}</ul>
        <p><img src={country.flag} alt={country.name} height="100" width="100"/></p>
      </div>
      <div>
        <h2>Weather in {country.capital}</h2>
        <WeatherDetails 
            temperature={weather[0]} 
            icon={weather[1]} 
            wind={weather[2]} 
            direction={weather[3]} />
      </div>
    </div>
  )
}

export default CountryDetails