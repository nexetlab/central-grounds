import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <h1 className="section-title">Our Story</h1>
        <p className="worth-tagline">Worth Visiting Since 2015</p>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Established in 2015, Espresso Bar began as a passion project between two friends who shared a love for exceptional coffee and community. What started as a small espresso bar has grown into a beloved local institution, known for our carefully crafted beverages and warm, inviting atmosphere.
            </p>
            <p>
              Our philosophy is simple: source the finest ingredients, train our baristas to perfection, and serve every customer with genuine care. We travel directly to coffee farms to select beans that meet our exacting standards for flavor and sustainability.
            </p>
            <p>
              Beyond coffee, we've created a space where people can connect, work, or simply enjoy a moment of tranquility. Our aesthetic interior design combines rustic elements with modern comforts, creating the perfect backdrop for your coffee experience.
            </p>
            <p>
              Today, we continue to innovate while staying true to our roots. Our seasonal menu features creative concoctions alongside classic favorites, and our açaí bowls have become local legends in their own right.
            </p>
            <div className={styles.mission}>
              <h2>Our Mission</h2>
              <p>To create memorable experiences through exceptional coffee, genuine service, and a welcoming atmosphere that keeps our community coming back since 2015.</p>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <img 
              src="/hero.jpg" 
              alt="About Espresso Bar" 
              className={styles.imagePlaceholder} 
            />
</div>
        </div>

        <div className={styles.values}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Quality</h3>
              <p>We never compromise on ingredients or preparation methods.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Community</h3>
              <p>We're committed to being a positive force in our neighborhood.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainability</h3>
              <p>We prioritize eco-friendly practices and ethical sourcing.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>We're always exploring new flavors and techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;