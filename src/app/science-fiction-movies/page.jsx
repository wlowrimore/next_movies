'use client'

import { useSearch } from '@/searchContext'
import GetScienceFictionMovies from '../components/lib/GetScienceFictionMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const ScienceFictionMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetScienceFictionMovies />}
    </div>
  )
}

export default ScienceFictionMoviesPage