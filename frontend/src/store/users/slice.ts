import { createSlice } from '@reduxjs/toolkit';
import { setUsers } from './actions';

export type User = string;

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUsers, (state, action) => {
      state.users = [...action.payload];
    });
  },
});

export default usersSlice.reducer;
