import Contact from '../Contact/Contact';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const useFilteredContacts = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filters.name.toLowerCase().trim());

  const filteredContacts = useMemo(() => {
    return contacts.filter((item) => item.name.toLowerCase().trim().includes(filterName));
  }, [contacts, filterName]);

  return filteredContacts;
}

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useFilteredContacts();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  )
}