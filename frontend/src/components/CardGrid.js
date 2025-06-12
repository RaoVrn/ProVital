import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBed, faRunning, faBrain, faUsers, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import './CardGrid.scss';

function CardGrid() {
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

  return (
    <section className="card-grid">
      <div className="container">
        <div className="section-title">
          <h2>
            <span>Lifestyle as medicine:</span> The six pillars
          </h2>
        </div>

        <div className="grid">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <img src={card.image} alt={card.title} />
                <div className="metric">
                  <FontAwesomeIcon icon={card.icon} />
                  <span>{card.metric}</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGrid;
