import React, { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample gallery items with placeholder images from Unsplash
  const galleryItems = [
    { id: 1, category: 'interior', src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', title: 'Coffee Shop Interior' },
    { id: 2, category: 'interior', src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', title: 'Cozy Seating Area' },
    { id: 3, category: 'drinks', src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', title: 'Specialty Coffee' },
    { id: 4, category: 'drinks', src: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80', title: 'Iced Beverages' },
    { id: 5, category: 'drinks', src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', title: 'Cappuccino Art' },
    { id: 6, category: 'acai', src: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', title: 'Açaí Bowl' },
    { id: 7, category: 'experience', src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', title: 'Friends Gathering' },
    { id: 8, category: 'experience', src: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', title: 'Working Space' },
    { id: 9, category: 'experience', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', title: 'Customer Enjoying Coffee' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className={styles.gallery}>
      <div className="container">
        <h1 className="section-title">Our Gallery</h1>
        <p className="worth-tagline">Worth Visiting Since 2015</p>

        <div className={styles.filterButtons}>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'interior' ? styles.active : ''}`}
            onClick={() => setActiveFilter('interior')}
          >
            Interior
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'drinks' ? styles.active : ''}`}
            onClick={() => setActiveFilter('drinks')}
          >
            Drinks
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'acai' ? styles.active : ''}`}
            onClick={() => setActiveFilter('acai')}
          >
            Açaí
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'experience' ? styles.active : ''}`}
            onClick={() => setActiveFilter('experience')}
          >
            Experience
          </button>
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map(item => (
            <div key={item.id} className={styles.galleryItem}>
              <div 
                className={styles.galleryImage}
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div className={styles.imageOverlay}>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;