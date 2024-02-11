import React from 'react'
import GetCrimeMovies from '../components/lib/GetCrimeMovies'


const CrimeMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetCrimeMovies />
    </div>
  )
}

export default CrimeMoviesPage