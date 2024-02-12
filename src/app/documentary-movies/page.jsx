"use client"

import { useSearch } from '@/searchContext';
import GetDocumentaryMovies from '../components/lib/GetDocumentaryMovies'
import GetSearchedMovies from '../components/lib/GetSearchedMovies'

const DocumentaryMoviesPage = () => {
  const { searchQuery } = useSearch();
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetDocumentaryMovies />}
    </div>
  )
}

export default DocumentaryMoviesPage