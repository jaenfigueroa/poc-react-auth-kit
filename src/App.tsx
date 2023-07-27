import './App.css'
import { AppRoutes } from './routes/AppRouter'
import { AuthProvider } from 'react-auth-kit'
import mock from './server/mock'
mock()

function App() {
  return (
    <AuthProvider
      authType='localstorage'
      authName='_auth'
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <AppRoutes/>
    </AuthProvider>
  )
}

export default App
