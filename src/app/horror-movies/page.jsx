"use client"

import { useSearch } from '@/searchContext'
import GetHorrorMovies from '../components/lib/GetHorrorMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const HorrorMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetHorrorMovies />}
    </div>
  )
}

export default HorrorMoviesPage