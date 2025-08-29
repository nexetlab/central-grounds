import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('cold');

  const coldBeverages = [
    { name: 'Watermelon Crusher', price: 8.00 },
    { name: 'Iced Strawberry Matcha', price: 8.50 },
    { name: 'Iced Matcha Latte', price: 7.50 },
    { name: 'Iced Latte', price: 6.50 },
    { name: 'Iced Long Black', price: 6.50 },
    { name: 'Iced Frappuccino', price: 8.00 },
    { name: 'Iced Mochaccino', price: 8.50 },
    { name: 'Iced Coconut Latte', price: 7.50 },
    { name: 'Iced Chocolate', price: 9.50 },
    { name: 'Iced Nutella', price: 8.50 },
    { name: 'Iced Oreo Frappe', price: 7.50 },
    { name: 'Iced Turmeric Latte', price: 7.50 },
    { name: 'Iced Chai', price: 7.50 },
  ];

  const hotBeverages = [
    { name: 'Espresso, Ristretto, Short Black', sizes: ['SML $4.00'] },
    { name: 'Picollo, Macchiato', sizes: ['$4.30'] },
    { name: 'Cappuccino, Latte, Flat White, Long Black', sizes: ['SML $4.50', 'MED $5.30', 'LRG $6.30'] },
    { name: 'Chai', sizes: ['SML $4.50', 'MED $5.30', 'LRG $6.30'] },
    { name: 'Hot Chocolate', sizes: ['SML $4.80', 'MED $5.80', 'LRG $6.80'] },
    { name: 'Mocha/White Mocha', sizes: ['SML $4.50', 'MED $5.30', 'LRG $6.30'] },
    { name: 'Nutella Hot Chocolate', sizes: ['SML $5.00', 'MED $6.50', 'LRG $8.00'] },
    { name: 'Nutella Mocha', sizes: ['SML $6.00', 'MED $7.50', 'LRG $8.50'] },
    { name: 'Matcha Latte', sizes: ['SML $4.80', 'MED $5.80', 'LRG $6.80'] },
    { name: 'Turmeric Latte', sizes: ['SML $4.80', 'MED $5.80', 'LRG $6.80'] },
    { name: 'Teas (Earl Grey, English Breakfast, Ceylon, Chamomile, Green Tea, Peppermint)', sizes: ['$4.50 – $6.00'] },
  ];

  const acaiMenu = [
    { name: 'Açaí Smoothie', price: 12.00 },
    { name: 'Açaí Soft Serve', price: 9.00 },
    { name: 'Açaí Bowl (Amazon Power Açaí, Organic Granola, Strawberries & Banana)', sizes: ['Small $11.00', 'Large $16.00'] },
  ];

  const smoothies = [
    { name: 'Açaí', price: 12.00 },
    { name: 'Banana', price: 10.00 },
    { name: 'Strawberry', price: 10.00 },
    { name: 'Mango', price: 10.00 },
  ];

  const extras = {
    cold: [
      'Cream/Icecream ($1.00)',
      'Extra Shot/Decaf ($0.70)',
      'Milk Options (Soy/Almond $1.50, Coconut/Oat $0.70)',
      'Syrups (Caramel/Vanilla/Hazelnut/Honey $0.30)'
    ],
    hot: [
      'Extra Shot ($0.70)',
      'Soy ($0.70)',
      'Lactose Free ($0.70)',
      'Oat ($0.70)',
      'Almond ($0.70)',
      'Decaf ($0.70)',
      'Coconut ($0.70)',
      'Flavoured Syrups (Caramel/Vanilla/Hazelnut/Honey $0.30)'
    ],
    acai: [
      'Nutella ($2)',
      'Bueno ($3)',
      'White Chocolate ($2)',
      'Oreo ($2)',
      'Pistachio ($3)',
      'Biscoff ($2)',
      'Peanut Butter ($2)',
      'Blueberries ($3)',
      'Honey ($1.50)',
      'Coconut ($1.50)',
      'Chia Seeds ($0.50)'
    ]
  };

  return (
    <div className={styles.menu}>
      <div className="container">
        <h1 className="section-title">Our Menu</h1>
        <p className="worth-tagline">Worth Visiting Since 2015</p>

        <div className={styles.menuCategories}>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'cold' ? styles.active : ''}`}
            onClick={() => setActiveCategory('cold')}
          >
            Cold Beverages
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'hot' ? styles.active : ''}`}
            onClick={() => setActiveCategory('hot')}
          >
            Hot Beverages
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'acai' ? styles.active : ''}`}
            onClick={() => setActiveCategory('acai')}
          >
            Signature Açaí
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'smoothies' ? styles.active : ''}`}
            onClick={() => setActiveCategory('smoothies')}
          >
            Fresh Icy Smoothies
          </button>
        </div>

        <div className={styles.menuContent}>
          {activeCategory === 'cold' && (
            <div className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>Cold Beverages <span className={styles.sizeNote}>(600ml only)</span></h2>
              <div className={styles.menuItems}>
                {coldBeverages.map((item, index) => (
                  <div key={index} className={styles.menuItem}>
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                    </div>
                    <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
              <div className={styles.extras}>
                <h3>Extras</h3>
                <ul>
                  {extras.cold.map((extra, index) => (
                    <li key={index}>{extra}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeCategory === 'hot' && (
            <div className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>Hot Beverages</h2>
              <div className={styles.menuItems}>
                {hotBeverages.map((item, index) => (
                  <div key={index} className={styles.menuItem}>
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                      <div className={styles.itemSizes}>
                        {item.sizes.map((size, i) => (
                          <span key={i} className={styles.sizeOption}>{size}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.extras}>
                <h3>Extras</h3>
                <ul>
                  {extras.hot.map((extra, index) => (
                    <li key={index}>{extra}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeCategory === 'acai' && (
            <div className={`${styles.categorySection} ${styles.acaiSection}`}>
              <h2 className={styles.categoryTitle}>Signature Açaí Menu <span className={styles.recommended}>(Most Recommended)</span></h2>
              <div className={styles.menuItems}>
                {acaiMenu.map((item, index) => (
                  <div key={index} className={styles.menuItem}>
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                      {item.sizes ? (
                        <div className={styles.itemSizes}>
                          {item.sizes.map((size, i) => (
                            <span key={i} className={styles.sizeOption}>{size}</span>
                          ))}
                        </div>
                      ) : (
                        <div className={styles.itemPrice}>${item.price?.toFixed(2)}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.extras}>
                <h3>Add-ons</h3>
                <ul>
                  {extras.acai.map((extra, index) => (
                    <li key={index}>{extra}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeCategory === 'smoothies' && (
            <div className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>Fresh Icy Smoothies</h2>
              <div className={styles.menuItems}>
                {smoothies.map((item, index) => (
                  <div key={index} className={styles.menuItem}>
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                    </div>
                    <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;