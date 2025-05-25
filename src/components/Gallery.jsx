import React, { useState } from 'react';
import '../Gallery.css';

const galleryImages = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/2.jpeg',
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/2.jpeg',
];

const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="gallery-section">
      <h2 className='p'>Galeri</h2>
      <p className="gallery-description">Beberapa hasil terbaik dari sesi foto kami.</p>
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              onClick={() => setModalImg(src)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
      {modalImg && (
        <div className="modal-overlay" onClick={() => setModalImg(null)}>
          <img className="modal-img" src={modalImg} alt="Preview" />
        </div>
      )}
    </section>
  );
};

export default Gallery;