import { useState } from "react"
import personsService from '../services/personsService'

const AddPerson = ({ persons, setPersons, displayNotification }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = event => {
    const target = event.target
    setNewName(target.value)
  }

  const handleNumber = event => {
    const target = event.target
    setNewNumber(target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const dupeCheck = persons.find(person => person.name === newName)
    if (dupeCheck) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
          .update(dupeCheck.id, { name: newName, number: newNumber })
          .then(response => {
            const updatedPersons = persons.map(item => {
              if (item.id === dupeCheck.id) {
                return response
              }
              return item
            })
            setPersons(updatedPersons)
            displayNotification(`Updated number of ${newName}`)
          })
          .catch(error => {
            console.error(error)
            setPersons(persons.filter(item => item.id !== dupeCheck.id))
            displayNotification(`Information of ${newName} has already been removed from server`, true)
          })
      }
      setNewName('')
    } else {
      personsService
        .create({ name: newName, number: newNumber })
        .then(response => {
          const personsCopy = persons.concat(response)
          setPersons(personsCopy)
          displayNotification(`Added ${newName}`)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  const updateNumber = (person) => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new</h2>
      <div>
        name: <input value={newName} onChange={handleName} required />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumber} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
  </form>
  )
}

export default AddPerson