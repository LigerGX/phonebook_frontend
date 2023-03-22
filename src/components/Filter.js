const Filter = ({ search, setSearch }) => {
  const handleChange = event => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <p>Filter shown with <input value={search} onChange={handleChange}/></p>
    </div>
  )
}

export default Filter