'use client'

import { useState, useEffect } from 'react';

import WesternMovieCard from '../movieGenres/WesternMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchWesternMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching western movies:", error);
    throw error
  }

}

const GetWesternMovies = () => {
  const [westernMovies, setWesternMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const westernMoviesData = await fetchWesternMovies(pageNumber);
      console.log("Movies Data:", westernMoviesData);
      setWesternMovies(westernMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {westernMovies.results && westernMovies.results.length > 0 && (
        <WesternMovieCard westernMovies={westernMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetWesternMovies;