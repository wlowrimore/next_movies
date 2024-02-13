'use client'

import { useSearch } from '@/searchContext'
import GetThrillerMovies from '../components/lib/GetThrillerMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const ThrillerMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetThrillerMovies />}
    </div>
  )
}

export default ThrillerMoviesPage