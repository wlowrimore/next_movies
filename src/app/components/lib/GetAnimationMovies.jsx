'use client'

import { useState, useEffect } from 'react';

import AnimationMovieCard from '../movieGenres/AnimationMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchAnimationMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching animation movies:", error);
    throw error
  }

}

const GetAnimationMovies = () => {
  const [animationMovies, setAnimationMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const animationMoviesData = await fetchAnimationMovies(pageNumber);
      console.log("Movies Data:", animationMoviesData);
      setAnimationMovies(animationMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {animationMovies.results && animationMovies.results.length > 0 && (
        <AnimationMovieCard animationMovies={animationMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetAnimationMovies;