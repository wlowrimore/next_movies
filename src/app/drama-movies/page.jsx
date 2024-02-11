import React from 'react'
import GetDramaMovies from '../components/lib/GetDramaMovies'


const DramaMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetDramaMovies />
    </div>
  )
}

export default DramaMoviesPage