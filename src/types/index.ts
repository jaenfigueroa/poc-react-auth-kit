export interface User {
  name: string
  age: number
  lastname: string
  email: string
  avatar: string
}

export interface LoginProps {
  email: string
  password: string
}

export interface LoginResponse {
  data: {
    token: string
    expiresIn: number
    authUserState: User
  };
}

