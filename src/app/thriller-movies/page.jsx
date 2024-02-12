import React from 'react'
import GetThrillerMovies from '../components/lib/GetThrillerMovies'


const ThrillerMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetThrillerMovies />
    </div>
  )
}

export default ThrillerMoviesPage