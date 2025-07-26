import React, { useState } from 'react'
import axios from 'axios'

import {  useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)

    const { login } = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });

            console.log(response);
            if (response.data.success) {
                login(response.data.user)
                localStorage.setItem("token", response.data.token)
                if (response.data.user.role === "admin") {
                    navigate("/admin-dashboard")
                }
                else {
                    navigate("/employee-dashboard")
                }

            }
        } catch (error) {
            setError(error.response.data.message)
        }

    }

    return (
        <div className='flex flex-col items-center h-screen justify-center bg-gradient-to-b from-indigo-500 from-50% to-gray-100 to-50% space-y-6 '>
            <h2 className='font-pacific text-4xl text-white'>Employee Management System</h2>
            <div className='boarder shadow p-6 w-80 bg-white'>
                <h2 className='text-2xl font-bold mb-4'>Login</h2>

                {error && <p className='text-red-500'>{error}</p>}

                <form action="" onSubmit={handleSubmit}>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block 
                   text-gray-700'></label>
                        <input type="email" name="email" id="email" placeholder="email" required className='w-full px-3 py-2 border' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-gray-700'></label>
                        <input type="password" name="password" id="password" placeholder="password" required className='w-full px-3 py-2 border' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex items-center mb-4 justify-between'>
                        <label htmlFor="" className='inline-flex items-center'>
                            <input type="checkbox" className='form-checkbox' />
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
