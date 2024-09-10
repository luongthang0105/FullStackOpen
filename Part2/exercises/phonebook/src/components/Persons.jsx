const Persons = ({ persons, stringToFilter }) => {
  const displayedPeople = persons.filter((person) => {
    return (
      stringToFilter === "" ||
      person.name.toLowerCase().search(stringToFilter.toLowerCase()) !== -1
    )
  })

  return displayedPeople.map((person) => (
    <p key={person.id}>
      {person.name} {person.number}
    </p>
  ))
}

export default Persons
