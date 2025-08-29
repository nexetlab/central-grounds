import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} fade-in`}>Experience Coffee Artistry</h1>
          <p className={`${styles.heroSubtitle} fade-in`}>Crafting perfection in every cup since 2015</p>
          <div className={`${styles.heroButtons} fade-in`}>
            <Link to="/menu" className="btn-primary">Explore Menu</Link>
            <Link to="/about" className="btn-secondary">Our Story</Link>
          </div>
        </div>
        <div className={styles.heroImage}></div>
      </section>

      {/* Tagline Section */}
      <section className={styles.taglineSection}>
        <div className="container">
          <p className="worth-tagline">Worth Visiting Since 2015</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <i className="fas fa-coffee"></i>
              </div>
              <h3>Premium Quality</h3>
              <p>We source only the finest coffee beans from sustainable farms around the world.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <i className="fas fa-mortar-pestle"></i>
              </div>
              <h3>Expertly Crafted</h3>
              <p>Our baristas are trained to perfection, ensuring every drink is a masterpiece.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <i className="fas fa-heart"></i>
              </div>
              <h3>Made with Love</h3>
              <p>Every beverage is prepared with care and attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Experience the Difference?</h2>
            <p>Visit us today and taste why we've been worth visiting since 2015</p>
            <Link to="/contact" className="btn-primary">Find Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;