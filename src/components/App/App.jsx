import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import Layout from '../Layout/Layout'
import { useSelector } from 'react-redux'
import css from '../App/App.module.css'

function App() {
  const users = useSelector(state => state.contacts.items);

  return (
    <Layout>
      <section className={css.phonebook}>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        <div className={css.container}>
          <h2>Contacts</h2>
          {!users.length ? (
            <h3>Your phonebook is empty. Add your first contact</h3>
          ) : (
            <>
              <h3>Your phonebook has {users.length} contacts</h3>
              <SearchBox />
              <ContactList />
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default App
