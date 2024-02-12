'use client'

import { useState, useEffect } from 'react';
import { useSearch } from '@/searchContext';
import { FaSistrix } from 'react-icons/fa6';

const SearchBar = () => {
  const { searchQuery, updateSearchQuery } = useSearch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log("This is your search query:", searchQuery);
  }, [searchQuery])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query:", query);
    updateSearchQuery(query)
  }

  return (
    <form onSubmit={handleSubmit} id='search-bar' className='flex items-center gap-2'>
      <input
        type='text'
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search for movies'
        className='w-[17rem] px-2 py-1 rounded-md border border-neutral-400 focus:outline-none' />
      <button className='text-2xl text-white font-bold px-2 py-1 bg-amber-200/60 border border-white rounded-lg cursor-pointer hover:bg-teal-500/80 ease-in transition duration:300'><FaSistrix /></button>
    </form>
  )
}

export default SearchBar;