import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faBed, 
  faRunning, 
  faBrain, 
  faUsers, 
  faShieldAlt,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './CardGrid.scss';

function CardGrid() {
  const [activeCategory, setActiveCategory] = useState('Nutrition');
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const cards = [
    {
      title: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
      image: '/images/i1.jpg',
      metric: '121/80 mmHg',
      icon: faHeart
    },
    {
      title: 'Physical activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
      image: '/images/i2.jpg',
      metric: '32 minutes',
      icon: faRunning
    },
    {
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep is essential for optimal brain function and physical health.',
      image: '/images/i3.jpg',
      metric: '8 hours',
      icon: faBed
    },
    {
      title: 'Stress management',
      description: 'Physical and psychological techniques aid in stress reduction and overall health.',
      image: '/images/i4.jpg',
      metric: '15 min',
      icon: faBrain
    },
    {
      title: 'Social connection',
      description: 'Strong social connections are associated with a longer life and better physical and mental health.',
      image: '/images/i5.jpg',
      metric: '3 friends',
      icon: faUsers
    },
    {
      title: 'Substance abuse',
      description: 'Avoiding harmful substances and managing usage helps maintain optimal physical and mental well-being.',
      image: '/images/i6.jpg',
      metric: '0 days',
      icon: faShieldAlt
    }
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const activeIndex = cards.findIndex(card => card.title === activeCategory);
      const offset = activeIndex * 493;
      sliderRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [activeCategory]);

  const handleSlide = (newCategory) => {
    if (isAnimating || newCategory === activeCategory) return;
    setIsAnimating(true);
    setActiveCategory(newCategory);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    const currentIndex = cards.findIndex(card => card.title === activeCategory);
    const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    handleSlide(cards[newIndex].title);
  };

  const handleNext = () => {
    if (isAnimating) return;
    const currentIndex = cards.findIndex(card => card.title === activeCategory);
    const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    handleSlide(cards[newIndex].title);
  };

  return (
    <section className="card-grid">
      <div className="container">
        <div className="header-wrapper">
          <div className="section-header">
            <h2>HOW IT WORKS</h2>
            <div className="title-wrapper">
              <h3>
                <span className="highlight">Lifestyle as medicine:</span> The six pillars
              </h3>
            </div>
          </div>
          
          <div className="navigation-buttons">
            <button 
              className="nav-arrow prev" 
              onClick={handlePrevious}
              disabled={isAnimating}
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button 
              className="nav-arrow next" 
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className="content-section">
          <div className="navigation-tabs">
            {cards.map((card) => (
              <button
                key={card.title}
                className={`nav-tab ${card.title === activeCategory ? 'active' : ''}`}
                onClick={() => handleSlide(card.title)}
              >
                {card.title}
              </button>
            ))}
          </div>

          <div className="carousel-container">
            <div className="cards-row" ref={sliderRef}>
              {/* Duplicate cards array to create infinite scroll effect */}
              {[...cards, ...cards].map((card, index) => (
                <article 
                  key={`${card.title}-${index}`} 
                  className={`card ${card.title === activeCategory ? 'active' : ''}`}
                >
                  <div className="card-image">
                    <img src={card.image} alt={card.title} />
                    <div className="metric">
                      <FontAwesomeIcon icon={card.icon} />
                      <span>{card.metric}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardGrid;
