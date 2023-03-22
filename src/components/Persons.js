import Person from "./Person"

const Persons = ({ persons, search, setPersons, displayNotification }) => {
  const shownPersons = persons.filter(person => {
    return person.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="persons">
      <h2>Numbers</h2>

      <div>
        {shownPersons.map(person => {
          return <Person 
              key={person.id} 
              person={person} 
              persons={persons}
              setPersons={setPersons}
              displayNotification={displayNotification}
            />
        })}
      </div>
    </div>
  )
}

export default Persons