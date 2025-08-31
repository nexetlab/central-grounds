import React, { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Sample gallery items with placeholder images from Unsplash
  const galleryItems = [
    { 
      id: 1, 
      category: 'interior', 
      src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', 
      title: 'Coffee Shop Interior',
      description: 'Our warm and inviting space designed for comfort and conversation.'
    },
    { 
      id: 2, 
      category: 'interior', 
      src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Cozy Seating Area',
      description: 'Comfortable seating arrangements for working or relaxing.'
    },
    { 
      id: 3, 
      category: 'drinks', 
      src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Specialty Coffee',
      description: 'Artfully prepared coffee using our premium beans.'
    },
    { 
      id: 4, 
      category: 'drinks', 
      src: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80', 
      title: 'Iced Beverages',
      description: 'Refreshing cold drinks perfect for warm days.'
    },
    { 
      id: 5, 
      category: 'drinks', 
      src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Cappuccino Art',
      description: 'Our baristas\' beautiful latte art creations.'
    },
    { 
      id: 6, 
      category: 'acai', 
      src: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Açaí Bowl',
      description: 'Nutrient-packed açaí bowls with fresh toppings.'
    },
    { 
      id: 7, 
      category: 'experience', 
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Friends Gathering',
      description: 'The perfect spot to connect with friends and family.'
    },
    { 
      id: 8, 
      category: 'experience', 
      src: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Working Space',
      description: 'Productive environment with excellent coffee and WiFi.'
    },
    { 
      id: 9, 
      category: 'experience', 
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Customer Enjoying Coffee',
      description: 'Moments of pure enjoyment with our beverages.'
    },
    { 
      id: 10, 
      category: 'interior', 
      src: 'https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Coffee Bar',
      description: 'Our fully equipped coffee bar with professional equipment.'
    },
    { 
      id: 11, 
      category: 'drinks', 
      src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', 
      title: 'Espresso Selection',
      description: 'Perfectly extracted espresso shots for true connoisseurs.'
    },
    { 
      id: 12, 
      category: 'acai', 
      src: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
      title: 'Fresh Ingredients',
      description: 'We use only the freshest ingredients in our preparations.'
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentImage((prev) => (prev + 1) % filteredItems.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className={styles.gallery}>
      <div className="container">
        <div className={styles.galleryHeader}>
          <h1 className="section-title">Our Gallery</h1>
          <p className="worth-tagline">Worth Visiting Since 2015</p>
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerIcon}><i className="fas fa-camera"></i></div>
            <div className={styles.dividerLine}></div>
          </div>
          <p className={styles.galleryIntro}>Step into our world through these captured moments that showcase the Central Grounds experience—from our carefully crafted beverages to our inviting atmosphere.</p>
        </div>

        <div className={styles.filterButtons}>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <i className="fas fa-th"></i>
            <span>All Photos</span>
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'interior' ? styles.active : ''}`}
            onClick={() => setActiveFilter('interior')}
          >
            <i className="fas fa-store"></i>
            <span>Interior</span>
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'drinks' ? styles.active : ''}`}
            onClick={() => setActiveFilter('drinks')}
          >
            <i className="fas fa-coffee"></i>
            <span>Drinks</span>
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'acai' ? styles.active : ''}`}
            onClick={() => setActiveFilter('acai')}
          >
            <i className="fas fa-crown"></i>
            <span>Açaí</span>
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'experience' ? styles.active : ''}`}
            onClick={() => setActiveFilter('experience')}
          >
            <i className="fas fa-users"></i>
            <span>Experience</span>
          </button>
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={styles.galleryItem}
              onClick={() => openLightbox(index)}
            >
              <div 
                className={styles.galleryImage}
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className={styles.viewButton}>
                      <i className="fas fa-expand"></i>
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.categoryBadge}>
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className={styles.noResults}>
            <i className="fas fa-image"></i>
            <h3>No photos found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}

        <div className={styles.galleryCta}>
          <h2>Share Your Central Grounds Experience</h2>
          <p>Tag us on Instagram <span>@centralgrounds</span> for a chance to be featured in our gallery</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <button className={styles.lightboxNav} onClick={() => navigateImage('prev')}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className={styles.lightboxImageContainer}>
              <img 
                src={filteredItems[currentImage].src} 
                alt={filteredItems[currentImage].title}
                className={styles.lightboxImage}
              />
              <div className={styles.lightboxInfo}>
                <h3>{filteredItems[currentImage].title}</h3>
                <p>{filteredItems[currentImage].description}</p>
              </div>
            </div>
            <button className={styles.lightboxNav} onClick={() => navigateImage('next')}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className={styles.lightboxCounter}>
              {currentImage + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;