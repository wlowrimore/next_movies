'use client'

import { useState, useEffect } from 'react';

import ComedyMovieCard from '../movieGenres/ComedyMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchComedyMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching comedy movies:", error);
    throw error
  }

}

const GetComedyMovies = () => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const comedyMoviesData = await fetchComedyMovies(pageNumber);
      console.log("Movies Data:", comedyMoviesData);
      setComedyMovies(comedyMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {comedyMovies.results && comedyMovies.results.length > 0 && (
        <ComedyMovieCard comedyMovies={comedyMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetComedyMovies;