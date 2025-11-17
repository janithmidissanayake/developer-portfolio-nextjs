import Image from 'next/image';
import React, { useContext } from 'react';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { ThemeContext } from '../../contexts/theme-context';
import { headerData } from '../../data/header-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/landing.module.css';
import Link from '../link';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    return (
        <div className={styles.landing} style={{
            background: theme.quaternary,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated gradient orbs */}
            <div 
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 animate-pulse"
                style={{ 
                    background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
                    animationDuration: '8s',
                    filter: 'blur(60px)'
                }}
            ></div>
            <div 
                className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-20 animate-pulse"
                style={{ 
                    background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
                    animationDuration: '10s',
                    filter: 'blur(80px)'
                }}
            ></div>
            <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 animate-pulse"
                style={{ 
                    background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
                    animationDuration: '12s',
                    filter: 'blur(70px)'
                }}
            ></div>

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className={`${styles.animateFloat} absolute rounded-full opacity-30`}
                    style={{
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        background: theme.primary,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 10 + 15}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        filter: 'blur(1px)'
                    }}
                ></div>
            ))}

            {/* Animated waves */}
            <div 
                className="absolute bottom-0 left-0 w-full h-32 opacity-5"
                style={{
                    background: `repeating-linear-gradient(
                        90deg,
                        ${theme.primary}00 0px,
                        ${theme.primary}40 50px,
                        ${theme.primary}00 100px
                    )`,
                    animation: 'wave 20s linear infinite'
                }}
            ></div>

            {/* Geometric shapes */}
            <div 
                className={`${styles.animateSpinSlow} absolute top-[15%] left-[10%] w-16 h-16 border-2 opacity-20`}
                style={{ 
                    borderColor: theme.primary,
                    borderRadius: '30%',
                    animationDuration: '20s'
                }}
            ></div>
            <div 
                className={`${styles.animateSpinSlow} absolute top-[60%] right-[15%] w-20 h-20 border-2 opacity-20`}
                style={{ 
                    borderColor: theme.primary,
                    borderRadius: '20%',
                    animationDuration: '25s',
                    animationDirection: 'reverse'
                }}
            ></div>
            <div 
                className={`${styles.animateSpinSlow} absolute bottom-[25%] left-[20%] w-12 h-12 border-2 opacity-20`}
                style={{ 
                    borderColor: theme.primary,
                    borderRadius: '40%',
                    animationDuration: '30s'
                }}
            ></div>

            {/* Animated lines */}
            <div 
                className="absolute top-[30%] left-0 w-full h-[1px] opacity-10"
                style={{
                    background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`,
                    animation: 'slide-right 15s linear infinite'
                }}
            ></div>
            <div 
                className="absolute bottom-[40%] right-0 w-full h-[1px] opacity-10"
                style={{
                    background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`,
                    animation: 'slide-left 18s linear infinite'
                }}
            ></div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-7xl mx-auto px-8 relative z-10 pt-16 md:pt-0">
                {/* Left Side - Profile Image */}
                <div className="flex-shrink-0 relative z-10 mt-8 md:mt-0">
                    {/* Animated rings around image */}
                    <div 
                        className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
                        style={{
                            border: `3px solid ${theme.primary}`,
                            animationDuration: '3s'
                        }}
                    ></div>
                    <div 
                        className="absolute inset-0 rounded-full animate-pulse opacity-30 pointer-events-none"
                        style={{
                            border: `4px solid ${theme.primary}`,
                            animationDuration: '2s'
                        }}
                    ></div>
                    
                    {/* Decorative corner accents */}
                    <div 
                        className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 rounded-tl-3xl opacity-60"
                        style={{ borderColor: theme.primary }}
                    ></div>
                    <div 
                        className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 rounded-br-3xl opacity-60"
                        style={{ borderColor: theme.primary }}
                    ></div>
                    
                    {/* Glowing backdrop circle */}
                    <div 
                        className="absolute inset-[-20px] rounded-full opacity-20 blur-2xl pointer-events-none"
                        style={{ background: theme.primary }}
                    ></div>
                    
                    {/* Main image with enhanced frame */}
                    <div 
                        className={`relative rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 ${styles.profileImageFrame}`}
                        style={{
                            border: `6px solid ${theme.primary}`,
                            boxShadow: `
                                0 0 0 3px ${theme.quaternary},
                                0 0 0 6px ${theme.primary}40,
                                0 0 40px ${theme.primary}60,
                                0 20px 60px rgba(0,0,0,0.3),
                                inset 0 0 20px rgba(0,0,0,0.1)
                            `,
                            background: `linear-gradient(135deg, ${theme.primary}20 0%, transparent 100%)`
                        }}
                    >
                        <Image
                            src={headerData.image}
                            alt={headerData.name}
                            width={350}
                            height={350}
                            style={{
                                opacity: `${drawerOpen ? '0' : '1'}`,
                                border: 'none',
                                borderRadius: '50%',
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        
                        {/* Gradient overlay on hover */}
                        <div 
                            className="absolute inset-0 rounded-full opacity-0 hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle, transparent 30%, ${theme.primary} 100%)`
                            }}
                        ></div>
                    </div>
                    
                    {/* Floating sparkles */}
                    <div 
                        className="absolute top-[10%] right-[5%] w-3 h-3 rounded-full animate-pulse opacity-70"
                        style={{ 
                            background: theme.primary,
                            boxShadow: `0 0 10px ${theme.primary}`,
                            animationDuration: '2s'
                        }}
                    ></div>
                    <div 
                        className="absolute bottom-[15%] left-[8%] w-2 h-2 rounded-full animate-pulse opacity-70"
                        style={{ 
                            background: theme.primary,
                            boxShadow: `0 0 8px ${theme.primary}`,
                            animationDuration: '3s',
                            animationDelay: '1s'
                        }}
                    ></div>
                    <div 
                        className="absolute top-[70%] right-[10%] w-2.5 h-2.5 rounded-full animate-pulse opacity-70"
                        style={{ 
                            background: theme.primary,
                            boxShadow: `0 0 8px ${theme.primary}`,
                            animationDuration: '2.5s',
                            animationDelay: '0.5s'
                        }}
                    ></div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 flex flex-col items-start justify-center max-w-2xl relative z-10">
                    <div className="w-full" style={{ color: theme.tertiary }}>
                        {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ color: theme.tertiary }}>
                            {headerData.name}
                        </h1>
                        <TypeAnimation
                            sequence={[
                                'Backend Developer',
                                2000,
                                'Frontend Developer',
                                2000,
                                'Fullstack Developer',
                                2000,
                            ]}
                            speed={50}
                            className="text-xl font-medium block mb-6"
                            style={{ color: theme.primary }}
                            repeat={Infinity}
                        />
                        <p className="text-lg leading-relaxed mb-4 opacity-90" style={{ color: theme.tertiary }}>
                            {headerData.desciption}
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center sm:justify-start mt-8 mb-6 relative z-20 w-full">
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                    className="cursor-pointer w-full sm:w-auto"
                                >
                                    <button
                                        className="w-full sm:w-[180px] text-[#1D9BF0] 
                                        rounded-[30px] no-underline text-base 
                                        font-medium h-12 border-[3px] border-[#1D9BF0] 
                                        transition duration-100 ease-out 
                                        hover:bg-[#8B98A5] hover:text-[#15202B]
                                         hover:border-[#8B98A5] cursor-pointer"
                                    >
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <Link href='/#contacts' className="cursor-pointer w-full sm:w-auto">
                                <button className="w-full sm:w-[180px] bg-[#1D9BF0] 
                                text-[#15202B] rounded-[30px] no-underline	
                                text-base font-medium h-12 border-[3px]
                                 border-[#1D9BF0] transition duration-100 
                                 ease-out hover:bg-[#8B98A5] hover:text-[#15202B]
                                  hover:border-[#8B98A5] cursor-pointer"
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4 mt-6 relative z-20">
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-2xl
                                             transition-all duration-300 hover:scale-110 cursor-pointer"
                                    style={{ color: theme.primary }}
                                >
                                    <FaLinkedin aria-label='LinkedIn' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-2xl
                                             transition-all duration-300 hover:scale-110 cursor-pointer"
                                    style={{ color: theme.primary }}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-2xl
                                             transition-all duration-300 hover:scale-110 cursor-pointer"
                                    style={{ color: theme.primary }}
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.facebook && (
                                <a
                                    href={socialsData.facebook}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-2xl
                                             transition-all duration-300 hover:scale-110 cursor-pointer"
                                    style={{ color: theme.primary }}
                                >
                                    <FaFacebook aria-label='Facebook' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Landing;
