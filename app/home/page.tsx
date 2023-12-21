import React from 'react'
import Navbar from '../components/Navbar'
import Links from '../components/Links'
import ServiceCard from '../components/ServiceCard'
import ProgressBar from '../components/ProgressBar'
import Link from 'next/link'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                    <div className='flex flex-col lg:flex-row justify-around align-middle items-center pb-40'>
                        {/* Left */}
                        <div className='w-full px-20 pb-16 lg:w-fit lg:px-0 lg:pb-0'>
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
                        <div className='flex flex-col justify-center align-middle w-full lg:max-w-md font-poppins text-3xl text-base-content px-20 lg:px-0'>
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
                {/* Title */}
                <div className='flex flex-row justify-between align-middle items-center px-20 pb-10'>
                    {/* Left */}
                    <div>
                        Services
                    </div>

                    {/* Right */}
                    <div>
                        <Links
                            href=''
                            title='Read More'
                            linkClass=''
                        />
                    </div>
                </div>

                {/* Card */}
                <div className='flex flex-row justify-center align-middle items-center px-20 pb-16'>
                    <div className="carousel carousel-center rounded-box">
                        <div className="carousel-item">
                            <ServiceCard
                                source=''
                                alt=''
                                title=''
                                content=''
                                link=''
                                cardClass='pl-6'
                            />
                        </div>
                        <div className="carousel-item">
                            <ServiceCard
                                source=''
                                alt=''
                                title=''
                                content=''
                                link=''
                                cardClass='pl-6'
                            />
                        </div>
                        <div className="carousel-item">
                            <ServiceCard
                                source=''
                                alt=''
                                title=''
                                content=''
                                link=''
                                cardClass='pl-6'
                            />
                        </div>
                        <div className="carousel-item">
                            <ServiceCard
                                source=''
                                alt=''
                                title=''
                                content=''
                                link=''
                                cardClass='pl-6'
                            />
                        </div>
                        <div className="carousel-item">
                            <ServiceCard
                                source=''
                                alt=''
                                title=''
                                content=''
                                link=''
                                cardClass='pl-6'
                            />
                        </div>
                        <div className="carousel-item">
                            <ServiceCard
                                source=''
                                alt=''
                                title=''
                                content=''
                                link=''
                                cardClass='pl-6'
                            />
                        </div>
                        <div className="carousel-item">
                            <ServiceCard
                                source=''
                                alt=''
                                title=''
                                content=''
                                link=''
                                cardClass=''
                            />
                        </div>
                    </div>
                </div>

                {/* Progess Bar, Action Button, Counter */}
                <div className=''>
                    {/* Action Button, Counter */}
                    <div className='flex flex-row justify-between align-middle px-10'>
                        {/* Counter */}
                        <div className='text-6xl'>
                            1/10
                        </div>

                        {/* Action Button */}
                        <div className='flex flex-row justify-center align-middle'> 
                            {/* Left */}
                            <div className='border-4 p-3 rounded-full border-base-content w-fit'>
                                <Link
                                    href=''
                                >
                                    <ArrowBackIcon 
                                        className='text-4xl'
                                    />
                                </Link>
                            </div>

                            {/* Right */}
                            <div className='border-4 p-3 rounded-full border-base-content w-fit ml-3'>
                                <Link
                                    href=''
                                >
                                    <ArrowForwardIcon 
                                        className='text-4xl'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className='px-10 pb-16 pt-8'>
                        <ProgressBar />
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <div className='flex flex-col justify-center align-middle items-center py-16 px-10 w-full'>
                {/* Top */}
                <div className='flex lg:flex-row flex-col justify-center items-center lg:items-start lg:justify-around align-middle w-full py-5'>
                    {/* Logo */}
                    <div className='pb-8 lg:pb-0'>
                        Logo
                    </div>

                    {/* Form to get Email */}
                    <div className='w-full lg:max-w-md'>
                        {/* Title */}
                        <div className='pb-5 font-poppins font-bold text-2xl'>
                            Get in Touch with Us
                        </div>

                        {/* Form */}
                        <form 
                            action=""
                            className='flex flex-col justify-center align-middle'
                        >
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="input input-bordered w-full max-w-xs mb-3" 
                            />

                            <input 
                                type="text" 
                                placeholder="email" 
                                className="input input-bordered w-full max-w-xs mb-3" 
                            />

                            <textarea 
                                className="textarea textarea-bordered w-full max-w-xs mb-3" 
                                placeholder="Message"
                            ></textarea>

                            <button>
                                Submit
                            </button>
                        </form>

                    </div>

                    {/* Social Media */}
                    <div className='flex flex-col align-middle justify-center items-center lg:items-start lg:w-1/5 w-2/3 pt-8 lg:pt-0'>
                        {/* Title */}
                        <div className='pb-5 font-poppins font-bold text-2xl lg:text-xl'>
                            Our Social Media
                        </div>

                        {/* Links */}
                        <div className='flex flex-row w-full justify-around align-middle'>
                            <Link
                                href=''
                            >
                                <TwitterIcon />
                            </Link>

                            <Link
                                href=''
                            >
                                <InstagramIcon />
                            </Link>

                            <Link
                                href=''
                            >
                                <LinkedInIcon />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div>
                    {/* Services */}
                    <div>
                        Services
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home