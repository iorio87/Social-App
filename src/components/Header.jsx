import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    const menuItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Add Post',
            path: '/addpost'
        },
        {
            title: 'Shares',
            path: '/shares'
        },
        {
            title: 'Profile',
            path: '/profile'
        }
    ]

    return (
        <div className='p-5 bg-primary'>
            <div className='flex space-x-10 justify-end items-center'>
                {menuItems.map(item => {
                    return <Link to={item.path}
                                 className={`${item.path === location.pathname && 'bg-white rounded py-1 px-3'}`}>
                                {item.title}
                            </Link>
                })}
            </div>
        </div>
    )
}

export default Header