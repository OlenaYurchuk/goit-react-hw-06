import Contact from '../Contact/Contact';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const useFilteredContacts = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filterName = useSelector(state => state.filters.name.toLowerCase().trim());

    const filteredContacts = useMemo(() => {
      return contacts.filter(item =>
        item.name.toLowerCase().trim().includes(filterName)
      );
    }, [contacts, filterName]);

    return filteredContacts;
  };


  const contacts = useFilteredContacts();

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