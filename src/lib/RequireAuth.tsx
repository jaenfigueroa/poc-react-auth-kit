import { PropsWithChildren, useEffect, useState } from 'react'
import { useIsAuthenticated } from 'react-auth-kit'
import { Navigate, useNavigate } from 'react-router-dom'

type RequireAuthProps = {
  loginPath: string
}

const RequireAuth = ({ loginPath, children }:PropsWithChildren<RequireAuthProps>) => {
  const isAuthenticated = useIsAuthenticated()
  const [authChecked, setAuthChecked] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const authenticated = isAuthenticated() // Debes implementar esta función según tus necesidades.

    setAuthChecked(true)

    if (!authenticated) {
      navigate('/login')
    }
  }, [navigate, isAuthenticated])

  if (!authChecked) {
    return <div>Loading...</div>
  }

  if (isAuthenticated()) {
    return children
  }

  return <Navigate to={loginPath} />
}

export default RequireAuth
