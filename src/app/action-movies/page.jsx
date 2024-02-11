import React from 'react'
import GetActionMovies from '../components/lib/GetActionMovies'


const ActionMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetActionMovies />
    </div>
  )
}

export default ActionMoviesPage