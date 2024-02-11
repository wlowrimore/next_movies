'use client'

import { useState, useEffect } from 'react';

import CrimeMovieCard from '../movieGenres/CrimeMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchCrimeMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching crime movies:", error);
    throw error
  }

}

const GetCrimeMovies = () => {
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const crimeMoviesData = await fetchCrimeMovies(pageNumber);
      console.log("Movies Data:", crimeMoviesData);
      setCrimeMovies(crimeMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {crimeMovies.results && crimeMovies.results.length > 0 && (
        <CrimeMovieCard crimeMovies={crimeMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetCrimeMovies;