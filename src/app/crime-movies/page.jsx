'use client'

import { useSearch } from '@/searchContext';
import GetCrimeMovies from '../components/lib/GetCrimeMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const CrimeMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetCrimeMovies />}
    </div>
  )
}

export default CrimeMoviesPage