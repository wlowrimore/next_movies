import React from 'react'
import GetWarMovies from '../components/lib/GetWarMovies'


const WarMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetWarMovies />
    </div>
  )
}

export default WarMoviesPage