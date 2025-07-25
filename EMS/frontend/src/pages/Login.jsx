import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className='flex flex-col items-center h-screen justify-center bg-gradient-to-b from-indigo-500 from-50% to-gray-100 to-50% space-y-6 '>
          <h2 className='font-pacific text-4xl text-white'>Employee Management System</h2>
          <div className='boarder shadow p-6 w-80 bg-white'>
              <h2 className='text-2xl font-bold mb-4'>Login</h2>

          <form action="">
             
              <div className='mb-4'>
                  <label htmlFor="email" className='block 
                   text-gray-700'></label>
                  <input type="email" name="email" id="email" placeholder="email" className='w-full px-3 py-2 border' onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                  <label htmlFor="password" className='block text-gray-700'></label>
                  <input type="password" name="password" id="password" placeholder="password" className='w-full px-3 py-2 border' />
                  </div>
                  <div className='flex items-center mb-4 justify-between'>
                      <label htmlFor="" className='inline-flex items-center'>
                          <input type="checkbox" className='form-checkbox'/>
                          <span className='ml-2 text-gray-700'>Remember me</span>
                      </label>
                      <a href="#" className=' text-teal-600'>Forgot password?</a>
                  </div>
                  <div className='mb-4'>
                      <button type="submit" className='w-full py-2 bg-teal-600 text-white'>Login</button>
                  </div>
              
              </form>
          </div>
    </div>
  )
}

export default Login
