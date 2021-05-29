import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken } from './actions';
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from '../../utils/actions';

export interface AuthState {
  isAuthenticated: boolean;
  isPending: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isPending: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
    builder.addCase(refreshToken.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.isPending = true;
    });
    builder.addMatcher(isRejectedAction, (state) => {
      state.isPending = false;
    });
    builder.addMatcher(isFulfilledAction, (state) => {
      state.isPending = false;
    });
  },
});

export default authSlice.reducer;
