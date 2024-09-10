import axios from "axios"
import Note from "./components/Note"
import { useState, useEffect } from "react"

const App = (props) => {
  const [notes, setNotes] = useState([])

  // controlled components
  const [newNote, setNewNote] = useState("")

  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  useEffect(() => {
    console.log("effect")
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fullfilled")
      setNotes(response.data)
    })
  }, [])
  // console.log("render", notes.length, "notes")

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote("")
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note}></Note>
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input
          placeholder="gimme new note"
          value={newNote}
          onChange={handleNoteChange}
        ></input>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
