import React, { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Gallery items
  const galleryItems = [
    { id: 1, category: '', src: '/images/Entrance.jpg', title: '', description: '' },
    { id: 2, category: '', src: '/images/staff.png', title: '', description: '' },
    { id: 3, category: '', src: '/images/display.jpg', title: 'Display Area', description: 'Showcasing our finest products and specials for visitors.' },
    { id: 4, category: 'acai', src: '/images/Acai_Bowl.jpeg', title: 'Açaí Bowl', description: 'Nutrient-packed açaí bowls with fresh toppings.' },
    { id: 5, category: '', src: '/images/Espresso_Bar_at_Central_Grounds.png', title: '', description: '' },
    { id: 6, category: '', src: '/images/View.jpg', title: '', description: '' },
        { id: 6, category: '', src: '/images/juice.jpeg', title: '', description: '' },
  ];

  // Filter logic
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
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
          <p className={styles.galleryIntro}>
            Step into our world through these captured moments that showcase the Central Grounds experience—from our carefully crafted beverages to our inviting atmosphere.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          <button className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`} onClick={() => setActiveFilter('all')}>
            <i className="fas fa-th"></i><span>All Photos</span>
          </button>
          <button className={`${styles.filterButton} ${activeFilter === 'interior' ? styles.active : ''}`} onClick={() => setActiveFilter('interior')}>
            <i className="fas fa-store"></i><span>Interior</span>
          </button>
          <button className={`${styles.filterButton} ${activeFilter === 'drinks' ? styles.active : ''}`} onClick={() => setActiveFilter('drinks')}>
            <i className="fas fa-coffee"></i><span>Drinks</span>
          </button>
          <button className={`${styles.filterButton} ${activeFilter === 'acai' ? styles.active : ''}`} onClick={() => setActiveFilter('acai')}>
            <i className="fas fa-crown"></i><span>Açaí</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map((item, index) => (
            <div key={item.id} className={styles.galleryItem} onClick={() => openLightbox(index)}>
              <div className={styles.galleryImage} style={{ backgroundImage: `url(${item.src})` }}>
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className={styles.viewButton}>
                      <i className="fas fa-expand"></i><span>View</span>
                    </div>
                  </div>
                </div>
                <div className={styles.categoryBadge}><span>{item.category}</span></div>
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
            <button className={styles.lightboxClose} onClick={closeLightbox}><i className="fas fa-times"></i></button>
            <button className={styles.lightboxNav} onClick={() => navigateImage('prev')}><i className="fas fa-chevron-left"></i></button>
            <div className={styles.lightboxImageContainer}>
              <img src={filteredItems[currentImage].src} alt={filteredItems[currentImage].title} className={styles.lightboxImage} />
              <div className={styles.lightboxInfo}>
                <h3>{filteredItems[currentImage].title}</h3>
                <p>{filteredItems[currentImage].description}</p>
              </div>
            </div>
            <button className={styles.lightboxNav} onClick={() => navigateImage('next')}><i className="fas fa-chevron-right"></i></button>
            <div className={styles.lightboxCounter}>{currentImage + 1} / {filteredItems.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
