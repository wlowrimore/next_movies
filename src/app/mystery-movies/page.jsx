"use client"

import { useSearch } from '@/searchContext'
import GetMysteryMovies from '../components/lib/GetMysteryMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const MysteryMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetMysteryMovies />}
    </div>
  )
}

export default MysteryMoviesPage