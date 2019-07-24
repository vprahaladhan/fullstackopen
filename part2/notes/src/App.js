import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState('true')

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const rows = () => notesToShow.map(
    note => <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
    )

  useEffect(() => {
      noteService
        .getAll()
        .then(response => setNotes(response))
  }, [])

  const addNote = event => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date(),
        important: Math.random() > 0.5,
      }
    
      noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response))
        setNewNote('')
      })
  }
  
  const setNote = (event) => setNewNote(event.target.value)

  const showImportantOnly = (event) => {
    setShowAll(!showAll)
  }
 
  const toggleImportance = (noteId) => {
    const newNotes = [...notes]
    const note = newNotes.find(n => n.id === noteId)
    note.important = !note.important
    noteService
      .update(note.id, note)
      .then(response => setNotes(newNotes))
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input placeholder="Type new notes" value={newNote} onChange={setNote}/>
        <button type="submit">save</button><br/>
        <input type="checkbox" onClick={showImportantOnly}/>Show important notes only
      </form>
    </div>
  )
}

export default App 