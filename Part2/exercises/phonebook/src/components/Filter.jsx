const Filter = ({ filterPrompt, onChange }) => {
  return (
    <div>
      filter shown with:{" "}
      <input
        placeholder="gimme sth to filter"
        value={filterPrompt}
        onChange={onChange}
      ></input>
    </div>
  )
}

export default Filter
