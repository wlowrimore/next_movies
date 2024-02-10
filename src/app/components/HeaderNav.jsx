import React from 'react'
import MovieGenre from './ui/selectDropdowns/MovieGenre';
import TVGenre from './ui/selectDropdowns/TVGenre';
import SearchBar from './forms/SearchBar';

const HeaderNav = () => {

  return (
    <nav className='bg-neutral-800 w-full p-4 flex justify-around fixed top-0 z-10'>
      <h1 className='text-amber-500 text-4xl'>Next Movies</h1>
      <div className='flex items-center gap-8'>
        <MovieGenre />
        <TVGenre />
      </div>
      <SearchBar />
    </nav>
  )
}

export default HeaderNav