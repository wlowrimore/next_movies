import React from 'react'
import GetRomanceMovies from '../components/lib/GetRomanceMovies'


const RomanceMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetRomanceMovies />
    </div>
  )
}

export default RomanceMoviesPage