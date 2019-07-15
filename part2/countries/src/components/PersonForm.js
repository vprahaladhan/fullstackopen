import React from 'react'

const PersonForm = ({name, phone, addName, setNewName, setPhone}) => {

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={name} onChange={setNewName}/><br/>
        phone: <input value={phone} onChange={setPhone}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div> 
    </form>

  )
}

export default PersonForm