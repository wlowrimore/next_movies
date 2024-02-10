// import MovieCard from "./MovieCard";

// const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
// let pageNumber = 1;
// async function fetchMovies(page) {
//   const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
//   const data = await res.json()
//   return data;
// }

// const GetPopMovies = async () => {
//   const movies = await fetchMovies();
//   console.log(movies);

//   return (
//     <>
//       <MovieCard movies={movies} pageNumber={pageNumber} />
//     </>
//   )
// }


// export default GetPopMovies


'use client'

import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

// let pageNumber = 1;

async function fetchMovies(page) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const data = await res.json();
  return data;
}

const GetPopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesData = await fetchMovies(pageNumber);
      setMovies(moviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      <MovieCard movies={movies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
};

export default GetPopMovies;