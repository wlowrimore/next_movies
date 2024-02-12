'use client'

import React, { useState, useEffect } from 'react';
import { useSearch } from '@/searchContext';
import SearchedMovieCard from '../SearchedMovieCard';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const fetchMovies = async (searchQuery) => {
  console.log("Searching for:", searchQuery);
  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
    const data = await res.json();

    if (!res.ok) {
      console.error(`Error: ${data.status_message}`);
      return [];
    }

    return data.results;
  } catch (error) {
    console.error("Error fetching searched movies:", error);
    return [];
  }
}

const GetSearchedMovies = () => {
  const { searchQuery, resetSearchQuery } = useSearch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("Search query:", searchQuery);
    if (searchQuery) {
      fetchMovies(searchQuery)
        .then(data => {
          console.log(`Here's what we found for: ${searchQuery}`, data);
          setMovies(data)
        });
    }
  }, [searchQuery]);

  return (
    <div>
      <SearchedMovieCard movies={movies} searchQuery={searchQuery} resetSearchQuery={resetSearchQuery} />
    </div>
  );
}

export default GetSearchedMovies;