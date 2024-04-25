import ContactForm from '../ContactForm/ContactForm'
import SearchBar from '../SearchBar/SearchBar'
import ContactList from '../ContactList/ContactList'
import Layout from '../Layout/Layout'
import initialContacts from '../../data/contacts.json'
import { useState, useEffect } from 'react'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return initialContacts
  })
  const [searchItem, setSearchItem] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId)
    })
  }

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  }, [contacts])

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBar value={searchItem} onSearch={setSearchItem} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </Layout>
  )
}

export default App
