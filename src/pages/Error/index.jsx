import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <div
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-duration="700"
        data-aos-delay="500"
        className='bg-gray-400 dark:bg-gray-800 shadow-lg max-w-[600px] max-h-[300px] w-full h-full rounded flex flex-col gap-7 justify-center items-center'
      >
        <h1 className='text-4xl'>Somthing Went Off</h1>
        <Link
          to={"/"}
          className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-full flex items-center gap-3 hover:from-secondary hover:to-primary duration-200'
        >
          Go To Home ?!
        </Link>
      </div>
    </div>
  )
}

export default Error