import { LoginResponse } from '../types'

const fetchLogin = async():Promise<LoginResponse> => {
  try {
    const response = await fetch('http://www.server.com/api/user', {
      method: 'POST',
    })
    return response.json()

  } catch (error) {
    throw new Error('Error en la petición al server')
  }
}

export default fetchLogin