import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../pages/Login'
import RequireAuth from '../lib/RequireAuth' /* usamos un componente personalizado */

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route
          path='/admin'
          element={
            <RequireAuth loginPath='/login'>
              <Admin />
            </RequireAuth>
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}
