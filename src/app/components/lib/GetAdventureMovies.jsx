'use client'

import { useState, useEffect } from 'react';

import AdventureMovieCard from '../movieGenres/AdventureMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchAdventureMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching action movies:", error);
    throw error
  }

}

const GetAdventureMovies = () => {
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const adventureMoviesData = await fetchAdventureMovies(pageNumber);
      console.log("Movies Data:", adventureMoviesData);
      setAdventureMovies(adventureMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {adventureMovies.results && adventureMovies.results.length > 0 && (
        <AdventureMovieCard adventureMovies={adventureMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetAdventureMovies;