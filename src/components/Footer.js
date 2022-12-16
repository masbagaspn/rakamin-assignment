import React from 'react'

function Footer() {
  return (
    <div className='absolute bottom-0 left-0 w-full h-[5vh] justify-self-end bg-blue-100 flex justify-center items-center gap-2'>
        <img className='w-4 h-4' src='/assets/copyright.png' alt='copyright' />
        <span className='text-xs font-semibold'>Copyright 2022</span>
    </div>
  )
}

export default Footer