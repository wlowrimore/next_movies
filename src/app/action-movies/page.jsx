'use client'

import { useSearch } from '@/searchContext'
import GetActionMovies from '../components/lib/GetActionMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const ActionMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetActionMovies />}
    </div>
  )
}

export default ActionMoviesPage