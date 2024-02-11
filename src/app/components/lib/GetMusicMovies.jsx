'use client'

import { useState, useEffect } from 'react';

import MusicMovieCard from '../movieGenres/MusicMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchMusicMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10402&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching music movies:", error);
    throw error
  }

}

const GetMusicMovies = () => {
  const [musicMovies, setMusicMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const musicMoviesData = await fetchMusicMovies(pageNumber);
      console.log("Movies Data:", musicMoviesData);
      setMusicMovies(musicMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {musicMovies.results && musicMovies.results.length > 0 && (
        <MusicMovieCard musicMovies={musicMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetMusicMovies;