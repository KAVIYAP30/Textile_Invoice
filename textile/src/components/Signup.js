import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-6'>Register</h2>
        <form className='space-y-4'>
          <div>
            <label htmlFor='email' className='text-gray-600 font-semibold block mb-1'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              required
              className='w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600'
            />
          </div>
          <div>
            <label htmlFor='password' className='text-gray-600 font-semibold block mb-1'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              required
              className='w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='bg-purple-600 text-white h-10 rounded-full w-full hover:bg-purple-800 transition duration-300'
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='mt-4 flex items-center justify-center'>
          <span className='text-gray-600'>Already have an account? </span>
          <Link to="/login" className='text-purple-600 font-semibold underline'>Login</Link>
        </div>
        <div className='mt-6 flex items-center justify-center'>
          <span className='text-gray-600 mr-2'>Or sign up with</span>
          <AiFillGoogleCircle className='text-red-600 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Signup;
