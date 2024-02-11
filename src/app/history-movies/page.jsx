import React from 'react'
import GetHistoryMovies from '../components/lib/GetHistoryMovies'


const HistoryMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetHistoryMovies />
    </div>
  )
}

export default HistoryMoviesPage