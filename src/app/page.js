import Image from "next/image";
import GetPopMovies from "./components/GetPopMovies";
import GetSearchedMovies from "./components/GetSearchedMovies";

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>

      <GetPopMovies />
      {/* <GetSearchedMovies /> */}

    </main>
  );
}
