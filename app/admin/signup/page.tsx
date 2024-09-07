import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center pt-36'>
        <form>
            <h2 className='text-center text-4xl font-bold'>Sign Up / Register</h2>
            <h2 className='mt-24 text-2xl'>Username</h2>
            <input type='text' placeholder='username' className='p-2 rounded-lg mt-2 md:w-full'/>
            <h2 className='mt-8 text-2xl'>Password</h2>
            <input type='password' placeholder='password' className='p-2 rounded-lg mt-2 md:w-full'/>
            <h2 className='mt-8 text-2xl'>Confirm Password</h2>
            <input type='password' placeholder='confirm password' className='p-2 rounded-lg mt-2 md:w-full'/><br/>
            <button className='btn btn-primary mt-8'>Sign Up</button>
            <h2 className='mt-2'>Already Register, <Link href="/admin/signin"><span className='underline'>Login</span></Link></h2>
        </form>
    </div>
  )
}

export default page


