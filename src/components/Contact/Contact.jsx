import css from '../Contact/Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../store/operations';
import { useEffect, useRef } from 'react';
import { selectVisibleContacts } from '../../store/selectors';

const Contact = () => {
  const render = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (render.current) {
      render.current = false;
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterName = useSelector(selectVisibleContacts);

  return (
    <>
      {filterName.map((contact, createAt) => (
        <li key={createAt} className={css.contact}>
          {contact.name}: {contact.phone}{' '}
          <button
            type="button"
            className={css.button_delete}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  )
};
export default Contact;
