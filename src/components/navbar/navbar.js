import React, { useState, useEffect, useContext } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/navbar.module.css';
import Link from '../link';

const Navbar = () => {
    const { theme, drawerOpen, setHandleDrawer, changeTheme, isDark } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navVisible, setNavVisible] = useState(true);

    // Handle mobile view detection
    useEffect(() => {
        const checkMobileView = () => {
            setIsMobile(window.innerWidth <= 1100);
        };

        checkMobileView();
        window.addEventListener('resize', checkMobileView);
        return () => window.removeEventListener('resize', checkMobileView);
    }, []);

    // Set initial navbar visibility based on scroll position
    useEffect(() => {
        const initialScrollY = window.scrollY;
        const landingPageHeight = window.innerHeight;
        const isOnLandingPage = initialScrollY < landingPageHeight;
        
        // If past landing page, always show. If on landing page and scrolled down, show initially
        setNavVisible(true);
        setScrolled(initialScrollY > 50);
        setLastScrollY(initialScrollY);
    }, []);

    // Handle scroll behavior (hide on scroll down, show on scroll up - only on landing page)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const landingPageHeight = window.innerHeight; // Landing page is 100vh
            
            // Add background blur when scrolled
            setScrolled(currentScrollY > 50);

            // Check if we're still on the landing page
            const isOnLandingPage = currentScrollY < landingPageHeight;

            if (isOnLandingPage) {
                // On landing page - hide/show based on scroll direction
                if (currentScrollY < 10) {
                    // Always show at top
                    setNavVisible(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down - hide navbar
                    setNavVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    // Scrolling up - show navbar
                    setNavVisible(true);
                }
            } else {
                // Past landing page - always show (static)
                setNavVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close drawer when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (drawerOpen && isMobile && !e.target.closest('.mobile-drawer') && !e.target.closest('.menu-toggle')) {
                setHandleDrawer();
            }
        };

        if (drawerOpen) {
            document.addEventListener('click', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [drawerOpen, isMobile, setHandleDrawer]);

    // Close drawer when window is resized to desktop
    useEffect(() => {
        if (!isMobile && drawerOpen) {
            setHandleDrawer();
        }
    }, [isMobile, drawerOpen, setHandleDrawer]);

    const handleLinkClick = () => {
        if (isMobile && drawerOpen) {
            setHandleDrawer();
        }
    };

    const NavLinks = () => (
        <div className={styles.navLinks}>
            <Link href="/" onClick={handleLinkClick} className={styles.navLink} style={{ color: theme.tertiary }}>
                Home
            </Link>
            <Link href="/#about" onClick={handleLinkClick} className={styles.navLink} style={{ color: theme.tertiary }}>
                About
            </Link>
            <Link href="/#resume" onClick={handleLinkClick} className={styles.navLink} style={{ color: theme.tertiary }}>
                Resume
            </Link>
            <Link href="/#projects" onClick={handleLinkClick} className={styles.navLink} style={{ color: theme.tertiary }}>
                Projects
            </Link>
            <Link href="/#blog" onClick={handleLinkClick} className={styles.navLink} style={{ color: theme.tertiary }}>
                Blog
            </Link>
            <Link href="/#contacts" onClick={handleLinkClick} className={styles.navLink} style={{ color: theme.tertiary }}>
                Contact
            </Link>
            <button
                onClick={changeTheme}
                className={styles.themeToggle}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {isDark ? (
                    <BsFillSunFill style={{ color: theme.primary }} />
                ) : (
                    <BsFillMoonFill style={{ color: theme.primary }} />
                )}
            </button>
        </div>
    );

    return (
        <>
            <nav
                className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!navVisible ? styles.hidden : ''}`}
                style={{
                    backgroundColor: scrolled ? `${theme.quaternary}CC` : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                }}
            >
                <div className={styles.navbarContainer}>
                    <Link href="/" className={styles.logo}>
                        <h1 style={{ color: theme.primary }}>JANITHMI</h1>
                    </Link>

                    {/* Desktop Navigation */}
                    {!isMobile && <NavLinks />}

                    {/* Mobile Menu Toggle */}
                    {isMobile && (
                        <button
                            className={`${styles.menuToggle} menu-toggle`}
                            onClick={setHandleDrawer}
                            aria-label="Toggle menu"
                        >
                            <IoMenuSharp style={{ color: theme.primary, fontSize: '1.8rem' }} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            {isMobile && drawerOpen && (
                <div
                    className={styles.mobileDrawerOverlay}
                    onClick={setHandleDrawer}
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                />
            )}

            {/* Mobile Drawer */}
            {isMobile && (
                <div
                    className={`${styles.mobileDrawer} mobile-drawer ${drawerOpen ? styles.open : ''}`}
                    style={{
                        backgroundColor: theme.secondary,
                    }}
                >
                    <div className={styles.drawerHeader}>
                        <h2 style={{ color: theme.primary }}>Menu</h2>
                        <button
                            onClick={setHandleDrawer}
                            className={styles.closeButton}
                            aria-label="Close menu"
                        >
                            <AiOutlineCloseCircle style={{ color: theme.primary, fontSize: '1.8rem' }} />
                        </button>
                    </div>
                    <div className={styles.navLinksMobile}>
                        <NavLinks />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;