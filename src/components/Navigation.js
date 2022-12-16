import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from '@react-spring/web'

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const menuTransitions = useTransition(isMenuOpen, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    const maskTransitions = useTransition(isMenuOpen, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    
    return (
        <nav>
            <span className='cursor-pointer'>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </span>
            {
                menuTransitions((style, item) => (
                    item && 
                        <animated.div 
                            style={style}
                            className='fixed w-4/5 top-0 left-0 bg-white h-full z-20 shadow-lg'
                        >
                            This is the menu
                        </animated.div>
                ))
            }
            {
                maskTransitions((style, item) => (
                    item &&
                        <animated.div
                            style={style}
                            className='fixed w-full top-0 left-0 bg-black/30 h-full z-10 backdrop-blur-sm cursor-pointer'
                            onClick={() => setIsMenuOpen(false)}
                        />
                ))
            }
        </nav>
    )
}

export default Navigation