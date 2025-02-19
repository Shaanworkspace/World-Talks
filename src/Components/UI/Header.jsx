import React from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'


const Header = () => {
    return (
        <nav>
            <div className="fixed top-0 left-0 w-full  whitespace-nowrap bg-green-700 h-20 flex justify-center text-white pt-3 items-center">
                <div className="flex w-[80%] items-center justify-between ">

                    {/* Logo Section*/}
                    <div className="text-3xl xl:text-5xl font-semibold  flex whitespace-nowrap">
                        <NavLink to="/">
                            <h1>World Atlas</h1>
                        </NavLink>
                    </div>

                    {/* Menu Section */}
                    <div className='hidden sm:flex'>
                        <ul className='flex gap-8 text-lg'>
                            <li >
                                <NavLink to="/">
                                    <h1>Home</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    <h1>About</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">
                                    <h1>Contact</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/country">
                                    <h1>Country</h1>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile hamburger Menu Section */}
                    <div className='sm:hidden'>
                        <DropDown />
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Header