import { configureStore } from '@reduxjs/toolkit';
import docs from './docs/slice';
import users from './users/slice';

const store = configureStore({
  reducer: {
    docs,
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
