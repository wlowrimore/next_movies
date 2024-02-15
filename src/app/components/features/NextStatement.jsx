import Image from 'next/image'
import PrimeLogo from '/public/images/streaming-logos/prime-video.webp'
import HuluLogo from '/public/images/streaming-logos/hulu-logo.webp'
import MaxLogo from '/public/images/streaming-logos/max-logo.webp'

const NextStatement = () => {
  return (
    <div className='flex flex-col mt-12 mx-auto w-full py-56 rounded-t-2xl'>
      <section className='flex w-full justify-center gap-20'>
        <Image
          src='/images/streaming-logos/netflix.svg'
          alt='netflix'
          width={100}
          height={100}
          className='w-28 opacity-70'
          priority
        />
        <Image
          src={PrimeLogo}
          alt='prime video'
          width={100}
          height={100}
          className='w-28 opacity-70'
          priority
        />
        <Image
          src={HuluLogo}
          alt='hulu'
          width={100}
          height={100}
          className='w-24 h-8 mt-2 opacity-70'
          priority
        />
        <Image
          src={MaxLogo}
          alt='max'
          width={100}
          height={100}
          className='w-24 h-8 mt-2 opacity-70'
          priority
        />
      </section>
      <section className='w-[65%] flex flex-col mx-auto mt-8 mb-10 px-7 bg-gradient-to-b from-blue-300 to-white bg-clip-text text-transparent border-r border-l border-zing-200 rounded-xl'>
        <h1 className='text-4xl mb-3'>NEXT MOVIES...THE NEXT GENERATION IN STREAMING.
        </h1>
        {/* <div className='flex flex-col items-center w-3/4'> */}
        <h2 className='text-2xl mb-3 tracking-wide'>Next Movies is not your typical streaming platform. We have teamed up with the best of the best, forming a hub for all your streaming needs.
        </h2>
        <p className='text-lg tracking-widest'>You will get all the new releases, classics, sports, news, and more provided by your favorite streaming services, and you'll get them all in one place.
        </p>
        {/* </div> */}
      </section>
    </div>
  )
}

export default NextStatement