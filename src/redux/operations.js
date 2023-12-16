import * as contactsList from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await contactsList.fetchContacts();
      console.log(contacts);
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
