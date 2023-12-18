import Contact from 'components/Contact/Contact';
import { selectIsLoading } from 'store/selectors';
import { useSelector } from 'react-redux';
import css from "./ListContact.module.css"


export const ListContacts = () => {
  const loading = useSelector(selectIsLoading)
  return (<ul className={css.list}>
    {loading ? <h3 style={{ fontSize: 16 }}>Loading...</h3> : <Contact />
    }</ul>)


};

