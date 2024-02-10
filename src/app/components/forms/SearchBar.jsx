'use client'

import { useSearch } from '@/app/searchProvider/searchProvider';
import { FaSistrix } from 'react-icons/fa6';

const SearchBar = () => {
  const { searchQuery, updateSearchQuery } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    updateSearchQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  }

  return (
    <form onSubmit={handleSubmit} id='search-bar' className='flex items-center gap-2'>
      <input
        type='text'
        onChange={handleSearch}
        placeholder='Search for movies'
        className='w-[17rem]] px-2 py-1 rounded-md border border-neutral-400 focus:outline-none' />
      <button className='text-2xl text-white font-bold px-2 py-1 bg-amber-200/60 border border-white rounded-lg cursor-pointer hover:bg-teal-500/80 ease-in transition duration:300'><FaSistrix /></button>
    </form>
  )
}

export default SearchBar