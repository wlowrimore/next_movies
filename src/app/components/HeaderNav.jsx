import React from 'react'
import MovieGenre from './ui/selectDropdowns/MovieGenre';
import TVGenre from './ui/selectDropdowns/TVGenre';
import SearchBar from './forms/SearchBar';
import GetSearchedMovies from './GetSearchedMovies';

const HeaderNav = () => {

  return (
    <nav className='bg-neutral-800 w-full p-4 flex justify-around'>
      <h1 className='text-amber-500 text-4xl'>Next Movies</h1>
      <div className='flex items-center gap-8'>
        <MovieGenre />
        <TVGenre />
      </div>
      <SearchBar />
      <GetSearchedMovies />
    </nav>
  )
}

export default HeaderNav