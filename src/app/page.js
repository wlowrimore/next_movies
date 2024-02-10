import GetPopMovies from "./components/GetPopMovies";
import GetSearchedMovies from "./components/GetSearchedMovies";
import ComponentSwitcher from "./components/componentSwitcher/ComponentSwitcher";

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <ComponentSwitcher />
    </main>
  );
}
