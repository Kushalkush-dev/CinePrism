import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BackgroundCircle from '../components/BackgroundCircle'

const Movies = () => {

  
  

  return dummyShowsData.length>0? (

    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

<BackgroundCircle top='150px' left='0px'/>
<BackgroundCircle top='150px' left='0px'/>
<BackgroundCircle top='120px' right='0px'/>
<BackgroundCircle top='140px' right='0px'/>
<h1 className='text-lg font-medium my-4'>Now Showing</h1>

<div className='flex flex-wrap max-sm:justify-center gap-8'>
  {dummyShowsData.map((movie)=>(

    <MovieCard movie={movie} key={movie._id}/>

  ))}
</div>
    </div>
    
  ):
  (

    <div className='flex h-screen justify-center items-center'>
      <p className='sm:text-xl text-sm  '>No Movies Available Currently come back later! </p>
    </div>
  )
}

export default Movies