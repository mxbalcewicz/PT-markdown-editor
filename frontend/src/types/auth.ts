export interface IRegisterPayload {
  email: string;
  username: string;
  password: string;
}

export interface ILoginLocalPayload {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: {
    token: string;
    expiresIn: number;
  };
}

export interface ITokenPayload {
  id: string;
  username: string;
}
