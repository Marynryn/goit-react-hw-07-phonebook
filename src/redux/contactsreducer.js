import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operations';
// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });
// const loading = createReducer([], {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });
// const error = createReducer([], {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });

// export default combineReducers({ items, loading, error });

const mySlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = mySlice.reducer;
// export const { deleteContact, addContact, addFilter } = mySlice.actions;
