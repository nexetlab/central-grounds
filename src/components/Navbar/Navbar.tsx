import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Espresso Bar</span>
          <span className={styles.established}>Since 2015</span>
        </Link>

        <div className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <Link to="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/menu" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Menu
          </Link>
          <Link to="/about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/gallery" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;