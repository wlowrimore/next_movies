'use client'

import useDropdown from "@/app/hooks/useDropdown";

const MovieGenre = () => {
  const { isVisible, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <div ref={dropdownRef}>
      <h3 onClick={toggleDropdown} className='text-amber-400 cursor-pointer hover:opacity-70 transition duration-300'>Movie Genre</h3>
      {isVisible && (
        <div className='absolute left-[41.4%] z-10 bg-neutral-800 text-neutral-300 py-4 space-y-1'>
          <option value='action' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400 py-1 px-3'>Action</option>
          <option value='adventure' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Adventure</option>
          <option value='animation' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Animation</option>
          <option value='comedy' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Comedy</option>
          <option value='crime' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Crime</option>
          <option value='documentary' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Documentary</option>
          <option value='drama' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Drama</option>
          <option value='family' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Family</option>
          <option value='fantasy' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Fantasy</option>
          <option value='history' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>History</option>
          <option value='horror' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Horror</option>
          <option value='music' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Music</option>
          <option value='mystery' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Mystery</option>
          <option value='romance' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Romance</option>
          <option value='science-fiction' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Science Fiction</option>
          <option value='tv-movie' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>TV Movie</option>
          <option value='thriller' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Thriller</option>
          <option value='war' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>War</option>
          <option value='western' className='cursor-pointer hover:bg-neutral-700 hover:text-teal-400  py-1 px-3'>Western</option>
        </div>
      )}

    </div>
  )
}

export default MovieGenre