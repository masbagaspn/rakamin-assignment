import React from 'react'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='p-4 flex space-between items-center border-b-2'>
        <span className='font-bold'>Rakamin</span>
        <Navigation />
    </header>
  )
}

export default Header