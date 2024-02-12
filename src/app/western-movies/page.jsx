'use client'

import { useSearch } from '@/searchContext'
import GetWesternMovies from '../components/lib/GetWesternMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const WesternMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetWesternMovies />}
    </div>
  )
}

export default WesternMoviesPage