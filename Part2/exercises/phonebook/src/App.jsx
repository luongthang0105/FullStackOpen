import { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterPrompt={filterPrompt}
        onChange={handleFilterPromptChange}
      ></Filter>

      <h3>Add a new person into our phonebook</h3>

      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      ></PersonForm>

      <h3>Numbers</h3>

      <Persons persons={persons} stringToFilter={filterPrompt}></Persons>
    </div>
  )
}

export default App
