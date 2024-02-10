'use client'

import { useState } from 'react';
import Image from 'next/image';
import Thumb from '/public/images/thumb-up.webp';

const SearchedMovieCard = ({ searchQuery = '', movies = [] }) => {
  const [modalData, setModalData] = useState(null);

  const openModal = (movie) => {
    setModalData(movie);
  }

  const closeModal = () => {
    setModalData(null);
  }

  return (
    <>
      <div className='my-24 '>
        <h1 className='text-3xl font-bold'>Results for {searchQuery}</h1>
        <div className='grid grid-cols-5 gap-10 py-8'>
          {movies.map((movie) => (
            <div key={movie.id} className='max-w-[16rem]'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={250}
                height={350}
                alt={movie.title}
                onClick={() => openModal(movie)}
                className='rounded-2xl shadow-md shadow-neutral-900 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300'
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
              <p className='w-full py-4'>{movie.overview.slice(0, 100)}<span onClick={() => openModal(movie)} className='text-sm text-orange-500 italic cursor-pointer hover:text-indigo-500 transition duration-300'>...read more</span></p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {modalData && (

        <div
          className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg w-[60%] m-12">
            <div className='flex gap-4'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${modalData.poster_path}`}
                width={500}
                height={600}
                alt={modalData.title}
                className='rounded-2xl shadow-md shadow-neutral-900'
              />
              <div className='flex flex-col'>
                <h2 className='text-4xl font-bold mb-1'>{modalData.title}</h2>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={Thumb}
                      width={100}
                      height={100}
                      alt='Thumb up'
                      className='w-6'
                    />
                    <p>{modalData.vote_average.toFixed(1)}&nbsp;<span>&#40;{modalData.vote_count}&#41;</span></p>
                  </div>
                  <p className='text-sm font-normal'>{modalData.release_date.split('-')[0]}</p>
                </div>
                <p>{modalData.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchedMovieCard