import React from 'react'
import { NavLink } from 'react-router-dom'
const Welcome = () => {

  return (
    <div className='w-full min-h-screen flex justify-center '>
      <div className='w-sm gap-2 p-4 h-screen bg-gray-200 flex flex-col justify-end'>
        <h2 className='font-bold leading-8 text-black text-2xl'>Welcome to PopX</h2>
        <p className='font-sm text-md tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        <button className=' rounded-md h-10 bg-[#6c25ff] text-center text-white font-bold '><NavLink to={`/signup`}>Create Account</NavLink></button>
        <button className='rounded-md  h-10 bg-[#cebafb] text-center font-bold '><NavLink to={`/signin`}>Already Registered? Login</NavLink></button>
      </div>
    </div>
  )
}

export default Welcome
