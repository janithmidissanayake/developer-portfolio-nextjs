import React from 'react';
import { Fade } from 'react-awesome-reveal';
import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleBlog.module.css';
import { timeConverter } from '../../../utils/time-converter';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    const cardStyle = {
        background: theme.quaternary
    };
    
    return (
        <Fade bottom>
            <a
                className={styles.singleBlog}
                href={url}
                target="_blank" rel="noreferrer"
                style={cardStyle}>
                    <div
                        className={styles.singleBlogImage}
                        style={{ backgroundColor: theme.secondary }}>
                        <img 
                            src={image ? image.src || image : placeholder} 
                            alt={title}
                            className={styles.blogImage}
                        />
                    </div>
                    <div className={styles.singleBlogBody}>
                        <p style={{ color: theme.primary }}>{timeConverter(date)}</p>
                        <h3 style={{ color: theme.tertiary }}>{title}</h3>
                        <h6 style={{ color: theme.tertiary }}>{desc}</h6>
                    </div>
                </a>
        </Fade>
    )
}

export default SingleBlog
