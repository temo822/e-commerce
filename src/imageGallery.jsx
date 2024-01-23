// components/ImageGallery.js
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <img src={activeImage} alt="Product" />
      <div>
        {images.map(img => (
          <img
            key={img}
            src={img}
            alt="Thumbnail"
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
};
