import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={`${styles.heroTitle} fade-in`}>
              <span className={styles.titleLine}>Central Grounds</span>
              <span className={styles.titleSubline}>Coffee Experience</span>
            </h1>
            <p className={`${styles.heroSubtitle} fade-in`}>
              Where exceptional coffee meets unparalleled ambiance since 2015
            </p>
            <div className={`${styles.heroButtons} fade-in`}>
              <Link to="/menu" className="btn-primary">Explore Our Menu</Link>
              <Link to="/about" className="btn-secondary">Discover Our Story</Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.circleDecoration}></div>
            <div className={styles.coffeeCup}></div>
            <div className={styles.coffeeBean}></div>
            <div className={styles.coffeeBean2}></div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div className={styles.arrow}></div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className={styles.taglineSection}>
        <div className="container">
          <p className="worth-tagline">Worth Visiting Since 2015</p>
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerIcon}><i className="fas fa-coffee"></i></div>
            <div className={styles.dividerLine}></div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div className="container">
          <h2 className="section-title">The Central Grounds Difference</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <div className={styles.iconBackground}></div>
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Ethically Sourced</h3>
              <p>We partner directly with sustainable farms to bring you the finest coffee beans from around the world.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <div className={styles.iconBackground}></div>
                <i className="fas fa-mortar-pestle"></i>
              </div>
              <h3>Expertly Crafted</h3>
              <p>Our master baristas transform quality beans into extraordinary beverages with precision and care.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <div className={styles.iconBackground}></div>
                <i className="fas fa-heart"></i>
              </div>
              <h3>Made with Passion</h3>
              <p>Every cup is prepared with dedication to create memorable experiences for our guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className={styles.featuredMenu}>
        <div className="container">
          <h2 className="section-title">Signature Creations</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuItem}>
              <div className={styles.menuImage} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'}}></div>
              <div className={styles.menuContent}>
                <h3>Artisan Espresso</h3>
                <p>Our signature blend, carefully roasted to perfection</p>
                <span className={styles.menuPrice}>From $4.50</span>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuImage} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'}}></div>
              <div className={styles.menuContent}>
                <h3>Acai Bowls</h3>
                <p>Nutrient-rich Amazonian acai with fresh toppings</p>
                <span className={styles.menuPrice}>From $11.00</span>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuImage} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80)'}}></div>
              <div className={styles.menuContent}>
                <h3>Iced Specialties</h3>
                <p>Refreshing creations perfect for any time of day</p>
                <span className={styles.menuPrice}>From $6.50</span>
              </div>
            </div>
          </div>
          <div className={styles.menuCta}>
            <Link to="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className={styles.atmosphere}>
        <div className={styles.atmosphereContent}>
          <div className={styles.atmosphereText}>
            <h2>An Oasis in the City</h2>
            <p>Step into our thoughtfully designed space where modern elegance meets cozy comfort. Whether you're meeting colleagues, enjoying a moment alone, or catching up with friends, Central Grounds provides the perfect ambiance.</p>
            <Link to="/gallery" className="btn-secondary">View Gallery</Link>
          </div>
          <div className={styles.atmosphereImage}></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Experience Central Grounds?</h2>
            <p>Visit us today and discover why we've been the community's favorite since 2015</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className="btn-primary">Find Us</Link>
              <Link to="/menu" className="btn-secondary">Order Online</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;