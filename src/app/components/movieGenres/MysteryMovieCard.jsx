'use client'

import { useState } from "react";
import Image from "next/image"
import Thumb from '/public/images/thumb-up.webp';

import { getGenres } from '../lib/genreList/get-genre';

const MysteryMovieCard = ({ mysteryMovies, pageNumber, setPageNumber }) => {
  const [modalData, setModalData] = useState(null);

  const openModal = (mysteryMovie) => {
    setModalData(mysteryMovie);
  }

  const closeModal = () => {
    setModalData(null);
  }

  const handlePrevPage = () => {
    setPageNumber((prevPage) => {
      const newPage = prevPage > 1 ? prevPage - 1 : 1;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return newPage;
    })
  }

  const handleNextPage = () => {
    setPageNumber((prevPage) => {
      const newPage = prevPage < mysteryMovies.total_pages ? prevPage + 1 : mysteryMovies.total_pages;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return newPage;
    });
  };

  return (
    <>
      <div className='my-24'>
        <h1 className='text-3xl font-bold mt-6'>Mystery</h1>
        <div className='grid grid-cols-5 gap-10 py-8'>
          {mysteryMovies?.results && mysteryMovies?.results.map((movie) => (
            <div key={movie.id} className='max-w-[16rem]'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={250}
                height={350}
                alt={movie.title}
                onClick={() => openModal(movie)}
                className='rounded-2xl shadow-md shadow-neutral-900 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 border border-zinc-500'
              />
              <h2 className='font-semibold pt-3'>{movie.title}<span className='text-sm font-normal ml-3'>{movie.release_date.split('-')[0]}</span></h2>
              <div className='flex'>
                <p className='text-xs tracking-wider text-rose-600 pb-1'>
                  {Array.isArray(movie.genre_ids) && movie.genre_ids.length > 0
                    ? movie.genre_ids.map((id) => getGenres(id)).join(' | ')
                    : 'Unknown'}
                </p>
              </div>
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
        <div className='flex items-center justify-center bg-neutral-800 text-white px-4 py-1 mb-[-4rem] rounded-xl'>
          <button
            className='hover:scale-110 hover:text-teal-400 transition duration-200 ease-in'
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <p className='mx-10'>Page <span className='text-amber-500'>{pageNumber?.toLocaleString()}</span> of <span className='text-blue-400'>{mysteryMovies?.total_pages.toLocaleString()}</span></p>
          <button
            className='hover:scale-110 hover:text-teal-500 transition duration-200 ease-in'
            onClick={handleNextPage}
          >
            Next
          </button>
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
                className='rounded-2xl shadow-md shadow-neutral-900 border border-zinc-500'
              />
              <div className='flex flex-col'>
                <h2 className='text-4xl font-bold mb-1'>{modalData.title}</h2>
                <div className='flex'>
                  <p className='text-sm font-semibold tracking-wide text-rose-600 pb-1'>
                    {Array.isArray(modalData.genre_ids) && modalData.genre_ids.length > 0
                      ? modalData.genre_ids.map((id) => getGenres(id)).join(' | ')
                      : 'Unknown'}
                  </p>
                </div>
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

export default MysteryMovieCard