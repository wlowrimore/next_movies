'use client'

import { useSearch } from '@/searchContext';
import { signIn, signOut, useSession } from 'next-auth/react';

import MovieGenre from './ui/selectDropdowns/MovieGenre';
import TVGenre from './ui/selectDropdowns/TVGenre';
import SearchBar from './forms/SearchBar';
import Link from 'next/link';

const HeaderNav = () => {
  const { searchQuery, resetSearchQuery } = useSearch();

  const { data: session } = useSession();
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

      </div>
      <SearchBar />
      {/* SignIn Logout */}
      <div className='flex items-center gap-8'>
        {!session?.user?.name ? (
          <button onClick={() => signIn()} className='text-amber-400 cursor-pointer hover:bg-neutral-700/70 px-3 py-1 rounded transition duration-300'><h1>SignIn</h1></button>
        ) : (
          <button onClick={() => signOut()} className='text-amber-400 cursor-pointer hover:bg-neutral-700/70 px-3 py-1 rounded transition duration-300'><h1>SignOut</h1></button>
        )}
      </div>
    </nav>
  )
}

export default HeaderNav