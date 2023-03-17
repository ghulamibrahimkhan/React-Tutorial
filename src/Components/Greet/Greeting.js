import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Greeting = () => {
  return (
    <>
    <div className='flex justify-center bg-cyan-100 text-3xl h-10 items-center'>Greeting</div>
    <div className='flex justify-center bg-blue-400 text-xl h-10 items-center'>
    <Link className='m-10' to={'Mgreet'}>Muslim</Link>
    <Link className='m-10' to={'Cgreet'}>Chiristan</Link>
    <Link className='m-10' to={'Hgreet'}>Hindu</Link>
    </div>
    <Outlet />
    </>
  )
}

export default Greeting