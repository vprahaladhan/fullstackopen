import React from 'react'

const Note = ({ note, toggleImportance }) => {

  return (
    // <table key={note.id}>  
    //   <tbody key={note.id}>
    //       <tr key={note.id}>
    //         <td style={{width: '75%'}}>{note.content}</td> 
    //         <td style={{width: '25%'}}>
    //           <button value={note.id} onClick={toggleImportance}>
    //             Make {note.important ? "not" : ""} important
    //           </button>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    <li>
      {note.content}&nbsp;&nbsp;
      <button value={note.id} onClick={toggleImportance}>Make {note.important ? "not" : ""} important</button>
    </li>
  )
}

export default Note