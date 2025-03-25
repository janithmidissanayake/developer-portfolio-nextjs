import React, { useState, useEffect } from 'react';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { MdPhone } from 'react-icons/md';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';

const ResponsiveNavbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkMobileView = () => {
            setIsMobile(window.innerWidth <= 1100);
        };

        // Check initial view
        checkMobileView();

        // Add event listener to check on resize
        window.addEventListener('resize', checkMobileView);

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkMobileView);
    }, []);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Add your theme change logic here
    };

    const NavLinks = () => (
        <div className="flex flex-col  md:flex-row items-center mx-24 justify-between space-y-4 md:space-y-0 md:space-x-10 text-white">
            <Link href="/" className="nav-link">
                <span>Home</span>
            </Link>
            <Link href="/#about" className="nav-link">
                <span>About</span>
            </Link>
            <Link href="/#resume" className="nav-link">
                <span>Resume</span>
            </Link>
            <div onClick={toggleDarkMode} className="nav-link cursor-pointer">
                {isDarkMode ? <BsFillSunFill className="nav-icon" /> : <BsFillMoonFill className="nav-icon" />}
            </div>
            <Link href="/#blog" className="nav-link">
                <span>Blog</span>
            </Link>
            <Link href="/#contacts" className="nav-link">
                <span>Contact</span>
            </Link>
        </div>
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-500 mx-24">JANITHMI</h1>

                {/* Mobile View */}
                {isMobile ? (
                    <>
                        <IoMenuSharp 
                            className="text-3xl text-blue-500 cursor-pointer"
                            onClick={toggleDrawer}
                        />
                        {isDrawerOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-60">
                                <div className="fixed top-0 left-0 w-64 h-full bg-blue-900 p-6 transform transition-transform">
                                    <AiOutlineCloseCircle 
                                        className="text-3xl text-blue-500 absolute top-4 right-4 cursor-pointer"
                                        onClick={toggleDrawer}
                                    />
                                    <div className="mt-16">
                                        <NavLinks />
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    // Desktop View
                    <NavLinks />
                )}
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;