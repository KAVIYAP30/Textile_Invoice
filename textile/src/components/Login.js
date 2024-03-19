import React, { useState } from 'react';
// import { AiFillGoogleCircle } from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [signInData,setSignInData] = useState(
    {
      email:'',
      password:'',
    }
  )

  const handleSignInChanges=(e)=>
  {
    const {name,value} = e.target;
    setSignInData({...signInData,[name]:value});
  }
  const handleSubmit=async(e)=>
  {
    try {
      const response = await axios.post("http://localhost:9010/signin", signInData);
      // console.log(response.data);
      if(response.data.message==="Email not found!" || response.data.message === "wrong credentials")
      {
        console.log(response.data);
      }
      setSignInData({
          email_verify: '',
          password_verify: '',
      });
  } catch (error) {
          console.log(error);
          console.log("Error occurred during signing in!");
  }
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-6'>Login</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='text-gray-600 font-semibold block mb-1'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={signInData.email}
              onChange={handleSignInChanges}
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
              name='password'
              placeholder='Enter your password'
              value={signInData.password}
              onChange={handleSignInChanges}
              required
              className='w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='bg-purple-600 text-white h-10 rounded-full w-full hover:bg-purple-800 transition duration-300'
            >
              Login
            </button>
          </div>
        </form>
        <div className='mt-4 flex items-center justify-center'>
          <span className='text-gray-600'>Need  an account? </span>
          <Link to="/Signup" className='text-purple-600 font-semibold underline'>SignUp</Link>
        </div>
        <div className='mt-6 flex items-center justify-center'>
          <span className='text-gray-600 mr-2'>Or sign up with</span>
          {/* <AiFillGoogleCircle className='text-red-600 cursor-pointer' /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
