import Image from "next/image"
import Thumb from '/public/images/thumb-up.webp';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

const fetchAdventureMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`)
  const data = await res.json()
  console.log("This is the Adventure Movie data:", data)
  return data;
}

const AdventureMovieCard = async () => {
  const adventureMovies = await fetchAdventureMovies();
  return (
    <div className='my-24'>
      <h1 className='text-3xl font-bold mt-6'>Adventure</h1>
      <div className='grid grid-cols-5 gap-10 py-8'>
        {adventureMovies?.results && adventureMovies?.results.map((movie) => (
          <div key={movie.id} className='max-w-[16rem]'>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={250}
              height={350}
              alt={movie.title}
              // onClick={() => openModal(movie)}
              className='rounded-2xl shadow-md shadow-neutral-900 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 border border-zinc-500'
            />
            <h2 className='font-semibold pt-3'>{movie.title}<span className='text-sm font-normal ml-3'>{movie.release_date.split('-')[0]}</span></h2>
            <div className='flex items-center gap-2'>
              <Image
                src={Thumb}
                width={100}
                height={100}
                alt='Thumb up'
                className='w-6'
              />
              <p>{movie.vote_average.toFixed(1)}&nbsp;<span>&#40;{movie.vote_count}&#41;</span></p>
            </div>
            <p className='w-full py-4'>{movie.overview.slice(0, 100)}<span className='text-sm text-orange-500 italic cursor-pointer hover:text-indigo-500 transition duration-300'>...read more</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdventureMovieCard