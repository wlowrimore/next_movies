'use client'

import { useState, useEffect } from 'react';

import DocumentaryMovieCard from '../movieGenres/DocumentaryMovieCard';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchDocumentaryMovies(page) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99&page=${page}`)
    const data = await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching documentary movies:", error);
    throw error
  }

}

const GetDocumentaryMovies = () => {
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const documentaryMoviesData = await fetchDocumentaryMovies(pageNumber);
      console.log("Movies Data:", documentaryMoviesData);
      setDocumentaryMovies(documentaryMoviesData);
    };

    loadMovies();
  }, [pageNumber]);

  return (
    <>
      {documentaryMovies.results && documentaryMovies.results.length > 0 && (
        <DocumentaryMovieCard documentaryMovies={documentaryMovies} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
}

export default GetDocumentaryMovies;