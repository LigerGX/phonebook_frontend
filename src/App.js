import { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personsService from './services/personsService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const displayNotification = (message, error=false) => {
    setNotification({ message, error })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      {notification && <Notification notification={notification} />}
      <Filter 
        persons={persons} 
        search={search} 
        setSearch={setSearch} 
      />
      <AddPerson 
        persons={persons} 
        setPersons={setPersons}
        displayNotification={displayNotification}
      />
      <Persons 
        persons={persons} 
        search={search} 
        setPersons={setPersons}
        displayNotification={displayNotification}
      />
    </div>
  )
}

export default App