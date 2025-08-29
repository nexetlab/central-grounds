import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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
          
          <div className={styles.navItemWithDropdown}>
            <div 
              className={`${styles.navLink} ${location.pathname.includes('/menu') ? styles.active : ''}`}
              onClick={() => toggleDropdown('menu')}
            >
              <i className="fas fa-book-open"></i>
              <span>Menu</span>
              <i className={`fas fa-chevron-down ${styles.dropdownArrow}`}></i>
            </div>
            {activeDropdown === 'menu' && (
              <div className={styles.dropdownMenu}>
                <Link to="/menu#cold" className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fas fa-snowflake"></i>
                  Cold Beverages
                </Link>
                <Link to="/menu#hot" className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fas fa-mug-hot"></i>
                  Hot Beverages
                </Link>
                <Link to="/menu#acai" className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fas fa-crown"></i>
                  Signature Açaí
                </Link>
                <Link to="/menu#smoothies" className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fas fa-blender"></i>
                  Fresh Smoothies
                </Link>
              </div>
            )}
          </div>
          
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
          <button className={styles.reservationBtn}>
            <i className="fas fa-calendar-check"></i>
            <span>Reserve Table</span>
          </button>
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