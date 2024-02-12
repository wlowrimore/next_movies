'use client'

import { useState, useEffect } from 'react';

import WarMovieCard from '../movieGenres/WarMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchWarMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching war movies:", error);
    throw error
  }

}

const GetWarMovies = () => {
  const [warMovies, setWarMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const warMoviesData = await fetchWarMovies(pageNumber);
      console.log("Movies Data:", warMoviesData);
      setWarMovies(warMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {warMovies.results && warMovies.results.length > 0 && (
        <WarMovieCard warMovies={warMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetWarMovies;