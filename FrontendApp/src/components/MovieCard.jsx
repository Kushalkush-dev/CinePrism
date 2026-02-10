import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../libs/timeFormat'

const MovieCard = ({ movie }) => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition-all duration-300 w-66'>


      <img src={movie.backdrop_path} alt="movieposter" className='rounded-lg object-cover object-bottom-right h-52 w-full' />


      <p className='font-semibold mt-2 truncate'>{movie.title}</p>

      <p className='text-sm text-gray-400 mt-2'>

        {new Date(movie.release_date).getFullYear()} • {movie.genres.slice(0, 2).map(genre => genre.name).join(" | ")} • {timeFormat(movie.runtime) }

      </p>

      <div className='flex items-center justify-between mt-3 pb-3'>

        <button onClick={()=>navigate(`/movies/${movie.id}`) } className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull
                            transition rounded-full font-medium cursor-pointer' >Buy Tickets</button>



        <p className='flex items-center gap-1 text-sm text-gray-400 mt-l pr-l'>
          <StarIcon className='h-4 text-primary fill-primary' />
          {movie.vote_average.toFixed(1)}

        </p>



      </div>




    </div>
  )
}

export default MovieCard