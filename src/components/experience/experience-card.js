import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import { ThemeContext } from '../../contexts/theme-context';


function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Fade direction="up" triggerOnce cascade>
            <div 
                key={id} 
                className="relative w-full mb-6 p-6 rounded-2xl overflow-hidden 
                          transition-all duration-500 ease-out
                          hover:scale-[1.02] hover:shadow-2xl
                          group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    background: `linear-gradient(135deg, ${theme.type === 'light' ? '#ffffff' : '#1E2732'} 0%, ${theme.type === 'light' ? '#f8f9fa' : '#2a3544'} 100%)`,
                    borderLeft: `5px solid ${theme.primary}`,
                    boxShadow: isHovered 
                        ? `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${theme.primary}30`
                        : `0 10px 30px rgba(0,0,0,0.2)`,
                }}
            >
                {/* Animated gradient overlay */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.primary}05 100%)`
                    }}
                ></div>
                
                {/* Animated border shimmer */}
                <div 
                    className="absolute top-0 left-0 w-full h-[2px] transform -translate-x-full 
                              group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                    style={{ background: theme.primary }}
                ></div>

                <div className="relative flex items-start gap-5">
                    {/* Icon with animations */}
                    <div className="relative flex-shrink-0">
                        <div 
                            className={`w-16 h-16 rounded-full flex items-center justify-center
                                      transition-all duration-500
                                      ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
                                      shadow-lg`}
                            style={{ 
                                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primary}dd 100%)`,
                                boxShadow: isHovered 
                                    ? `0 0 30px ${theme.primary}80, 0 5px 15px rgba(0,0,0,0.3)` 
                                    : `0 0 15px ${theme.primary}40, 0 3px 10px rgba(0,0,0,0.2)`
                            }}
                        >
                            <Image 
                                src={theme.type === 'light' ? expImgBlack : expImgWhite} 
                                alt="" 
                                width={36}
                                height={36}
                                className={`transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                            />
                        </div>
                        
                        {/* Pulse ring effect */}
                        <div 
                            className={`absolute inset-0 rounded-full border-2 
                                      transition-all duration-1000
                                      ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-70'}`}
                            style={{ borderColor: theme.primary }}
                        ></div>
                        
                        {/* Second pulse ring */}
                        <div 
                            className={`absolute inset-0 rounded-full border-2 
                                      transition-all duration-1000 delay-200
                                      ${isHovered ? 'scale-[1.7] opacity-0' : 'scale-100 opacity-50'}`}
                            style={{ borderColor: theme.primary }}
                        ></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                        {/* Date badge */}
                        <div className="flex items-center gap-2 mb-3">
                            <span 
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                                          transition-all duration-300 hover:scale-105"
                                style={{ 
                                    color: theme.primary,
                                    background: `${theme.primary}20`,
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {startYear} - {endYear}
                            </span>
                        </div>

                        {/* Job title */}
                        <h4 
                            className="text-xl font-bold leading-tight mb-2
                                     transition-all duration-300 
                                     group-hover:translate-x-1"
                            style={{ color: theme.tertiary }}
                        >
                            {jobtitle}
                        </h4>

                        {/* Company */}
                        <div 
                            className="flex items-center gap-2 text-base font-medium
                                     transition-all duration-300
                                     group-hover:translate-x-1"
                            style={{ color: theme.tertiary80 || theme.tertiary, opacity: 0.9 }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            {company}
                        </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div 
                        className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 
                                  rounded-full blur-2xl opacity-20 
                                  transition-all duration-700
                                  group-hover:scale-150 group-hover:opacity-30"
                        style={{ background: theme.primary }}
                    ></div>

                    {/* Arrow indicator */}
                    <div 
                        className="absolute bottom-4 right-4 
                                  transform translate-x-2 opacity-0
                                  group-hover:translate-x-0 group-hover:opacity-100
                                  transition-all duration-500"
                        style={{ color: theme.primary }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
