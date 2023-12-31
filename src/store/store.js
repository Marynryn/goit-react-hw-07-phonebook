import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsreducer';

export const store = configureStore({
  reducer: contactsReducer,
});
