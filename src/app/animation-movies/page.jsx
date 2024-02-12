"use client"

import { useSearch } from '@/searchContext';
import GetAnimationMovies from '../components/lib/GetAnimationMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const AnimationMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetAnimationMovies />}
    </div>
  )
}

export default AnimationMoviesPage