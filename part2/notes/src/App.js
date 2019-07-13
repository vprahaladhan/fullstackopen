import Note from './components/Note'
import React, { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState('true')

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
    />
    )

  const addNote = (event) => {
    event.preventDefault()
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }
    setNotes(notes.concat(note))
    setNewNote('')
  }

  const setNote = (event) => setNewNote(event.target.value)

  const showImportantOnly = (event) => {
    setShowAll(!showAll)
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={setNote}/>
        <button type="submit">save</button><br/>
        <input type="checkbox" onClick={showImportantOnly}/>Show important notes only
      </form>
    </div>
  )
}

export default App 