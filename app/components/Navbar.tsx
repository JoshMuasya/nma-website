'use client'

import React, { useState } from 'react'
import Links from './Links'
import Link from 'next/link';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

  return (
    <nav className='fixed top-0 left-0 h-fit w-full z-50 font-poppins font-bold text-lg text-base-content'>
        {/* Displayed on screens below 1024px */}
        <div className='lg:hidden flex flex-row justify-between px-10 py-10'>
            {/* Logo */}
            <div>
                Logo
            </div>

            {/* Menu Icon */}
            <div className='z-20'>
                <button onClick={toggleDrawer}>
                    {isDrawerOpen ? <CloseIcon className='text-4xl' /> : <MenuIcon className='text-4xl' />}
                </button>
            </div>
        </div>

        {/* Contents */}
        <div className='hidden lg:flex flex-row py-10 px-28 justify-between align-middle items-center'>
            {/* Logo */}
            <div>
                Logo
            </div>

            {/* Links */}
            <div className='flex flex-col justify-end items-end align-middle'>
                {/* Social Media */}
                <div className='flex flex-row justify-around align-middle items-center w-full pb-5'>
                    <Link
                        href='https://twitter.com'
                    >
                        <TwitterIcon />
                    </Link>

                    <Link
                        href='https://instagram.com'
                    >
                        <InstagramIcon />
                    </Link>

                    <Link
                        href='https://linkedin.com'
                    >
                        <LinkedInIcon />
                    </Link>
                </div>

                {/* Menu */}
                <div className='flex flex-row justify-center align-middle items-center'>
                    {/* About */}
                    <Links
                        href=''
                        title='About Us'
                        linkClass={'pr-3'}
                    />

                    {/* line */}
                    <div className='border-l h-4 border-base-content pl-3' />

                    {/* Expertise */}
                    <Links
                        href=''
                        title='Expertise'
                        linkClass={'pr-3'}
                    />

                    {/* line */}
                    <div className='border-l h-4 border-base-content pl-3' />

                    {/* Contact Us */}
                    <Links
                        href=''
                        title='Contact Us'
                        linkClass={'pr-0'}
                    />
                </div>
            </div>
        </div>

        {/* Drawer */}
        {isDrawerOpen && (
            <div className='lg:hidden z-10 bg-neutral-content fixed right-0 top-0 w-full h-full flex flex-col justify-center align-middle items-center'>
                {/* Menus */}
                <div className='flex flex-col justify-around align-middle items-center h-1/3 '>
                    <Links
                        href=''
                        title='About Us'
                        linkClass={'text-3xl'}
                    />

                    <Links
                        href=''
                        title='Expertise'
                        linkClass={'text-3xl'}
                    />

                    <Links
                        href=''
                        title='Contact Us'
                        linkClass={'text-3xl'}
                    />
                    
                </div>

                {/* Social Media */}
                <div className='flex flex-row justify-around align-middle items-center w-full pt-16'>
                    <Link
                        href='https://twitter.com'
                    >
                        <TwitterIcon className='text-4xl' />
                    </Link>

                    <Link
                        href='https://instagram.com'
                    >
                        <InstagramIcon className='text-4xl' />
                    </Link>

                    <Link
                        href='https://linkedin.com'
                    >
                        <LinkedInIcon className='text-4xl' />
                    </Link>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar