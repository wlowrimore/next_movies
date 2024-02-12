'use client'

import { useSearch } from '@/searchContext';
import GetComedyMovies from '../components/lib/GetComedyMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const ComedyMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetComedyMovies />}
    </div>
  )
}

export default ComedyMoviesPage