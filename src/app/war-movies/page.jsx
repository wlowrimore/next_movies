"use client"

import { useSearch } from '@/searchContext'
import GetWarMovies from '../components/lib/GetWarMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const WarMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetWarMovies />}
    </div>
  )
}

export default WarMoviesPage