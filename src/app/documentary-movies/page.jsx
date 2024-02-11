import React from 'react'
import GetDocumentaryMovies from '../components/lib/GetDocumentaryMovies'


const DocumentaryMoviesPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <GetDocumentaryMovies />
    </div>
  )
}

export default DocumentaryMoviesPage