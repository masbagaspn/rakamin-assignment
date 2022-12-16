import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='w-full p-4 flex justify-between items-center border-b-2'>
        <Link to='/'>
          <span className='font-bold'>Rakamin</span>
        </Link>
        <Navigation />
    </header>
  )
}

export default Header