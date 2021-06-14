import * as authService from 'api/services/auth.service';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeaders } from 'api/http';
import { getExpireTimeWithOffset } from 'utils/jwt';
import { AppDispatch, RootState } from 'store';
import {
  IAuthResponse,
  ILoginLocalPayload,
  IRegisterPayload,
  ITokenPayload,
} from 'types/auth';
import jwtDecode from 'jwt-decode';

export const setUsername = createAction<string>('auth/setUsername');

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

const login = (
  result: IAuthResponse,
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  const { token, expiresIn } = result.accessToken;
  const { username }: ITokenPayload = jwtDecode(token);

  dispatch(setUsername(username));
  setAuthHeaders(token);
  delayRefresh(expiresIn, dispatch, getState as () => RootState);

  return result;
};

export const loginFacebook = createAsyncThunk(
  'auth/login/facebook',
  async (hash: string, { dispatch, getState }) => {
    const result = await authService.loginFacebook(hash);
    return login(result, dispatch, getState as () => RootState);
  },
);

export const loginLocal = createAsyncThunk(
  'auth/login/local',
  async (payload: ILoginLocalPayload, { dispatch, getState }) => {
    const result = await authService.loginLocal(payload);
    return login(result, dispatch, getState as () => RootState);
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload: IRegisterPayload) => {
    const result = await authService.register(payload);
    setAuthHeaders('');

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
    return login(result, dispatch, getState as () => RootState);
  },
);
