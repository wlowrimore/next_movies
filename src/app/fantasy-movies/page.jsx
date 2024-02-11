import React from 'react'
import GetFantasyMovies from '../components/lib/GetFantasyMovies'


const FantasyMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetFantasyMovies />
    </div>
  )
}

export default FantasyMoviesPage