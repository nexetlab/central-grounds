import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <i className="fas fa-coffee"></i>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Central Grounds</span>
            <span className={styles.established}>Since 2015</span>
          </div>
        </Link>

        <div className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActiveLink('/') ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          
          <Link 
            to="/menu" 
            className={`${styles.navLink} ${isActiveLink('/menu') ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-book-open"></i>
            <span>Menu</span>
          </Link>
          
          <Link 
            to="/about" 
            className={`${styles.navLink} ${isActiveLink('/about') ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-history"></i>
            <span>Our Story</span>
          </Link>
          
          <Link 
            to="/gallery" 
            className={`${styles.navLink} ${isActiveLink('/gallery') ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-images"></i>
            <span>Gallery</span>
          </Link>
          
          <Link 
            to="/contact" 
            className={`${styles.navLink} ${isActiveLink('/contact') ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </Link>
        </div>

        <div className={styles.navActions}>
          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;