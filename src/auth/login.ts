import { LoginProps, LoginResponse } from '../types'

export const fetchLogin = async({ email,password}: LoginProps):Promise<LoginResponse> => {
  try {
    const response = await fetch('http://www.server.com/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    return response.json()

  } catch (error) {
    throw new Error('Error en la petición al server')
  }
}