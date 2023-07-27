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
    const res = await fetchLogin({ email: 'jaenfigueroa@gmail.com', password: 'password_12345' })

    if (
      signIn({
        token: res.data.token, // El token de autenticación (JWT) que se almacenará desde el servidor
        tokenType: 'Bearer', // El tipo de token de autenticación.
        expiresIn: res.data.expiresIn, //El tiempo que durará el token de autenticación, en minutos
        authState: res.data.authUserState , //Estado del usuario autorizado
      })
    ) {
      // Redirigir o hacer algo
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