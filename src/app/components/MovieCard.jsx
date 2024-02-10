import React from 'react'
import Image from "next/image";
import Thumb from '/public/images/thumb-up.webp';

const MovieCard = ({ movies }) => {
  return (
    <div className='my-24 '>
      <h1 className='text-3xl font-bold'>Here's what&apos;s trending now</h1>
      <div className='grid grid-cols-5 gap-10 py-8'>
        {movies.results.map((movie) => (
          <div key={movie.id} className='max-w-[16rem]'>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={250}
              height={350}
              alt={movie.title}
              className='rounded-2xl shadow-md shadow-neutral-900'
            />
            <h2 className='font-semibold pt-3'>{movie.title}<span className='text-sm font-normal ml-3'>{movie.release_date.split('-')[0]}</span></h2>
            <div className='flex items-center gap-2'>
              <Image
                src={Thumb}
                width={100}
                height={100}
                alt='Thumb up'
                className='w-6'
              />
              <p>{movie.vote_average.toFixed(1)}&nbsp;<span>&#40;{movie.vote_count}&#41;</span></p>
            </div>
            <p className='w-full py-4'>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCard