import React from 'react';
import './ImageCarousel.scss';

function ImageCarousel({ images }) {
  // Split images into two columns for animation
  const column1Images = images.slice(0, 4); // First 4 images for left column
  const column2Images = images.slice(4, 8); // Next 4 images for right column
  
  // Duplicate images for seamless loop animation
  const duplicatedColumn1 = [...column1Images, ...column1Images];
  const duplicatedColumn2 = [...column2Images, ...column2Images];
  
  return (
    <div className="image-grid">
      <div className="grid-column column-1">
        <div className="scrolling-content">
          {duplicatedColumn1.map((image, index) => (
            <div key={`img1-${index}`} className="image-card">
              <img src={image} alt={`Lifestyle ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid-column column-2">
        <div className="scrolling-content">
          {duplicatedColumn2.map((image, index) => (
            <div key={`img2-${index}`} className="image-card">
              <img src={image} alt={`Lifestyle ${index + 5}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;