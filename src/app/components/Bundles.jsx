import React from 'react'

const Bundles = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center container'>
      <div className='flex items-center w-full justify-center gap-10 pb-12'>
        <div className='bg-neutral-300 h-[0.1rem] w-1/4'></div>
        <h1 className='text-5xl w-fit text-neutral-300'>Choose your bundle</h1>
        <div className='bg-neutral-300 h-[0.1rem] w-1/4'></div>
      </div>
      <div className='flex gap-10 justify-center items-center'>


        <div className='flex flex-col py-8 px-6 rounded-2xl cursor-pointer border-2 border-amber-500 bg-blue-300 hover:border-2 hover:border-zinc-200 hover:bg-amber-400 transition duration-300'>
          <h2 className='text-5xl text-center'>NEXT PLUS</h2>
          <h3 className='text-2xl text-center pb-3'>NO CONTRACT</h3>
          <div className='flex flex-col px-6 text-lg w-[22rem]'>
            <ul className='list-disc p-4'>
              <li className='font-bold'>Get Netflix, Prime, Hulu, Max, & FX</li>
              <li>Unlimited movies and TV shows</li>
              <li>Watch anywhere. Cancel anytime.</li>
              <li>All your data on one device.</li>
              <li>Limited ads</li>
            </ul>
            <div className='flex flex-col items-center'>
              {/* <div className='flex items-center gap-2'>
                <div className='bg-neutral-950 h-[0.1rem] w-[2rem]'></div>
                <div className='py-4'><p>then pay only</p></div>
                <div className='bg-neutral-950 h-[0.1rem] w-[2rem]'></div>
              </div> */}
              <div>
                <h4 className='text-7xl pt-4'><span>$</span>59.99</h4>
                <div className='bg-neutral-950 h-[0.2rem] mt-2'></div>
                <h4 className='text-3xl text-center'>Month</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col p-6 rounded-2xl cursor-pointer border-2 border-amber-500 bg-amber-200 hover:border-2 hover:border-amber-400 hover:bg-blue-300 transition duration-300'>
          <h2 className='text-5xl text-center'>NEXT BASIC</h2>
          <h3 className='text-2xl text-center'>NO CONTRACT</h3>
          <div className='flex flex-col px-6 text-lg w-[22rem]'>
            <ul className='list-disc p-4'>
              <li className='font-bold'>Get Netflix, Prime, Max, & FX</li>
              <li>Unlimited movies and TV shows</li>
              <li>Watch anywhere. Cancel anytime.</li>
              <li>All your data on one device.</li>
              <li>Limited ads</li>
            </ul>
            <div className='flex flex-col items-center'>
              <h3 className='text-3xl text-red-600 font-semibold animate-pulse'>7-day free trial</h3>
              <div className='flex items-center gap-2'>
                <div className='bg-neutral-950 h-[0.1rem] w-[2rem]'></div>
                <div className='py-4'><p>then pay only</p></div>
                <div className='bg-neutral-950 h-[0.1rem] w-[2rem]'></div>
              </div>
              <div>
                <h4 className='text-5xl'><span>$</span>24.99</h4>
                <div className='bg-neutral-950 h-[0.2rem] mt-2'></div>
                <h4 className='text-3xl text-center'>Month</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col p-6 rounded-2xl cursor-pointer border-2 border-amber-500 bg-blue-300 hover:border-2 hover:border-zinc-200 hover:bg-amber-400 transition duration-300'>
          <h2 className='text-5xl text-center pt-2'>NEXT PREMIUM</h2>
          <h3 className='text-2xl text-center'>NO CONTRACT</h3>
          <div className='flex flex-col px-6 text-lg w-[22rem]'>
            <ul className='list-disc p-4'>
              <li className='font-bold'>Get Netflix, Prime, Hulu, Max, Paramount+, Disney+, FX, MGM+, & Youtube</li>
              <li>Unlimited movies and TV shows</li>
              <li>Watch anywhere. Cancel anytime.</li>
              <li>All your data on one device.</li>
              <li>No ads</li>
            </ul>
            <div className='flex flex-col items-center'>
              {/* <div className='flex items-center gap-2'>
                <div className='bg-neutral-950 h-[0.1rem] w-[2rem]'></div>
                <div className='py-4'><p>then pay only</p></div>
                <div className='bg-neutral-950 h-[0.1rem] w-[2rem]'></div>
              </div> */}
              <div className='pb-2'>
                <h4 className='text-7xl'><span>$</span>79.99</h4>
                <div className='bg-neutral-950 h-[0.2rem] mt-2'></div>
                <h4 className='text-3xl text-center'>Month</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bundles