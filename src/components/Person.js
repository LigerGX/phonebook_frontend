import personsService from '../services/personsService'

const Person = ({ person, persons, setPersons, displayNotification }) => {
  const handleClick = () => {
    if (window.confirm(`Delete ${person.name}`)) {
      personsService
        .remove(person.id)
        .then(response => {
          setPersons(persons.filter(item => item.id !== person.id))
          displayNotification(`Removed ${person.name}`)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  return (
    <div>
      <p>
        {person.name} {person.number}
        <span>
          <button onClick={handleClick}>Delete</button>
        </span>
      </p>
    </div>
  )
}

export default Person