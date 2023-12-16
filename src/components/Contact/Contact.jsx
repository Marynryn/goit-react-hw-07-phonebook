import css from '../Contact/Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

import { useEffect } from 'react';
import { selectGetContacts, selectGetFilter } from '../../redux/selectors';
const Contact = () => {
  const contacts = useSelector(selectGetContacts);
  const myFilter = useSelector(selectGetFilter);
  const dispatch = useDispatch();
  console.log(contacts)
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };

  // const visibleContacts = () => {
  //   const normalizeFilter = myFilter.toLowerCase()
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
  // }
  // const filterName = visibleContacts();
  return (
    <ul className={css.list}>
      {contacts.map((contact, createAt) => (
        <li key={createAt} className={css.contact}>
          {contact.name}: {formatNumber(contact.phone)}{' '}
          <button
            type="button"
            className={css.button_delete}
          // onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
};
export default Contact;
