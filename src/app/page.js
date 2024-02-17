import Features from "./components/homePageComps/Features";
import NextStatement from "./components/homePageComps/NextStatement";
import Hero from "./components/homePageComps/Hero";
import Bundles from "./components/Bundles";

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto'>
      <Hero />
      <NextStatement />
      <Features />
      <Bundles />
    </main>
  );
}
