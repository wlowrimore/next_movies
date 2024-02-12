import React from 'react'
import GetWesternMovies from '../components/lib/GetWesternMovies'


const WesternMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetWesternMovies />
    </div>
  )
}

export default WesternMoviesPage