'use client'

import { useState, useEffect } from 'react';

import ThrillerMovieCard from '../movieGenres/ThrillerMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchThrillerMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching tv movie movies:", error);
    throw error
  }

}

const GetThrillerMovies = () => {
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const thrillerMoviesData = await fetchThrillerMovies(pageNumber);
      console.log("Movies Data:", thrillerMoviesData);
      setThrillerMovies(thrillerMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {thrillerMovies.results && thrillerMovies.results.length > 0 && (
        <ThrillerMovieCard thrillerMovies={thrillerMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetThrillerMovies;