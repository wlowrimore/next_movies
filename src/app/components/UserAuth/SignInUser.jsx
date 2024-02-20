'use client'

import { useState } from 'react';
import { useAuth } from '@/authContext';
import Link from 'next/link';

const SignIn = () => {
  const { signIn } = useAuth();
  const [signInCredentials, setSignInCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = signInCredentials;

  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulate sign-in by retrieving user data from localStorage
    const storedUser = localStorage.getItem('nextAuthUser');
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (user) {
      signIn(user);
      console.log('User signed in successfully:', user);
    } else {
      console.log('User not found in localStorage');
    }

  };

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center rounded-xl py-4 bg-neutral-800'>
        <h1 className='text-4xl text-amber-500'>Next Movies</h1>
        <h2 className='text-3xl text-neutral-300 mb-6'>Sign In</h2>
        <form
          onSubmit={handleSignIn}
          className='flex flex-col space-y-4 py-4 px-6 w-[25rem]'
        >
          <div className='flex flex-col space-y-6 mb-4'>
            <input
              onChange={(e) =>
                setSignInCredentials({
                  ...signInCredentials,
                  email: e.target.value,
                })
              }
              type='email'
              className='bg-transparent focus:outline-none border-b border-neutral-300 placeholder:text-sm text-white tracking-wider placeholder:tracking-wider placeholder:opacity-30'
              placeholder='Email'
            />
            <input
              onChange={(e) =>
                setSignInCredentials({
                  ...signInCredentials,
                  password: e.target.value,
                })
              }
              type='password'
              className='bg-transparent focus:outline-none border-b border-neutral-300 placeholder:text-sm text-white tracking-wider placeholder:tracking-wider placeholder:opacity-30'
              placeholder='Password'
            />
          </div>
          <button
            type='submit'
            className='py-1 px-3 rounded bg-neutral-700 text-white text-xl focus:outline-none'
          >
            Sign In
          </button>
          <div className='flex justify-center items-center'>
            <p className='text-gray-300'>Don't have an account?<Link href='/auth/register' className='text-blue-300 hover:text-blue-500'> Register</Link> here.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;