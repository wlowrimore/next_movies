import React from 'react'
import GetScienceFictionMovies from '../components/lib/GetScienceFictionMovies'


const ScienceFictionMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetScienceFictionMovies />
    </div>
  )
}

export default ScienceFictionMoviesPage