import React from 'react'

function Login() {
  return (
    <div className='w-[100%] h-screen  flex justify-center gap-x-16 items-center'>
      <div className=' p-6 w-[400px] '>
        <h1 className='text-3xl font-bold text-blue-500 mb-4'>FaceBook</h1>
        <p className='text-xl text-gray-600 font-semibold'>Connect with friends and the World around you on facebook.</p>
      </div>
      <div className=' w-[400px] shadow-2xl rounded-2xl '>
        {/* login form */}
        <form className='flex flex-col p-3 py-4 gap-4 '>
            <input className=' border-2 px-1 py-2 rounded-md'  type="text" placeholder="Email" />
            <input className='border-2  px-1 py-2 rounded-md ' type="password" placeholder="Password" />
            <button className='border-2  bg-blue-500 text-white px-1 py-2 rounded-xl text-xl' type="submit">Login</button>
            <span className='font-bold text-blue-400 text-center'>Forget password?</span>
            <button className='border-2 bg-blue-500 text-white rounded-xl text-xl  px-1 py-2 ' type='submit'>Create a New Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
