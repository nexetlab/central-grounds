import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('cold');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const coldBeverages = [
    { id: 1, name: 'Watermelon Crusher', price: 8.00, description: 'Refreshing blend of fresh watermelon and mint' },
    { id: 2, name: 'Iced Strawberry Matcha', price: 8.50, description: 'Sweet strawberries meet earthy matcha' },
    { id: 3, name: 'Iced Matcha Latte', price: 7.50, description: 'Ceremonial grade matcha with creamy milk' },
    { id: 4, name: 'Iced Latte', price: 6.50, description: 'Smooth espresso with chilled milk' },
    { id: 5, name: 'Iced Long Black', price: 6.50, description: 'Bold espresso over ice' },
    { id: 6, name: 'Iced Frappuccino', price: 8.00, description: 'Blended coffee delight' },
    { id: 7, name: 'Iced Mochaccino', price: 8.50, description: 'Chocolate and coffee perfection' },
    { id: 8, name: 'Iced Coconut Latte', price: 7.50, description: 'Tropical twist on a classic' },
    { id: 9, name: 'Iced Chocolate', price: 9.50, description: 'Rich, decadent chocolate experience' },
    { id: 10, name: 'Iced Nutella', price: 8.50, description: 'Hazelnut chocolate indulgence' },
    { id: 11, name: 'Iced Oreo Frappe', price: 7.50, description: 'Cookie and cream blended treat' },
    { id: 12, name: 'Iced Turmeric Latte', price: 7.50, description: 'Golden milk with anti-inflammatory benefits' },
    { id: 13, name: 'Iced Chai', price: 7.50, description: 'Spiced tea latte served cold' },
  ];

  const hotBeverages = [
    { id: 14, name: 'Espresso, Ristretto, Short Black', sizes: ['SML $4.00'], description: 'Pure, intense coffee experience' },
    { id: 15, name: 'Picollo, Macchiato', sizes: ['$4.30'], description: 'Small but powerful coffee servings' },
    { id: 16, name: 'Cappuccino, Latte, Flat White, Long Black', sizes: ['SML $4.50', 'MED $5.30', 'LRG $6.30'], description: 'Classic coffee favorites' },
    { id: 17, name: 'Chai', sizes: ['SML $4.50', 'MED $5.30', 'LRG $6.30'], description: 'Spiced tea latte' },
    { id: 18, name: 'Hot Chocolate', sizes: ['SML $4.80', 'MED $5.80', 'LRG $6.80'], description: 'Rich, velvety chocolate drink' },
    { id: 19, name: 'Mocha/White Mocha', sizes: ['SML $4.50', 'MED $5.30', 'LRG $6.30'], description: 'Chocolate and coffee combination' },
    { id: 20, name: 'Nutella Hot Chocolate', sizes: ['SML $5.00', 'MED $6.50', 'LRG $8.00'], description: 'Hazelnut chocolate delight' },
    { id: 21, name: 'Nutella Mocha', sizes: ['SML $6.00', 'MED $7.50', 'LRG $8.50'], description: 'Nutella, coffee and milk harmony' },
    { id: 22, name: 'Matcha Latte', sizes: ['SML $4.80', 'MED $5.80', 'LRG $6.80'], description: 'Japanese green tea latte' },
    { id: 23, name: 'Turmeric Latte', sizes: ['SML $4.80', 'MED $5.80', 'LRG $6.80'], description: 'Golden milk wellness drink' },
    { id: 24, name: 'Teas (Earl Grey, English Breakfast, Ceylon, Chamomile, Green Tea, Peppermint)', sizes: ['$4.50 – $6.00'], description: 'Selection of premium teas' },
  ];

  const acaiMenu = [
    { id: 25, name: 'Açaí Smoothie', price: 12.00, description: 'Blended açaí berry goodness' },
    { id: 26, name: 'Açaí Soft Serve', price: 9.00, description: 'Creamy açaí frozen dessert' },
    { id: 27, name: 'Açaí Bowl (Amazon Power Açaí, Organic Granola, Strawberries & Banana)', sizes: ['Small $11.00', 'Large $16.00'], description: 'Superfood bowl packed with nutrients' },
  ];

  const smoothies = [
    { id: 28, name: 'Açaí', price: 12.00, description: 'Antioxidant-rich berry blend' },
    { id: 29, name: 'Banana', price: 10.00, description: 'Creamy banana smoothie' },
    { id: 30, name: 'Strawberry', price: 10.00, description: 'Fresh strawberry delight' },
    { id: 31, name: 'Mango', price: 10.00, description: 'Tropical mango paradise' },
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

  const toggleItemSelection = (id: number) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <div className={styles.menu}>
      <div className="container">
        <div className={styles.menuHeader}>
          <h1 className="section-title">Our Menu</h1>
          <p className="worth-tagline">Worth Visiting Since 2015</p>
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerIcon}><i className="fas fa-coffee"></i></div>
            <div className={styles.dividerLine}></div>
          </div>
          <p className={styles.menuIntro}>Indulge in our carefully crafted selection of beverages and bowls, made with the finest ingredients and served with passion.</p>
        </div>

        <div className={styles.menuCategories}>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'cold' ? styles.active : ''}`}
            onClick={() => setActiveCategory('cold')}
          >
            <i className="fas fa-snowflake"></i>
            <span>Cold Beverages</span>
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'hot' ? styles.active : ''}`}
            onClick={() => setActiveCategory('hot')}
          >
            <i className="fas fa-mug-hot"></i>
            <span>Hot Beverages</span>
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'acai' ? styles.active : ''}`}
            onClick={() => setActiveCategory('acai')}
          >
            <i className="fas fa-crown"></i>
            <span>Signature Açaí</span>
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'smoothies' ? styles.active : ''}`}
            onClick={() => setActiveCategory('smoothies')}
          >
            <i className="fas fa-blender"></i>
            <span>Fresh Smoothies</span>
          </button>
        </div>

        <div className={styles.menuContent}>
          {activeCategory === 'cold' && (
            <div className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Cold Beverages <span className={styles.sizeNote}>(600ml only)</span></h2>
                <p className={styles.categoryDescription}>Refresh yourself with our selection of handcrafted iced beverages, perfect for warm days or whenever you need a cool pick-me-up.</p>
              </div>
              <div className={styles.menuItems}>
                {coldBeverages.map((item) => (
                  <div 
                    key={item.id} 
                    className={`${styles.menuItem} ${selectedItem === item.id ? styles.expanded : ''}`}
                    onClick={() => toggleItemSelection(item.id)}
                  >
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                      <p className={styles.itemDescription}>{item.description}</p>
                      {selectedItem === item.id && (
                        <div className={styles.itemDetails}>
                          <p>Ingredients: Freshly brewed espresso, milk of choice, ice, and specialty flavors</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                    <div className={styles.itemArrow}>
                      <i className={`fas fa-chevron-${selectedItem === item.id ? 'up' : 'down'}`}></i>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.extras}>
                <h3><i className="fas fa-plus-circle"></i> Customization Options</h3>
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
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Hot Beverages</h2>
                <p className={styles.categoryDescription}>Warm your soul with our expertly crafted hot drinks, made with premium beans and steamed to perfection.</p>
              </div>
              <div className={styles.menuItems}>
                {hotBeverages.map((item) => (
                  <div 
                    key={item.id} 
                    className={`${styles.menuItem} ${selectedItem === item.id ? styles.expanded : ''}`}
                    onClick={() => toggleItemSelection(item.id)}
                  >
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                      <p className={styles.itemDescription}>{item.description}</p>
                      <div className={styles.itemSizes}>
                        {item.sizes.map((size, i) => (
                          <span key={i} className={styles.sizeOption}>{size}</span>
                        ))}
                      </div>
                      {selectedItem === item.id && (
                        <div className={styles.itemDetails}>
                          <p>Our hot beverages are made with single-origin beans and steamed to the perfect temperature for optimal flavor extraction.</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.itemArrow}>
                      <i className={`fas fa-chevron-${selectedItem === item.id ? 'up' : 'down'}`}></i>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.extras}>
                <h3><i className="fas fa-plus-circle"></i> Customization Options</h3>
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
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Signature Açaí Menu <span className={styles.recommended}><i className="fas fa-star"></i> Most Recommended</span></h2>
                <p className={styles.categoryDescription}>Our nutrient-packed açaí selections are made with authentic Amazonian açaí berries and topped with fresh ingredients for a healthy and delicious treat.</p>
              </div>
              <div className={styles.menuItems}>
                {acaiMenu.map((item) => (
                  <div 
                    key={item.id} 
                    className={`${styles.menuItem} ${selectedItem === item.id ? styles.expanded : ''}`}
                    onClick={() => toggleItemSelection(item.id)}
                  >
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                      <p className={styles.itemDescription}>{item.description}</p>
                      {item.sizes ? (
                        <div className={styles.itemSizes}>
                          {item.sizes.map((size, i) => (
                            <span key={i} className={styles.sizeOption}>{size}</span>
                          ))}
                        </div>
                      ) : (
                        <div className={styles.itemPrice}>${item.price?.toFixed(2)}</div>
                      )}
                      {selectedItem === item.id && (
                        <div className={styles.itemDetails}>
                          <p>Our açaí is sourced directly from the Amazon and flash-frozen to preserve nutrients and flavor. Served with organic toppings.</p>
                        </div>
                      )}
                    </div>
                    {!item.sizes && (
                      <div className={styles.itemArrow}>
                        <i className={`fas fa-chevron-${selectedItem === item.id ? 'up' : 'down'}`}></i>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.extras}>
                <h3><i className="fas fa-plus-circle"></i> Premium Add-ons</h3>
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
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>Fresh Icy Smoothies</h2>
                <p className={styles.categoryDescription}>Blended to perfection with real fruit and your choice of base, our smoothies are a refreshing and nutritious option any time of day.</p>
              </div>
              <div className={styles.menuItems}>
                {smoothies.map((item) => (
                  <div 
                    key={item.id} 
                    className={`${styles.menuItem} ${selectedItem === item.id ? styles.expanded : ''}`}
                    onClick={() => toggleItemSelection(item.id)}
                  >
                    <div className={styles.itemInfo}>
                      <h3>{item.name}</h3>
                      <p className={styles.itemDescription}>{item.description}</p>
                      {selectedItem === item.id && (
                        <div className={styles.itemDetails}>
                          <p>Made with real fruit, ice, and your choice of milk or juice base. No artificial flavors or sweeteners.</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                    <div className={styles.itemArrow}>
                      <i className={`fas fa-chevron-${selectedItem === item.id ? 'up' : 'down'}`}></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.menuFooter}>
          <div className={styles.menuNote}>
            <i className="fas fa-info-circle"></i>
            <p>All our beverages can be customized to your preference. Don't hesitate to ask our baristas for recommendations!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;