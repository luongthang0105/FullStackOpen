import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterPrompt, setFilterPrompt] = useState("")

  const addPerson = (event) => {
    event.preventDefault()

    // check if name already exists
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const newPersonObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(newPersonObj))
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterPromptChange = (event) => {
    setFilterPrompt(event.target.value)
  }

  const displayedPeople = persons.filter((person) => {
    return (
      filterPrompt === "" ||
      person.name.toLowerCase().search(filterPrompt.toLowerCase()) !== -1
    )
  })

  // console.log(`${displayedPeople} ${filterPrompt}`)
  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {filterPrompt}</div> */}
      <div>
        filter shown with:{" "}
        <input
          placeholder="gimme sth to filter"
          value={filterPrompt}
          onChange={handleFilterPromptChange}
        ></input>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input
            placeholder="gimme a name"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:{" "}
          <input
            placeholder="gimme a number"
            value={newNumber}
            onChange={handleNumberChange}
          ></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {displayedPeople.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  )
}

export default App
