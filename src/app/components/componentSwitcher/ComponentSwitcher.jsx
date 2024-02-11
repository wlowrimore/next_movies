'use client'

import { useSearch } from "@/searchContext";

import GetPopMovies from "../lib/GetPopMovies";
import GetSearchedMovies from "../GetSearchedMovies";

const ComponentSwitcher = () => {
  const { searchQuery } = useSearch();

  return (
    <>
      {searchQuery ? <GetSearchedMovies /> : <GetPopMovies />}
    </>
  )
}

export default ComponentSwitcher