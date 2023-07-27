import { createServer } from 'miragejs'
import { LoginResponse } from '../types'

const mock = () => {
  createServer({
    routes() {
      this.urlPrefix = 'http://www.server.com'
      this.namespace = 'api'

      this.post<LoginResponse>('/user', () => {
        return {
          data: {
            token: 'token-x-prueba-del-servidor',
            expiresIn: 1,
            authUserState: {
              name: 'Jaen',
              age: 23,
              lastname: 'Figueroa',
              email: 'jaenfigueroa@gmail.com',
              avatar: 'https://avatars.githubusercontent.com/u/69079292?v=4',
            },
          },
        }
      })
    },
  })
}

export default mock
