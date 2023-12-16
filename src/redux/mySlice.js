// import { createSlice } from '@reduxjs/toolkit';

// export const mySlice = createSlice({
//   name: 'myValue',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
//     deleteContact: (state, action) => {
//       state.contacts.items = state.contacts.items.filter(
//         el => el.id !== action.payload
//       );
//     },
//     addContact: (state, action) => {
//       state.contacts.items = [...state.contacts.items, action.payload];
//     },
//     addFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { deleteContact, addContact, addFilter } = mySlice.actions;
// export const getContacts = state => state.myValue.contacts.items;
// export const getFilter = state => state.myValue.filter;
