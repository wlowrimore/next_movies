"use client"

import { useSearch } from '@/searchContext'
import GetFamilyMovies from '../components/lib/GetFamilyMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const FamilyMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetFamilyMovies />}
    </div>
  )
}

export default FamilyMoviesPage