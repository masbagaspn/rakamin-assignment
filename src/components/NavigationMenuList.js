import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenuList({to, handleClick, name}) {
  return (
    <li>
      <Link
        to={to}
        onClick={handleClick}
        className='pb-4 text-sm cursor-pointer text-blue-400 hover:font-semibold'
      >
        {name}
      </Link>
    </li>
  )
}

export default NavigationMenuList