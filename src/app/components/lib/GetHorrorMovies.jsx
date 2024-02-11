'use client'

import { useState, useEffect } from 'react';

import HorrorMovieCard from '../movieGenres/HorrorMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchHorrorMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching horror movies:", error);
    throw error
  }

}

const GetHorrorMovies = () => {
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const horrorMoviesData = await fetchHorrorMovies(pageNumber);
      console.log("Movies Data:", horrorMoviesData);
      setHorrorMovies(horrorMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {horrorMovies.results && horrorMovies.results.length > 0 && (
        <HorrorMovieCard horrorMovies={horrorMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetHorrorMovies;