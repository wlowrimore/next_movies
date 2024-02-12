'use client'

import { useState, useEffect } from 'react';

import ScienceFictionMovieCard from '../movieGenres/ScienceFictionMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchScienceFictionMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching science fiction movies:", error);
    throw error
  }

}

const GetScienceFictionMovies = () => {
  const [scienceFictionMovies, setScienceFictionMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const scienceFictionMoviesData = await fetchScienceFictionMovies(pageNumber);
      console.log("Movies Data:", scienceFictionMoviesData);
      setScienceFictionMovies(scienceFictionMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {scienceFictionMovies.results && scienceFictionMovies.results.length > 0 && (
        <ScienceFictionMovieCard scienceFictionMovies={scienceFictionMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetScienceFictionMovies;