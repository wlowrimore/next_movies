'use client'

import { useSearch } from '@/searchContext'
import GetMusicMovies from '../components/lib/GetMusicMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const MusicMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetMusicMovies />}
    </div>
  )
}

export default MusicMoviesPage