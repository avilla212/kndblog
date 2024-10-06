"use client"

import { useRouter } from 'next/navigation'
import {useState, FormEvent, use} from 'react'
import React from 'react'


const loginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log('Loggin in with: ', username, password)

        // Default 
        const user: string = 'user'
        const pass: string = 'pass'

        if (user === 'user' && pass === 'pass'){
            router.push('../blog')
        } else {
            alert('Incorrect username or password')
        }
    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-[#8ba888] p-4'>
            <div className='p-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-lg font-bold mb-6 text-center'>Login to your account</h2>
                <form onSubmit={handleSubmit} className='space y-4'>
                    <div className="">
                        <label htmlFor='username' className='block text-sm font-medium text-gray 400'>Username</label>
                        <input 
                            type='text'
                            id='username'
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}  
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        
                        />
                    </div>

                    <label htmlFor='password' className='block text-sm font-medium text-gray 400'>Pass</label>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />

                    <button type='submit' className='w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Log In
                    </button>

                </form>
            </div>
        </div>
    )
}

export default loginPage;