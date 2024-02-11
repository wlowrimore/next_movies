import React from 'react'
import GetMusicMovies from '../components/lib/GetMusicMovies'


const MusicMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetMusicMovies />
    </div>
  )
}

export default MusicMoviesPage