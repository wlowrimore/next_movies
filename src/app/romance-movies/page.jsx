'use client'

import { useSearch } from '@/searchContext'
import GetRomanceMovies from '../components/lib/GetRomanceMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const RomanceMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetRomanceMovies />}
    </div>
  )
}

export default RomanceMoviesPage