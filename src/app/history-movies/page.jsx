"use client"

import { useSearch } from '@/searchContext';
import GetHistoryMovies from '../components/lib/GetHistoryMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const HistoryMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetHistoryMovies />}
    </div>
  )
}

export default HistoryMoviesPage