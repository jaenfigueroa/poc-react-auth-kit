import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main>
      Pagina NotFound

      <Link to='/'>
        <button>Ir al inicio</button>
      </Link>
    </main>
  )
}

export default NotFound