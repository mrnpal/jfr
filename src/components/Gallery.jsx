import React, { useState } from 'react';
import '../Gallery.css';

const galleryData = {
  prewedding: [
    '/images/p1.jpeg',
    '/images/1.jpeg',
    '/images/p2.jpeg',
    '/images/p3.jpeg',
    '/images/p4.jpeg',
    '/images/p5.jpeg',
    
  ],
  wedding: [
    '/images/w1.jpeg',
    '/images/w2.jpeg',
    '/images/w3.jpeg',
    '/images/w4.jpeg',
    '/images/w5.jpeg',
    '/images/w6.jpeg',
    '/images/w7.jpeg',
    '/images/w8.jpeg',
    '/images/w9.jpeg',
    '/images/w10.jpeg',
    '/images/w11.jpeg',
    '/images/w12.jpeg',
    '/images/w13.jpeg',
    '/images/w14.jpeg',
    '/images/w15.jpeg',
    '/images/w16.jpeg',

    
  ],
  engagement: [
    '/images/e1.jpeg',
    '/images/e2.jpeg',
    '/images/e3.jpeg',
    '/images/e4.jpeg',
    '/images/e5.jpeg',
    '/images/e6.jpeg',
    '/images/e7.jpeg',
    '/images/e8.jpeg',
    '/images/e9.jpeg',
    '/images/e10.jpeg',
  ],
};

const categories = [
  { key: 'prewedding', label: 'Prewedding' },
  { key: 'wedding', label: 'Wedding' },
  { key: 'engagement', label: 'Engagement' },
];

const Gallery = () => {
  const [selected, setSelected] = useState('prewedding');
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="p">Galeri</h2>
      <div className="gallery-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={selected === cat.key ? 'active' : ''}
            onClick={() => setSelected(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
      <div className="gallery-grid">
        {galleryData[selected].map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src}
              alt={`${selected} ${index + 1}`}
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