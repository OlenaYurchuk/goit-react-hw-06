import Contact from '../Contact/Contact'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import css from './ContactList.module.css'

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filters.name.toLowerCase().trim())
    );
  });

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  )
}