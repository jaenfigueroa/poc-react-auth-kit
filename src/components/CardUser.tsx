import styles from '../styles/card.module.css'
import { User } from '../types'

const CardUser = ({name,lastname,age,email,avatar}: User) => {
  return (
    <article className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={`Avatar de ${name}`} />
      <p><span className={styles.label}>Nombre</span>: {name}</p>
      <p><span className={styles.label}>Apellido</span>: {lastname}</p>
      <p><span className={styles.label}>Edad</span>: {age}</p>
      <p><span className={styles.label}>Correo</span>: {email}</p>
    </article>
  )
}

export default CardUser