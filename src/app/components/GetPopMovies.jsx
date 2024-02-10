import MovieCard from "./MovieCard";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  const data = await res.json()
  return data;
}

const GetPopMovies = async () => {
  const movies = await fetchMovies();
  console.log(movies);

  return (
    <>
      <MovieCard movies={movies} />
    </>
  )
}

export default GetPopMovies