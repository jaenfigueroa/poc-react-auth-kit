import {useAuthHeader} from 'react-auth-kit'

const OtroComponente = () => {
  const authHeader = useAuthHeader()

  return (
    <div>
      Otro Componente
      {authHeader()}
    </div>
  )
}

export default OtroComponente