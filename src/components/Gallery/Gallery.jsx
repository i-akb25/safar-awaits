import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'path/to/image1.jpg', thumb: 'path/to/thumb1.jpg' },
    { src: 'path/to/image2.jpg', thumb: 'path/to/thumb2.jpg' },
    // Add more images as needed
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <a key={index} href={image.src} data-lg-size="1600-2400">
          <img src={image.thumb} alt={`Gallery ${index + 1}`} />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
