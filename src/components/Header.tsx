import styles from '../styles/header.module.css'
import { useSignOut } from 'react-auth-kit'
import {useIsAuthenticated} from 'react-auth-kit'
import { Link } from 'react-router-dom'

const Header = () => {
  const signOut = useSignOut()
  const isAuthenticated = useIsAuthenticated()

  return (
    <header className={styles.header}>
      Header

      {
        isAuthenticated() ? (
          <button onClick={() => signOut()}>Cerrar Sesion</button>
        ) : (
          <Link to='/login'>
            <button>Iniciar Sesion</button>
          </Link>
        )
      }
    </header>
  )
}

export default Header