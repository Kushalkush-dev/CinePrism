import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Movies from './pages/Movies'


const App = () => {
  return (
    <>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id'/>
      
      <Route path='/*' element={<><h1>404 Go back page unavailable</h1></>}/>
    </Routes>

    <Footer/>
    </>

  )
}

export default App