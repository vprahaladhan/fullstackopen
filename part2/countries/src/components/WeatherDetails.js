import React from 'react'

const CountryDetails = ({temperature, icon, wind, direction}) => {
 
  return (
    <div>
      <div><b>temperature: </b><>{temperature} Celsius</></div>
      <img src={icon} alt="Weather details" height="60" width="60"/>
      <div><b>wind: </b>{wind} kph direction {direction}</div>
    </div>
  )
}

export default CountryDetails