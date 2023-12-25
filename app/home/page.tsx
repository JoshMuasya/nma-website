'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Links from '../components/Links'
import ServiceCard from '../components/ServiceCard'
import ProgressBar from '../components/ProgressBar'
import Link from 'next/link'
import servicesData from '../data/servicesData'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EastIcon from '@mui/icons-material/East';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Home = () => {

    const [isHover, setIsHover] = useState(false);
    const [isAboutHover, setIsAboutHover] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [currentItem, setCurrentItem] = useState(1);
    const totalItems = servicesData.length

    const startIndex = (currentItem - 1) % totalItems
    const endIndex = (startIndex + 3) % totalItems

    const visibleItems = getVisibleItems(startIndex, endIndex)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    function getVisibleItems(start: number, end: number) {
        if (end >= start) {
            return servicesData.slice(start, end)
        } else {
            return [...servicesData.slice(start), ...servicesData.slice(0, end)]
        }
    }

    const handleNext = () => {
        setCurrentItem((prevItem) => (prevItem % 10) + 1);
    };

    const handlePrev = () => {
        setCurrentItem((prevItem) => (prevItem - 2 + 10) % 10 + 1);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleAboutMouseLeave = () => {
        setIsAboutHover(false);
    };

    const handleAboutMouseEnter = () => {
        setIsAboutHover(true);
    };

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
                    <div
                        className='mt-5 bg-primary w-fit h-fit rounded-lg px-3 pt-1 pb-3 flex flex-row justify-center align-middle items-center transition-all duration-300 ease-in-out'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Links
                            href=''
                            title='Expertise'
                            linkClass='text-4xl font-pre'
                        />

                        {isHover ?
                            <NorthEastIcon className='pl-3 pt-1 text-5xl' />
                            : <EastIcon className='pl-3 pt-1 text-5xl' />}
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
                            <div
                                className='mt-5 bg-primary w-fit h-fit rounded-lg px-3 pt-1 pb-3 flex flex-row justify-center align-middle items-center transition-all duration-300 ease-in-out'
                                onMouseEnter={handleAboutMouseEnter}
                                onMouseLeave={handleAboutMouseLeave}
                            >
                                <Links
                                    href=''
                                    title='Read More'
                                    linkClass='text-4xl font-pre'
                                />

                                {isAboutHover ?
                                    <NorthEastIcon className='pl-3 pt-1 text-5xl' />
                                    : <EastIcon className='pl-3 pt-1 text-5xl' />}
                            </div>
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
                <div className='flex flex-row justify-center p-5'>
                    {visibleItems.map((item, index) => (
                        <ServiceCard key={index} {...item} />
                    ))}
                </div>

                {/* Progess Bar, Action Button, Counter */}
                <div className=''>
                    {/* Action Button, Counter */}
                    <div className='flex flex-row justify-between align-middle px-10'>
                        {/* Counter */}
                        <div className='text-5xl lg:text-6xl'>
                            {currentItem}/{totalItems}
                        </div>

                        {/* Action Button */}
                        <div className='flex flex-row justify-center align-middle'>
                            {/* Left */}
                            <div className='border-4 p-3 rounded-full border-base-content w-fit'>
                                <button
                                    onClick={handlePrev}
                                >
                                    <ArrowBackIcon
                                        className='text-2xl lg:text-4xl'
                                    />
                                </button>
                            </div>

                            {/* Right */}
                            <div className='border-4 p-3 rounded-full border-base-content w-fit ml-3'>
                                <button
                                    onClick={handleNext}
                                >
                                    <ArrowForwardIcon
                                        className='text-2xl lg:text-4xl'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className='px-10 pb-16 pt-8'>
                        <ProgressBar currentItem={currentItem} />
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

                            <button
                                className='mt-5 bg-primary w-fit h-fit rounded-lg px-3 pt-1 pb-3 transition-all duration-300 ease-in-out'
                            >
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

            {/* Floating icon for scrolling to the top */}
            {isScrolled && (
                <div
                    className="fixed bottom-4 right-4 bg-primary p-3 rounded-full cursor-pointer"
                    onClick={scrollTop}
                >
                    <ArrowCircleUpIcon className="" />
                </div>
            )}
        </div>
    )
}

export default Home