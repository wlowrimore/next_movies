'use client'

import { useState, useEffect } from 'react';

import HistoryMovieCard from '../movieGenres/HistoryMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchHistoryMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching history movies:", error);
    throw error
  }

}

const GetHistoryMovies = () => {
  const [historyMovies, setHistoryMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const historyMoviesData = await fetchHistoryMovies(pageNumber);
      console.log("Movies Data:", historyMoviesData);
      setHistoryMovies(historyMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {historyMovies.results && historyMovies.results.length > 0 && (
        <HistoryMovieCard historyMovies={historyMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetHistoryMovies;