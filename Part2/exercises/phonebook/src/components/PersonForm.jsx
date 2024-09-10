const PersonForm = ({
  onSubmit,
  newName,
  onNameChange,
  newNumber,
  onNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input
          placeholder="gimme a name"
          value={newName}
          onChange={onNameChange}
        />
      </div>
      <div>
        number:{" "}
        <input
          placeholder="gimme a number"
          value={newNumber}
          onChange={onNumberChange}
        ></input>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
