import Image from 'next/image'
import Devices from '/public/images/devices.webp'
import Download from '/public/images/download.webp'
import NoContract from '/public/images/no-contract.webp'
const Features = () => {
  return (
    <div className='flex w-full items-center justify-around bg-gradient-to-t from-neutral-600/50 to-transparent'>
      <div className='container flex w-full justify-around items-center'>
        <div className='w-96 py-12'>
          <Image
            priority
            src={Devices}
            width={1000}
            height={1000}
            alt='devices'
            className='w-96 opacity-70 rounded-xl'
          />
          <div className='pt-2'>
            <h2 className='text-xl text-amber-500 font-semibold tracking-wide'>You have options</h2>
            <p className='text-lg tracking-wide font-thin text-white'>Available to watch on your TV, computer, mobile phone and tablet.</p>
          </div>
        </div>
        <div className='w-[28rem] py-[4.2rem]'>
          <Image
            priority
            src={Download}
            width={1000}
            height={1000}
            alt='download'
            className='w-[26rem] opacity-70 rounded-xl'
          />
          <div className='pt-2'>
            <h2 className='text-xl text-amber-500 font-semibold tracking-wide'>Keep it in you pocket</h2>
            <p className='text-lg tracking-wide font-thin text-white'>With Next Movies, you can download the mobile app and watch it anywhere.</p>
          </div>
        </div>
        <div className='w-96 py-12'>
          <Image
            priority
            src={NoContract}
            width={1000}
            height={1000}
            alt='no contract'
            className='w-96 opacity-70 rounded-xl'
          />
          <div className='pt-2'>
            <h2 className='text-xl text-amber-500 font-semibold tracking-wide'>Keep it Simple</h2>
            <p className='text-lg tracking-wide font-thin text-white'><span className='font-normal'>No contract required! </span>We make it simple for you to sign up and start streaming.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features