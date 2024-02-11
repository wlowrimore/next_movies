'use client'

import { useState, useEffect } from 'react';

import DramaMovieCard from '../movieGenres/DramaMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchDramaMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching drama movies:", error);
    throw error
  }

}

const GetDramaMovies = () => {
  const [dramaMovies, setDramaMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const dramaMoviesData = await fetchDramaMovies(pageNumber);
      console.log("Movies Data:", dramaMoviesData);
      setDramaMovies(dramaMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {dramaMovies.results && dramaMovies.results.length > 0 && (
        <DramaMovieCard dramaMovies={dramaMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetDramaMovies;