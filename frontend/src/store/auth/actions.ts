import * as authService from '../../api/services/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeaders } from '../../api/http';
import { getExpireTimeWithOffset } from '../../utils/jwt';
import { AppDispatch, RootState } from '../index';

const delayRefresh = (
  expiresIn: number,
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  setTimeout(() => {
    const { auth } = getState();

    if (auth.isAuthenticated) {
      dispatch(refreshToken());
    }
  }, getExpireTimeWithOffset(expiresIn));
};

export const login = createAsyncThunk(
  'auth/login',
  async (hash: string, { dispatch, getState }) => {
    const result = await authService.login(hash);
    const { token, expiresIn } = result.accessToken;

    setAuthHeaders(token);
    delayRefresh(expiresIn, dispatch, getState as () => RootState);

    return result;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const result = await authService.logout();
  setAuthHeaders('');

  return result;
});

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (data, { dispatch, getState }) => {
    const result = await authService.refreshToken();
    const { token, expiresIn } = result.accessToken;

    setAuthHeaders(token);
    delayRefresh(expiresIn, dispatch, getState as () => RootState);

    return result;
  },
);
