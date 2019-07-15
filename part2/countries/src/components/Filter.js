import React from 'react'

const Filter = ({search}) => {

  return (
    <div>
      Find countries <input placeholder="Type text to search..." onChange={search}/><br/>
    </div>
  )
}

export default Filter