import React from 'react'
import GetAdventureMovies from '../components/lib/GetAdventureMovies'


const AdventureMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetAdventureMovies />
    </div>
  )
}

export default AdventureMoviesPage