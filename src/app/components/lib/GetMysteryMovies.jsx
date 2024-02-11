'use client'

import { useState, useEffect } from 'react';

import MysteryMovieCard from '../movieGenres/MysteryMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchMysteryMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching mystery movies:", error);
    throw error
  }

}

const GetMysteryMovies = () => {
  const [mysteryMovies, setMysteryMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const mysteryMoviesData = await fetchMysteryMovies(pageNumber);
      console.log("Movies Data:", mysteryMoviesData);
      setMysteryMovies(mysteryMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {mysteryMovies.results && mysteryMovies.results.length > 0 && (
        <MysteryMovieCard mysteryMovies={mysteryMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetMysteryMovies;