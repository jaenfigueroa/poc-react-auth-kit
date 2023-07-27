import styles from '../styles/card.module.css'
import {useAuthUser} from 'react-auth-kit'

const Admin = () => {
  const auth = useAuthUser()

  return (
    <main>
      Pagina Admin

      {/* CARD QUE SOLO SE ENCARGA DE MOSTRAR LA INFORMACION */}
      <article className={styles.card}>
        <p><span className={styles.label}>Nombre</span>: {auth()?.name}</p>
        <p><span className={styles.label}>Correo</span>: {auth()?.email}</p>
      </article>
    </main>
  )
}

export default Admin