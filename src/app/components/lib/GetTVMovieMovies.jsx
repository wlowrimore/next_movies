'use client'

import { useState, useEffect } from 'react';

import TVMovieMovieCard from '../movieGenres/TVMovieMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchTVMovieMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching tv movie movies:", error);
    throw error
  }

}

const GetTVMovieMovies = () => {
  const [tvMovieMovies, setTVMovieMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const tvMovieMoviesData = await fetchTVMovieMovies(pageNumber);
      console.log("Movies Data:", tvMovieMoviesData);
      setTVMovieMovies(tvMovieMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {tvMovieMovies.results && tvMovieMovies.results.length > 0 && (
        <TVMovieMovieCard tvMovieMovies={tvMovieMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetTVMovieMovies;