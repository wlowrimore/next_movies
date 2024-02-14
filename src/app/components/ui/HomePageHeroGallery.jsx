'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'

const HomePageHeroGallery = ({ movies, pageNumber }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    if (movies.results && movies.results.length > 0 && pageNumber === 1) {
      const trendingSlice = movies.results.slice(12, 18);
      setTrendingMovies(trendingSlice)
    }
  }, [movies.results, pageNumber])


  return (
    <div className='flex w-full justify-end'>
      <div className='flex flex-col'>
        <div className='grid grid-cols-3 gap-2'>
          {trendingMovies?.map((movie, index) => (
            <div key={movie.id} className='flex'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={250}
                height={350}
                alt={movie.title}
                className='w-[10rem] rounded-xl'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePageHeroGallery