import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Movies from './pages/Movies'
import Favorites from './pages/Favorites'
import MoviePage from './pages/MoviePage'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/favorites' element={<Favorites />} />

        <Route path='/movie/:id' element={<MoviePage/>} />

        <Route path='*' element={<><h1>404 Go back page unavailable</h1></>} />
      </Routes>

      <Footer />
    </>

  )
}

export default App