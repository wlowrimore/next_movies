import React from 'react'
import MovieGenre from './ui/selectDropdowns/MovieGenre';
import TVGenre from './ui/selectDropdowns/TVGenre';
import SearchBar from './forms/SearchBar';
import Link from 'next/link';

const HeaderNav = () => {

  return (
    <nav className='bg-neutral-800 w-full p-4 flex justify-around fixed top-0 z-10 shadow-lg shadow-neutral-800'>
      <Link href='/' className='text-amber-400 text-4xl cursor-pointer hover:bg-neutral-700 px-3 py-1 rounded-xl transition duration-300'><h1>Next Movies</h1></Link>
      <div className='flex items-center gap-8'>
        <MovieGenre />
        <TVGenre />
      </div>
      <SearchBar />
    </nav>
  )
}

export default HeaderNav