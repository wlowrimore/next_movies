'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'

const HomePageHeroGallery = ({ movies }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    if (movies.results && movies.results.length > 0) {
      const trendingSlice = movies.results.slice(0, 5);
      setTrendingMovies(trendingSlice)
    }
  }, [movies.results])


  return (
    <>
      <h1 className='mt-6 text-white'>Top 5 Downloaded Movies</h1>
      <div className='flex justify-evenly'>
        <div className='grid grid-cols-5 gap-16'>
          {trendingMovies?.map((movie, index) => (
            <div key={movie.id} className='flex gap-6'>
              <h4 className='text-white text-3xl'>{`${index + 1}`}</h4>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={250}
                height={350}
                alt={movie.title}
                className='w-[12rem] rounded-xl border border-zinc-300'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePageHeroGallery