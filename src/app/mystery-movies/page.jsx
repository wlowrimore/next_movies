import React from 'react'
import GetMysteryMovies from '../components/lib/GetMysteryMovies'


const MysteryMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetMysteryMovies />
    </div>
  )
}

export default MysteryMoviesPage