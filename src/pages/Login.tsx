import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
import fetchLogin from '../auth/fetchLogin'
import stylesLogin from '../styles/login.module.css'
import stylesForm from '../styles/form.module.css'

const Login = () => {
  const navigate = useNavigate()
  const signIn = useSignIn()

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí se debe hacer la petición al servidor para autenticar al usuario
    // enviar el correo y la contraseña, asi recibir el token de autenticación y demas data que usara react-auth-kit
    const { data } = await fetchLogin()

    // react-auth-kit almacena el token de autenticación y demas data en localStorage
    const isUserLoged = signIn({
      token: data.token, // El token de autenticación (JWT) que se almacenará desde el servidor
      tokenType: 'Bearer', // El tipo de token de autenticación.
      expiresIn: data.expiresIn, //El tiempo que durará el token de autenticación, en minutos
      authState: data.authUserState , //Estado del usuario autorizado
    })

    // Si el usuario se autentica correctamente, se redirecciona a la página de administración
    // de lo contrario, se muestraria un error en el formulario de inicio de sesión
    if (isUserLoged) {
      navigate('/admin')
    }else {
      throw new Error('error, usuario no autenticado correctamente')
    }
  }

  return (
    <main className={stylesLogin.login}>
      Pagina Login

      <form className={stylesForm.form} onSubmit={onSubmit}>
        <input type='email' placeholder='Correo' />
        <input type='password' placeholder='Contraseña'/>
        <button type='submit'>Iniciar sesion</button>
      </form>

    </main>
  )
}

export default Login