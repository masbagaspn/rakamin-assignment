import React from 'react'
import NavigationMenuList from './NavigationMenuList'

function NavigationMenu({closeMenu}) {
    const menus = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
    ]

    return (
        <>
            <span className='font-bold text-sm'>Rakamin</span>
            <hr/>
            <ul className='flex flex-col gap-4 text-green-600'>
                {
                    menus.map((menu, index) => <NavigationMenuList key={index} to={menu.link} name={menu.name} handleClick={closeMenu} />)
                }
            </ul>
        </>
    )
}

export default NavigationMenu