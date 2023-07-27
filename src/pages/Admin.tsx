import CardUser from '../components/CardUser'
import {useAuthUser} from 'react-auth-kit'

const Admin = () => {
  const auth = useAuthUser()
  const user = auth()

  return (
    <main>
      Pagina Admin

      {user && <CardUser
        name={user.name}
        lastname={user.lastname}
        age={user.age}
        email={user.email}
        avatar={user.avatar}
      />}
    </main>
  )
}

export default Admin