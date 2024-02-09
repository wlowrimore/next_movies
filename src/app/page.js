import Image from "next/image";
import GetPopMovies from "./components/GetPopMovies";

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      {/* <h1 className='text-4xl font-bold tracking-wide my-12'>NEXT VIDEO</h1> */}
      <GetPopMovies />
    </main>
  );
}
