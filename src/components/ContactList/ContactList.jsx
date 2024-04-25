import { createSelector } from 'reselect';
import Contact from '../Contact/Contact'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import css from './ContactList.module.css'

export default function ContactList() {
  const dispatch = useDispatch();
  const selectContacts = state => state.contacts.items;
  const selectFilterName = state => state.filters.name.toLowerCase().trim();

  const filteredContactsSelector = createSelector(
    [selectContacts, selectFilterName],
    (contacts, filterName) => {
      return contacts.filter(item =>
        item.name.toLowerCase().trim().includes(filterName)
      );
    }
  );

  const contacts = useSelector(filteredContactsSelector);

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