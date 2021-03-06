import { createSlice } from '@reduxjs/toolkit';
import {
  loginFacebook,
  loginLocal,
  logout,
  refreshToken,
  setUsername,
} from './actions';
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from 'utils/actions';

export interface AuthState {
  username: string;
  isAuthenticated: boolean;
  isPending: boolean;
  isRefreshed: boolean;
}

const initialState: AuthState = {
  username: '',
  isAuthenticated: false,
  isPending: false,
  isRefreshed: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(refreshToken.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.isRefreshed = true;
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.isRefreshed = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
    });
    builder.addCase(loginFacebook.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
    builder.addCase(loginLocal.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
    builder.addCase(setUsername, (state, action) => {
      state.username = action.payload;
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
