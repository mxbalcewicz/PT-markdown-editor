import http from 'api/http';
import { ILoginLocalPayload, IRegisterPayload } from 'types/auth';

export interface IAuthResponse {
  accessToken: {
    token: string;
    expiresIn: number;
  };
}

export const loginFacebook = async (
  facebookAccessToken: string,
): Promise<IAuthResponse> => {
  const { data } = await http.post(
    `/auth/login`,
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

export const register = async (payload: IRegisterPayload): Promise<boolean> => {
  try {
    await http.post(`/auth/register`, payload);
    return true;
  } catch {
    return false;
  }
};

export const logout = async (): Promise<boolean> => {
  await http.post('/auth/logout');
  return true;
};

export const refreshToken = async (): Promise<IAuthResponse> => {
  const { data } = await http.post('/auth/refresh');
  return data;
};
