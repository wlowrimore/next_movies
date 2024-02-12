'use client'

import { useSearch } from '@/searchContext';
import GetAdventureMovies from '../components/lib/GetAdventureMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const AdventureMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetAdventureMovies />}
    </div>
  )
}

export default AdventureMoviesPage