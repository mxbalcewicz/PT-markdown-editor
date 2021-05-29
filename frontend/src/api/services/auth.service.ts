import http from 'api/http';

export interface IAuthResponse {
  accessToken: {
    token: string;
    expiresIn: number;
  };
}

export const login = async (
  facebookAccessToken: string,
): Promise<IAuthResponse> => {
  const { data } = await http.post(
    `/auth/login`,
    {},
    { headers: { Authorization: `Bearer ${facebookAccessToken}` } },
  );
  return data;
};

export const logout = async (): Promise<boolean> => {
  await http.post('/auth/logout');
  return true;
};

export const refreshToken = async (): Promise<IAuthResponse> => {
  const { data } = await http.post('/auth/refresh');
  return data;
};
