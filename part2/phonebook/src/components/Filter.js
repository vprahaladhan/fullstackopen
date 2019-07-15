import React from 'react'

const Filter = ({search}) => {

  return (
    <div>
      filter shown with <input placeholder="Type text to search..." onChange={search}/><br/>
    </div>
  )
}

export default Filter