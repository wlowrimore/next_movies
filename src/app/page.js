import Features from "./components/features/Features";
import NextStatement from "./components/features/NextStatement";

export default function Home() {
  return (
    // Site Hero
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto container'>
      <div className='my-24 flex flex-col w-full'>
        <div className='bg-fixed bg-homepage-bg bg-cover bg-no-repeat bg-center rounded-b-xl rounded-t-md'>
          <div className='bg-black/50 rounded-b-xl rounded-t-md p-16'>
            <div className='flex'>
              <div className='flex flex-col justify-center py-44'>
                <h1 className='w-full mb-2 text-5xl tracking-wide text-neutral-200'>STREAM MOVIES AND TV SHOWS</h1>
                <div className='w-[32rem]'>
                  <h2 className='w-3/4 mb-2 text-3xl text-neutral-200'>Choose from over one million titles!</h2>
                  <h3 className='w-3/4 text-xl text-neutral-200 font-light tracking-wide'>Start streaming now with your 7-day free trial offer. Cancel at any time.  Pay only $44.99 / month after that.</h3>
                </div>
                <div className='mt-8'>
                  <button className='bg-amber-400 p-2 rounded-lg text-lg font-semibold text-neutral-800 hover:bg-rose-700 hover:text-white transition duration-300'>Start Your Free Trial</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Next Statement */}
      <NextStatement />
      {/* Features */}
      <Features />
    </main>
  );
}
