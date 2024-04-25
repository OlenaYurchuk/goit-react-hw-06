import ContactForm from '../ContactForm/ContactForm'
import SearchBar from '../SearchBar/SearchBar'
import ContactList from '../ContactList/ContactList'
import Layout from '../Layout/Layout'

function App() {

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </Layout>
  )
}

export default App
