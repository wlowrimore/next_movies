'use client'

import useDropdown from "@/app/hooks/useDropdown";
import Link from "next/link";

const MovieGenre = () => {
  const { isVisible, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <div ref={dropdownRef}>
      <h3 onClick={toggleDropdown} className='text-amber-400 cursor-pointer hover:bg-neutral-700/70 px-3 py-1 rounded transition duration-300'>Movie Genre</h3>
      {isVisible && (
        <div className='absolute right-[12.8%] z-10 rounded-b-xl bg-neutral-950 text-neutral-300 py-6 space-y-1 gap-2 grid grid-cols-6'>
          <Link href='/action-movies' onClick={toggleDropdown}><option value='action' className='mt-[0.2rem] cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Action</option></Link>
          <Link href='/adventure-movies' onClick={toggleDropdown}><option value='adventure' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Adventure</option></Link>
          <Link href='/animation-movies' onClick={toggleDropdown}><option value='animation' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Animation</option></Link>
          <Link href='/comedy-movies' onClick={toggleDropdown}><option value='comedy' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Comedy</option></Link>
          <Link href='/crime-movies' onClick={toggleDropdown}><option value='crime' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Crime</option></Link>
          <Link href='/documentary-movies' onClick={toggleDropdown}><option value='documentary' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Documentary</option></Link>
          <Link href='/drama-movies' onClick={toggleDropdown}><option value='drama' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Drama</option></Link>
          <Link href='/family-movies' onClick={toggleDropdown}><option value='family' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Family</option></Link>
          <Link href='/fantasy-movies' onClick={toggleDropdown}><option value='fantasy' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Fantasy</option></Link>
          <Link href='/history-movies' onClick={toggleDropdown}><option value='history' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>History</option></Link>
          <Link href='/horror-movies' onClick={toggleDropdown}><option value='horror' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Horror</option></Link>
          <Link href='/music-movies' onClick={toggleDropdown}><option value='music' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Music</option></Link>
          <Link href='/mystery-movies' onClick={toggleDropdown}><option value='mystery' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Mystery</option></Link>
          <Link href='/romance-movies' onClick={toggleDropdown}><option value='romance' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Romance</option></Link>
          <Link href='/science-fiction-movies' onClick={toggleDropdown}><option value='science-fiction' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Science Fiction</option></Link>
          <Link href='/tv-movies' onClick={toggleDropdown}><option value='tv-movie' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>TV Movie</option></Link>
          <Link href='/thriller-movies' onClick={toggleDropdown}><option value='thriller' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Thriller</option></Link>
          <Link href='/war-movies' onClick={toggleDropdown}><option value='war' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>War</option></Link>
          <Link href='/western-movies' onClick={toggleDropdown}><option value='western' className='cursor-pointer hover:bg-neutral-700/70 rounded transition duration-300 py-1 px-3'>Western</option></Link>
        </div>
      )}

    </div>
  )
}

export default MovieGenre