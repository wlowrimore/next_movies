'use client'

import { useState, useEffect } from 'react';
import PopMovieCard from '../movieGenres/PopMovieCard';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchMovies(page) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const data = await res.json();
  console.log(data);
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
      <PopMovieCard movies={movies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
};

export default GetPopMovies;