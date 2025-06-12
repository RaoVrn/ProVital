import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './ImageCarousel';
import './HeroSection.scss';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [insurance, setInsurance] = useState('');

  const carouselImages = [
    '/images/h11.jpg',
    '/images/h12.jpg',
    '/images/h21.jpg',
    '/images/h22.jpg',
    '/images/h31.jpg',
    '/images/h32.jpg',
    '/images/h41.jpg',
    '/images/h42.jpg'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
  };

  return (
    <section className="hero-section">
      <div className="image-section">
        <ImageCarousel images={carouselImages} />
      </div>
      
      <div className="content-section">
        <h1>
          Book an appointment with{' '}
          <span className="highlight">lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
        
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Condition, procedure, specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="search-input">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <input
              type="text"
              placeholder="City, state, or zipcode"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          <div className="search-input">
            <FontAwesomeIcon icon={faIdCard} />
            <input
              type="text"
              placeholder="Insurance carrier"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
            />
          </div>
          
          <button type="submit">Find now</button>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
