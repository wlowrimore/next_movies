'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'

const HomePageHeroGallery = ({ movies, pageNumber }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [numberOneMovie, setNumberOneMovie] = useState(null);

  useEffect(() => {
    if (movies.results && movies.results.length > 0 && pageNumber === 1) {
      const trendingSlice = movies.results.slice(1, 5);
      setTrendingMovies(trendingSlice)
      setNumberOneMovie(movies.results[0])
    }
  }, [movies.results, pageNumber])


  return (
    <div className='flex flex-col w-full'>
      {/* <div className='w-full'> */}
      <h1 className='w-full bg-gradient-to-r text-center from-amber-300 to-red-800 bg-clip-text text-transparent mb-6 ml-[-2rem] text-3xl font-semibold tracking-wide'>Top 5 Watched Movies</h1>
      {/* </div> */}
      <div className='flex justify-end'>
        {numberOneMovie && (
          <div className='relative'>
            <Image
              src={`https://image.tmdb.org/t/p/w500${numberOneMovie.poster_path}`}
              width={250}
              height={350}
              alt={numberOneMovie.title}
              className='w-[18rem] mr-2 rounded-xl border border-zinc-300'
            />
            <p className='absolute right-[42.5%] top-0 border-l border-t border-zinc-300 rounded-tl-lg rounded-br-lg bg-red-500 text-xl font-bold text-white tracking-wide px-2 py-1'>#1 WATCHED</p>
          </div>
        )}
        <div className='grid grid-cols-2 gap-2'>
          {trendingMovies?.map((movie, index) => (
            <div key={movie.id} className='flex'>
              <h4 className='absolute ml-2 mt-2 text-neutral-800 bg-amber-300 px-1 rounded-lg text-2xl'>{`${index + 2}`}</h4>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={250}
                height={350}
                alt={movie.title}
                className='w-[8rem] rounded-xl border border-zinc-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePageHeroGallery