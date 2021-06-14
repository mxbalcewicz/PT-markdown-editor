import http from 'api/http';
import {
  IAuthResponse,
  ILoginLocalPayload,
  IRegisterPayload,
} from 'types/auth';

export const loginFacebook = async (
  facebookAccessToken: string,
): Promise<IAuthResponse> => {
  const { data } = await http.post(
    `/auth/login/facebook`,
    {},
    { headers: { Authorization: `Bearer ${facebookAccessToken}` } },
  );
  return data;
};

export const loginLocal = async (
  payload: ILoginLocalPayload,
): Promise<IAuthResponse> => {
  const { data } = await http.post(`/auth/login/local`, payload);
  return data;
};

export const register = async (payload: IRegisterPayload): Promise<void> => {
  await http.post(`/auth/register`, payload);
};

export const logout = async (): Promise<void> => {
  await http.post('/auth/logout');
};

export const refreshToken = async (): Promise<IAuthResponse> => {
  const { data } = await http.post('/auth/refresh');
  return data;
};
