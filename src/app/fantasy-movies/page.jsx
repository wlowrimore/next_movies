"use client"

import { useSearch } from '@/searchContext';
import GetFantasyMovies from '../components/lib/GetFantasyMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const FantasyMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetFantasyMovies />}
    </div>
  )
}

export default FantasyMoviesPage