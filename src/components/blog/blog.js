import React, { useContext, useState, useRef } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/blog.module.css';
import Link from '../link';
import SingleBlog from './blog-card/blog-card';


function Blog({blogs}) {

    const { theme } = useContext(ThemeContext);
    const [showAll, setShowAll] = useState(false);
    const blogsContainerRef = useRef(null);

    const handleToggle = () => {
        const wasExpanded = showAll;
        setShowAll(!showAll);
        
        if (!wasExpanded) {
            // Scroll down smoothly after expanding to show more blogs
            setTimeout(() => {
                window.scrollBy({ 
                    top: 300, 
                    behavior: 'smooth' 
                });
            }, 100);
        } else {
            // Scroll back up when collapsing
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <>
            {blogs.length > 0 && (
                <div
                    className={styles.blog}
                    id="blog"
                    style={{ background: theme.quaternary }}>
                    <div className={styles.blogHeader}>
                        <h1 style={{ color: theme.primary }}>Blog</h1>
                    </div>
                    <div className={styles.blogBody}>
                        <div className={styles.blogBodyContainer} ref={blogsContainerRef}>
                            {(showAll ? blogs : blogs.slice(0, 3)).reverse().map(blog => (
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div>

                        {blogs.length > 3 && (
                            <div className={styles.blogViewAll}>
                                <button
                                    onClick={handleToggle}
                                    className="text-[#8B98A5] bg-[#15202B] 
                                    w-[50px] h-[50px] p-2 text-xl 
                                    rounded-[50%] cursor-pointer transition-all 
                                    hover:bg-[#1D9BF0] hover:text-[#15202B] hover:scale-110"
                                    style={{ transform: showAll ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'all 0.3s' }}
                                    aria-label={showAll ? 'Show Less' : 'View All'}>
                                    <HiArrowRight />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Blog
