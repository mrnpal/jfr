import React from 'react';
import '../Gallery.css';

const galleryImages = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>Galeri</h2>
      <p className="gallery-description">Beberapa hasil terbaik dari sesi foto kami.</p>
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
