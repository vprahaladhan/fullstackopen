import React from 'react'

const CountryDetails = ({country}) => {

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
  </div>
  )
}

export default CountryDetails