'use client'

import useDropdown from "@/app/hooks/useDropdown";

const TVGenre = () => {
  const { isVisible, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <div ref={dropdownRef}>
      <h3 onClick={toggleDropdown} className='text-amber-400 cursor-pointer hover:bg-neutral-700 px-3 py-1 rounded-xl transition duration-300'>TV Genre</h3>
      {isVisible && (
        <div className='absolute left-[48.2%] rounded-b-xl z-10 bg-neutral-800 text-neutral-300 py-4 space-y-1 grid grid-cols-5'>
          <option value='action-adventure' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400 py-1 px-3'>Action & Adventure</option>
          <option value='animation' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Animation</option>
          <option value='comedy' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Comedy</option>
          <option value='crime' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Crime</option>
          <option value='documentary' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Documentary</option>
          <option value='drama' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Drama</option>
          <option value='family' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Family</option>
          <option value='kids' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Kids</option>
          <option value='mystery' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Mystery</option>
          <option value='news' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>News</option>
          <option value='reality' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Reality</option>
          <option value='sci-fi-fantasy' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Sci-Fi & Fantasy</option>
          <option value='soap' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Soap</option>
          <option value='talk' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Talk</option>
          <option value='war-politics' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>War & Politics</option>
          <option value='western' className='cursor-pointer hover:bg-neutral-700 rounded-2xl hover:text-teal-400  py-1 px-3'>Western</option>
        </div>
      )}

    </div>
  )
}

export default TVGenre