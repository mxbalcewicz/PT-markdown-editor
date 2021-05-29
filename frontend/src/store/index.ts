import { configureStore } from '@reduxjs/toolkit';

import docs from './docs/slice';
import users from './users/slice';
import auth from './auth/slice';

const store = configureStore({
  reducer: {
    docs,
    users,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
