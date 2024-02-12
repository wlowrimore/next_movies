"use client"

import { useSearch } from '@/searchContext'
import GetTVMovieMovies from '../components/lib/GetTVMovieMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const TVMovieMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetTVMovieMovies />}
    </div>
  )
}

export default TVMovieMoviesPage