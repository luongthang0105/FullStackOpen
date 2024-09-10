import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <div>debug {newName}</div>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  )
}

export default App
