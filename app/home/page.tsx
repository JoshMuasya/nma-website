import React from 'react'
import Navbar from '../components/Navbar'
import Links from '../components/Links'

const Home = () => {
  return (
    <div>
        <div className='h-fit hero-background relative flex flex-col justify-center align-middle'>
            <Navbar />

            {/* SlideShow */}
            <div className='h-screen flex flex-col justify-center align-middle pl-20 font-poppins text-6xl'>
                {/* Header */}
                <div className='font-bold'>
                    Explore our <br />
                    Expertise
                </div>

                {/* Buttons */}
                <div className='pt-5'>
                    <Links 
                        href=''
                        title='Expertise'
                        linkClass='text-5xl font-pre'
                    />
                </div>
            </div>

            {/* About */}
            <div className='w-full'>
                <div className='flex flex-row justify-around align-middle items-center pb-40'>
                    {/* Left */}
                    <div>
                        {/* Title */}
                        <div className='text-5xl font-bold pb-5'>
                            About Us
                        </div>

                        {/* Content */}
                        <div className='font-poppins text-lg pb-5'>
                            NMA is more than a law firm. Our Vision, . Our Mission, .
                        </div>

                        {/* Button */}
                        <Links 
                            href=''
                            title='Read More'
                            linkClass=''
                        />
                    </div>

                    {/* Right */}
                    <div className='flex flex-col justify-center align-middle w-full max-w-md font-poppins text-3xl text-base-content'>
                        <div className='pb-3'>
                            {/* About Us */}
                            <Links 
                                href=''
                                title='About Us'
                                linkClass=''
                            />
                        </div>

                        <div className='border-base-content border-t-4 w-full pb-6' />

                        <div className='pb-3'>
                            {/* Expertise */}
                            <Links 
                                href=''
                                title='Expertise'
                                linkClass=''
                            />
                        </div>

                        <div className='border-base-content border-t-4 w-full pb-6' />

                        <div className='pb-3'>
                            {/* Contact Us */}
                            <Links 
                                href=''
                                title='Contact Us'
                                linkClass=''
                            />
                        </div>

                        <div className='border-base-content border-t-4 w-full' />
                    </div>
                </div>
            </div>
        </div>

        {/* Services */}
        <div className='pt-20'>
            Services
        </div>
    </div>
  )
}

export default Home