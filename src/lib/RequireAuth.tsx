import { useEffect, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsAuthenticated } from 'react-auth-kit'

type RequireAuthProps = {
  loginPath: string
}

const RequireAuth = ({ loginPath, children }:PropsWithChildren<RequireAuthProps>) => {
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    const authenticated = isAuthenticated()

    if (!authenticated) {
      navigate(loginPath)
    }
  }, [navigate, isAuthenticated, loginPath])

  return children
}

export default RequireAuth
