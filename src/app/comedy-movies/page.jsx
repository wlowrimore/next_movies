import React from 'react'
import GetComedyMovies from '../components/lib/GetComedyMovies'


const ComedyMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetComedyMovies />
    </div>
  )
}

export default ComedyMoviesPage