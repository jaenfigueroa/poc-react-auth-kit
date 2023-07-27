import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}
