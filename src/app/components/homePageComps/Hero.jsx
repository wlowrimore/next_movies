import Image from 'next/image'
import YouTube from '/public/images/youtube.webp'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center h-full w-full container'>
      <div className='bg-homepage-bg bg-fixed bg-cover bg-no-repeat bg-center h-screen rounded-b-xl rounded-t-md'>
        <div className='bg-black/50 h-full rounded-b-xl rounded-t-md'>
          <div className='flex'>
            <div className='flex flex-col justify-center h-screen'>
              <h1 className='w-full mb-2 text-5xl tracking-wide text-neutral-200'>STREAM MOVIES AND TV SHOWS</h1>
              <div className='w-[32rem]'>
                <h2 className='w-3/4 mb-2 text-3xl text-neutral-200'>Choose from over one million titles!</h2>
                <h3 className='w-3/4 text-xl text-neutral-200 font-light tracking-wide'>Start streaming now with your 7-day free trial offer. Cancel at any time.  Customize your bundle with plans starting as low as $24.99 / month after that.</h3>
              </div>
              <div className='mt-8'>
                <button className='bg-amber-400 p-2 rounded-lg text-lg font-semibold text-neutral-800 hover:bg-rose-700 hover:text-white transition duration-300'>Start Your Free Trial</button>
              </div>
            </div>
            <div className='relative w-full flex flex-col items-end justify-center'>
              <h2 className='absolute top-[36%] left-[58%] text-red-400 uppercase w-1/2 text-4xl text-start'>Now Offering</h2>
              <Image
                src={YouTube}
                alt='youtube'
                width={1000}
                height={1000}
                className='w-[36rem] opacity-70 rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero