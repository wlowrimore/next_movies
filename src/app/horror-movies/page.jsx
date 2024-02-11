import React from 'react'
import GetHorrorMovies from '../components/lib/GetHorrorMovies'


const HorrorMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetHorrorMovies />
    </div>
  )
}

export default HorrorMoviesPage