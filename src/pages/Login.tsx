import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth/login'
import stylesLogin from '../styles/login.module.css'
import stylesForm from '../styles/form.module.css'

const Login = () => {
  const navigate = useNavigate()
  const signIn = useSignIn()

  const onSubmit = async () => {
    const res = await login({ email: 'jaen@gmail.com', password: 'password_12345' })

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

      <form className={stylesForm.form}>
        <label className={stylesForm.label}> Correo:
          <input type='email' name='email' required />
        </label>
        <label className={stylesForm.label}> Contraseña:
          <input type='password' name='password' required/>
        </label>
        <button type='submit' onClick={onSubmit}>
          Iniciar sesion
        </button>
      </form>

    </main>
  )
}

export default Login