import React from 'react'
import GetAnimationMovies from '../components/lib/GetAnimationMovies'


const AnimationMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetAnimationMovies />
    </div>
  )
}

export default AnimationMoviesPage