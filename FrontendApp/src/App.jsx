import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


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