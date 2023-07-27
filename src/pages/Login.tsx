import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/login.module.css'

const Login = () => {
  const navigate = useNavigate()
  const signIn = useSignIn()

  const onSubmit = () => {
    //...

    // Llamar a tu función de inicio de sesión (login) aquí
    // const res = await login(email, password);

    if (
      signIn({
        token: 'token-de-prueba-del-servidor', //res.data.token // El token de autenticación (JWT) que se almacenará desde el servidor
        tokenType: 'Bearer', // El tipo de token de autenticación.
        expiresIn: 1,//res.data.expiresIn //El tiempo que durará el token de autenticación, en minutos
        authState: {name: 'Jaen', email: 'jaenfigueroa@gmail.com'}, //res.data.authUserState //Estado del usuario autorizado

        // refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
        // refreshTokenExpireIn: res.data.refreshTokenExpireIn     // Only if you are using refreshToken feature
      })
    ) {
      // Redirigir o hacer algo
      console.log('rederigido a la ruta con acceso')
      navigate('/admin')
    }else {
      //Lanzar error
      console.log('error, no autenticado correctamente')
    }
  }

  return (
    <main className={styles.login}>
      Pagina Login

      <button onClick={onSubmit}>
        Iniciar sesion
      </button>
    </main>
  )
}

export default Login