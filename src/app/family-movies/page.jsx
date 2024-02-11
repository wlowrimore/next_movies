import React from 'react'
import GetFamilyMovies from '../components/lib/GetFamilyMovies'


const FamilyMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetFamilyMovies />
    </div>
  )
}

export default FamilyMoviesPage