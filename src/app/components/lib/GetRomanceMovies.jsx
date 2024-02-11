'use client'

import { useState, useEffect } from 'react';

import RomanceMovieCard from '../movieGenres/RomanceMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchRomanceMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching romance movies:", error);
    throw error
  }

}

const GetRomanceMovies = () => {
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const romanceMoviesData = await fetchRomanceMovies(pageNumber);
      console.log("Movies Data:", romanceMoviesData);
      setRomanceMovies(romanceMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {romanceMovies.results && romanceMovies.results.length > 0 && (
        <RomanceMovieCard romanceMovies={romanceMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetRomanceMovies;