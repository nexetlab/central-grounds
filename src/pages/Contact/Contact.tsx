import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="worth-tagline">Worth Visiting Since 2015</p>

        <div className={styles.contactContent}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Whether you have a question about our menu, want to host an event, or just want to say hello, feel free to reach out.</p>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.infoDetails}>
                <h3>Address</h3>
                <p>225 Forest Rd, Hurstville NSW 2220</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className="fas fa-phone"></i>
              </div>
              <div className={styles.infoDetails}>
                <h3>Phone</h3>
                <p>+61 424 748 899</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.infoDetails}>
                <h3>Email</h3>
                <p>g.epanomatis@hotmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <div className={styles.infoDetails}>
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className={styles.mapSection}>
          <h2>Find Us</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.582210563315!2d151.1003353152033!3d-33.96730308066439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b9a305e97011%3A0x1c86a62477b30aff!2s225%20Forest%20Rd%2C%20Hurstville%20NSW%202220%2C%20Australia!5e0!3m2!1sen!2sus!4v1693567890123!5m2!1sen!2sus"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
