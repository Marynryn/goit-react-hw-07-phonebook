import axios from 'axios';

axios.defaults.baseURL = 'https://657aab661acd268f9afb81bc.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');

  return data;
}
export async function fetchContactsByName() {
  const { data } = await axios.get('/contacts/name.fullName');
  return data;
}
// export async function addContact() {
//   const { data } = await axios.post('/contacts/addContact');
//   return data;
// }
