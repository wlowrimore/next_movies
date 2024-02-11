'use client'

import { useState, useEffect } from 'react';

import FamilyMovieCard from '../movieGenres/FamilyMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchFamilyMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching family movies:", error);
    throw error
  }

}

const GetFamilyMovies = () => {
  const [familyMovies, setFamilyMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const familyMoviesData = await fetchFamilyMovies(pageNumber);
      console.log("Movies Data:", familyMoviesData);
      setFamilyMovies(familyMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {familyMovies.results && familyMovies.results.length > 0 && (
        <FamilyMovieCard familyMovies={familyMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetFamilyMovies;