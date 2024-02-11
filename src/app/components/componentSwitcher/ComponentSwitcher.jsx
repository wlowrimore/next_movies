'use client'

import { useSearch } from "@/searchContext";

import GetPopMovies from "../GetPopMovies";
import GetSearchedMovies from "../GetSearchedMovies";

const ComponentSwitcher = () => {
  const { searchQuery } = useSearch();

  return (
    <>
      {searchQuery ? <GetSearchedMovies /> : <GetPopMovies />}
    </>
  )

  // if (searchQuery) {
  //   return <GetSearchedMovies />
  // } else {
  //   return <GetPopMovies />
  // }
}

export default ComponentSwitcher