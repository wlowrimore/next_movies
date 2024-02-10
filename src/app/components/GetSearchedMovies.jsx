'use client'

import React, { useEffect } from 'react';
import { useSearch } from '@/searchContext';

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
  const { searchQuery } = useSearch();

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery)
        .then(data => {
          console.log(`Here's what we found for: ${searchQuery}`, data);
        });
    }
  }, [searchQuery]);

  return (
    <div>GetSearchedMovies</div>
  );
}

export default GetSearchedMovies;