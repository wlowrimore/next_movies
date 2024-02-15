'use client'

import { useSearch } from "@/searchContext";
import GetPopMovies from "../components/lib/GetPopMovies";
import GetSearchedMovies from "../components/lib/GetSearchedMovies";

export default function AllMoviesPage() {
  const { searchQuery } = useSearch();
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {searchQuery ? <GetSearchedMovies /> : <GetPopMovies />}
    </main>
  );
}