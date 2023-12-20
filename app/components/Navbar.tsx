import React from 'react'
import Links from './Links'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 h-fit w-screen z-20 font-poppins font-bold text-lg text-base-content'>
        {/* Contents */}
        <div className='flex flex-row py-10 px-28 justify-between align-middle items-center'>
            {/* Logo */}
            <div>
                Logo
            </div>

            {/* Links */}
            <div className='flex flex-col justify-end items-end align-middle'>
                {/* Social Media */}
                <div>
                    Social Media
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
    </div>
  )
}

export default Navbar