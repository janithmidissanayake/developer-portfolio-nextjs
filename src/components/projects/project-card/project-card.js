import Image from 'next/image';
import React, { useState } from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleProject.module.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Fade direction="up" triggerOnce>
            <div
                key={id}
                className={`${styles.singleProject} relative`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    background: `linear-gradient(135deg, ${theme.quaternary} 0%, ${theme.quaternary}ee 100%)`,
                    border: `2px solid ${theme.primary}30`,
                    boxShadow: isHovered 
                        ? `0 10px 40px rgba(0,0,0,0.3), 0 0 20px ${theme.primary}40`
                        : `4px 4px 12px rgba(0,0,0,0.2)`,
                    transition: 'all 0.4s ease',
                    borderRadius: '16px'
                }}
            >
                {/* Top accent bar */}
                <div 
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{
                        background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.primary}80 100%)`
                    }}
                ></div>

                {/* Decorative corner gradient */}
                <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-tr-2xl opacity-20 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at top right, ${theme.primary} 0%, transparent 70%)`
                    }}
                ></div>

                <div className={styles.projectContent}>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        className="transition-all duration-300"
                        style={{ 
                            color: theme.tertiary,
                            textShadow: isHovered ? `0 0 20px ${theme.primary}50` : 'none'
                        }}
                    >
                        {name}
                    </h2>
                    <Image src={image ? image : placeholder} alt={name} />
                    <div className={styles.projectShowcaseBtn}>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className="flex items-center justify-center w-[45px] h-[45px] rounded-full
                                     transition-all duration-300 shadow-lg hover:shadow-xl"
                            style={{
                                backgroundColor: theme.primary,
                                color: theme.secondary,
                                border: `2px solid ${theme.primary}`
                            }}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className="text-[1.1rem] transition"
                                aria-label='Demo'
                            />
                        </a>
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className="flex items-center justify-center w-[45px] h-[45px] rounded-full
                                     transition-all duration-300 shadow-lg hover:shadow-xl"
                            style={{
                                backgroundColor: theme.secondary,
                                color: theme.primary,
                                border: `2px solid ${theme.primary}`
                            }}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className="text-[1.1rem] transition"
                                aria-label='Code'
                            />
                        </a>
                    </div>
                </div>
                <p
                    className={`${styles.projectDesc} shadow-xl`}
                    style={{
                        background: `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.secondary}f5 100%)`,
                        color: theme.tertiary,
                        border: `2px solid ${theme.primary}40`,
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {desc}
                </p>
                <div
                    className={`${styles.projectLang} shadow-lg`}
                    style={{
                        background: `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.secondary}f5 100%)`,
                        color: theme.tertiary,
                        border: `2px solid ${theme.primary}40`,
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {tags.map((tag, idx) => (
                        <span 
                            key={idx}
                            className="px-2 py-1 rounded-md text-xs font-semibold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: `${theme.primary}20`,
                                color: theme.primary,
                                border: `1px solid ${theme.primary}40`
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
