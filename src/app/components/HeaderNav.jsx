import React from 'react'
import { FaSistrix } from 'react-icons/fa6';
import MovieGenre from './ui/selectDropdowns/MovieGenre';
import TVGenre from './ui/selectDropdowns/TVGenre';

const HeaderNav = () => {
  return (
    <nav className='bg-neutral-800 w-full p-4 flex justify-around'>
      <h1 className='text-amber-500 text-4xl'>Next Movies</h1>
      <div className='flex items-center gap-8'>
        <MovieGenre />
        <TVGenre />
      </div>
      <div id='search-bar' className='flex items-center gap-2'>
        <input
          type='text'
          placeholder='Search for movies'
          className='w-[17rem]] px-2 py-1 rounded-md border border-neutral-400 focus:outline-none' />
        <span className='text-2xl text-white font-bold px-2 py-1 bg-amber-200/60 border border-white rounded-lg cursor-pointer hover:bg-teal-500/80 ease-in transition duration:300'><FaSistrix /></span>
      </div>
    </nav>
  )
}

export default HeaderNav