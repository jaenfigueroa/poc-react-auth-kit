import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const signIn = useSignIn()
  // ...

  const onSubmit = () => {
    //...

    if(signIn(
      {
        token: 'token-del-servidor', //res.data.token // El token de autenticación (JWT) que se almacenará desde el servidor
        tokenType: 'Bearer', // El tipo de token de autenticación.
        expiresIn: 1,//res.data.expiresIn //El tiempo que durará el token de autenticación, en minutos
        authState: {name: 'Jaen', email: 'jaenfigueroa@gmail.com'}, //res.data.authUserState //Estado del usuario autorizado
      },
    )){
      // Redirigir o hacer algo
      console.log('rederijido a la ruta con acceso')
      navigate('/admin')
    }else {
      //Lanzar error
      console.log('error, no autenticado correctamente')
    }
  }

  return (
    <main>
      Pagina Login

      <button onClick={onSubmit}>
        Iniciar sesion
      </button>
    </main>
  )
}

export default Login