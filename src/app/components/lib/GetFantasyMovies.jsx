'use client'

import { useState, useEffect } from 'react';

import FantasyMovieCard from '../movieGenres/FantasyMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchFantasyMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching fantasy movies:", error);
    throw error
  }

}

const GetFantasyMovies = () => {
  const [fantasyMovies, setFantasyMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const fantasyMoviesData = await fetchFantasyMovies(pageNumber);
      console.log("Movies Data:", fantasyMoviesData);
      setFantasyMovies(fantasyMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {fantasyMovies.results && fantasyMovies.results.length > 0 && (
        <FantasyMovieCard fantasyMovies={fantasyMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetFantasyMovies;