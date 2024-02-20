'use client'

import { useSearch } from '@/searchContext';
import MovieGenre from './ui/selectDropdowns/MovieGenre';
import TVGenre from './ui/selectDropdowns/TVGenre';
import SearchBar from './forms/SearchBar';
import Link from 'next/link';
import { useAuth } from '@/authContext';

const HeaderNav = () => {
  const { user } = useAuth();
  const { searchQuery, resetSearchQuery } = useSearch();

  return (
    <nav className='bg-neutral-950 w-full p-4 flex justify-around fixed top-0 z-10 shadow-2xl shadow-neutral-950'>
      <Link href='/' className='text-amber-400 text-4xl cursor-pointer p-2'><h1 onClick={resetSearchQuery}>Next Movies</h1></Link>
      <div className='flex items-center gap-8'>
        <Link href='/' className='text-amber-400 cursor-pointer hover:bg-neutral-700/70 px-3 py-1 rounded transition duration-300'><h1 onClick={resetSearchQuery}>Home</h1></Link>
        {!searchQuery ?
          <>
            <MovieGenre />
            <TVGenre />
          </>
          : null}
        {user ? <p className='text-blue-300'>Welcome, {user.name}</p> : <p className='text-red-400'>Please sign in.</p>}
      </div>
      <SearchBar />
      <div className='flex items-center'>
        {user ? <Link href='/' className='text-amber-400 cursor-pointer hover:bg-neutral-700/70 px-3 py-1 rounded transition duration-300'>Sign Out</Link>
          :
          <Link href='/auth/signIn' className='text-amber-400 cursor-pointer hover:bg-neutral-700/70 px-3 py-1 rounded transition duration-300'>Sign In</Link>
        }
      </div>
    </nav>
  )
}

export default HeaderNav