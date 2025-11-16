import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { HiExternalLink } from 'react-icons/hi';
import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleBlog.module.css';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    // Check if image is a URL string or imported image object
    const imageSource = image || placeholder;
    const isExternalUrl = typeof image === 'string' && image.startsWith('http');

    return (
        <Fade direction="up" triggerOnce>
            <a
                className={styles.singleBlog}
                key={id} href={url}
                target="_blank" rel="noreferrer"
                style={{ 
                    backgroundColor: theme.quaternary,
                    borderColor: `${theme.primary}30`
                }}>
                {/* Decorative accent */}
                <div 
                    className={styles.blogAccent}
                    style={{ background: theme.primary }}
                ></div>
                
                {/* Image Container with Overlay */}
                <div
                    className={styles.singleBlogImage}
                    style={{ backgroundColor: theme.secondary }}>
                    {isExternalUrl ? (
                        <img src={imageSource} alt={title} className={styles.blogImage} />
                    ) : (
                        <Image 
                            src={imageSource} 
                            alt={title} 
                            width={400} 
                            height={250}
                            className={styles.blogImage}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    )}
                    {/* Gradient Overlay */}
                    <div 
                        className={styles.imageOverlay}
                        style={{ background: `linear-gradient(to top, ${theme.quaternary} 0%, transparent 100%)` }}
                    ></div>
                    {/* External Link Icon */}
                    <div className={styles.externalLinkIcon}>
                        <HiExternalLink style={{ color: theme.primary }} />
                    </div>
                </div>
                
                {/* Content Body */}
                <div className={styles.singleBlogBody}>
                    <div className={styles.blogDate} style={{ color: theme.primary }}>
                        {date}
                    </div>
                    <h3 className={styles.blogTitle} style={{ color: theme.tertiary }}>
                        {title}
                    </h3>
                    <h6 className={styles.blogDesc} style={{ color: theme.tertiary }}>
                        {desc}
                    </h6>
                    
                    {/* Read More Indicator */}
                    <div className={styles.readMore}>
                        <span style={{ color: theme.primary }}>Read More</span>
                        <HiExternalLink style={{ color: theme.primary }} />
                    </div>
                </div>
            </a>
        </Fade>
    )
}

export default SingleBlog
