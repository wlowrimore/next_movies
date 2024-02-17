import React from 'react'

const SignInPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center rounded-xl py-4 bg-neutral-800'>
        <h1 className='text-4xl text-amber-500'>Next Movies</h1>
        <h2 className='text-3xl text-neutral-300 mb-6'>Sign In</h2>
        <form className='flex flex-col space-y-4 py-4 px-6'>
          <div className='flex flex-col space-y-4 mb-4'>
            <input type='email' className='bg-transparent focus:outline-none border-b border-neutral-300 placeholder:text-sm text-white tracking-wider placeholder:tracking-wider placeholder:opacity-30' placeholder='Email' />
            <input type='password' className='bg-transparent focus:outline-none border-b border-neutral-300 placeholder:text-sm text-white tracking-wider placeholder:tracking-wider placeholder:opacity-30' placeholder='Password' />
          </div>
          <button type='submit' className='py-1 px-3 rounded bg-neutral-700 text-white text-xl'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignInPage