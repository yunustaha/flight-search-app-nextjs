import React from 'react'

const Header = () => {
  return (
    <>
      <div className='absolute z-10 bg-primary-photo bg-center h-[40vh] w-full' />
      <main className='relative flex z-20 justify-center text-white pt-20'>
        <h1 className='text-3xl lg:text-5xl font-semibold '>Flight Search Application</h1>
      </main>
    </>
  )
}

export default Header