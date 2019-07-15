import React from 'react'

const Countries = ({countries, setCountries}) => {

  const countriesList = () => countries.map(
    country => 
      // <li key={country.name}> 
      <table key={country.name}>  
        <tbody key={country.name}>
          <tr key={country.name}>
            <td style={{width: '75%'}}>{country.name}</td> 
            <td style={{width: '25%'}}><button onClick={() => {setCountries([country])}}>show</button></td>
          </tr>
        </tbody>
      </table>
      // </li>
    )

  return (      
    <div>
      {countriesList()}
    </div>
  )
}

export default Countries