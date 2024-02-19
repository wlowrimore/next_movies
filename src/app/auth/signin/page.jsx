'use client';

import { useState } from 'react';
import Link from 'next/link';

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", userInfo.email);
    console.log("Password:", userInfo.password);
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center rounded-xl py-4 bg-neutral-800'>
        <h1 className='text-4xl text-amber-500'>Next Movies</h1>
        <h2 className='text-3xl text-neutral-300 mb-6'>Sign In</h2>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 py-4 px-6 w-[25rem]'>
          <div className='flex flex-col space-y-6 mb-4'>
            <input
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              type='email'
              className='bg-transparent focus:outline-none border-b border-neutral-300 placeholder:text-sm text-white tracking-wider placeholder:tracking-wider placeholder:opacity-30'
              placeholder='Email' />
            <input onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
              type='password'
              className='bg-transparent focus:outline-none border-b border-neutral-300 placeholder:text-sm text-white tracking-wider placeholder:tracking-wider placeholder:opacity-30' placeholder='Password' />
          </div>
          <button type='submit' className='py-1 px-3 rounded bg-neutral-700 text-white text-xl focus:outline-none'>Submit</button>
          <div className='flex justify-center'>
            <p className='text-neutral-300 tracking-wider'>No account? <Link href='/auth/register' className='text-blue-300 hover:text-blue-400 transition duration-300'>Register</Link> here.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn