"use client"

import { useSearch } from '@/searchContext'
import GetDramaMovies from '../components/lib/GetDramaMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const DramaMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetDramaMovies />}
    </div>
  )
}

export default DramaMoviesPage