'use client'

import { useState, useEffect } from 'react';

import ActionMovieCard from '../movieGenres/ActionMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchActionMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=${page}`)
    const data = await res.json()
    console.log("This is the Action Movie data:", data)
    return data;
  } catch (error) {
    console.error("Error fetching action movies:", error);
    throw error
  }

}

const GetActionMovies = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const actionMoviesData = await fetchActionMovies(pageNumber);
      console.log("Movies Data:", actionMoviesData);
      setActionMovies(actionMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {actionMovies.results && actionMovies.results.length > 0 && (
        <ActionMovieCard actionMovies={actionMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetActionMovies;