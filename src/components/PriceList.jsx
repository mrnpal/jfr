import React, { useState } from 'react';
import '../PriceList.css';

const priceData = {
  wedding: [
    {
      title: 'Bronze',
      price: 'Rp 1.400.000',
      features: ['5 Jam on Location', '1 Photographer', '1 Assistent','80 Edited Photos', 'All Files in Google Drive'],
    },
    {
      title: 'Silver',
      price: 'Rp 1.800.000',
      features: ['7 Jam on location', '1 Photographer', '1 Assistent','100 Edited Photos', '100 Foto Cetak 4R + Album Exclusive', 'All Files in Google Drive'],
    },
    {
      title: 'Gold',
      price: 'Rp 2.500.000',
      features: ['Full Day on Location', '2 Photographer', '1 Assistent','120 Edited Photos ', '120 Foto Cetak 4R + Album Exclusive', '4 Foto Cetak Ukuran 10RS', 'All Files in Google Drive'],
    },
    {
      title: 'Platinum',
      price: 'Rp 3.000.000',
      features: ['Full Day on Location', '2 Photographer', '1 Assistent','160 Edited Photos ', '160 Foto Cetak 4R + Album Exclusive', '1 Foto Cetak Ukuran 12RS + Bingkai', '3 Foto Cetak Ukuran 10RS', 'All Files on Flashdisk'],
    },
    {
      title: 'Diamond',
      price: 'Rp 5.000.000',
      features: ['Full Day on Location', '3 Photographer', '1 Assistent','200 Edited Photos ', '200 Foto Cetak 4R + Album Exclusive', 'Magazine Photo Album Exclusive', 'All Files on Flashdisk'],
    },
  ],
  prewedding: [
    {
      title: 'Bronze',
      price: 'Rp 600.000',
      features: ['File Only', '1 Photographer', '1 Assistent','20 Edited Photos ', 'Free 2 Foto Ukuran 10RS', 'All Files in Google Drive'],
    },
    {
      title: 'Silver',
      price: 'Rp 850.000',
      features: ['1 Photographer', '1 Assistent','30 Edited Photos ', '1 Foto Ukuran 12RS', '1 Bingkai Ukuran 12RS', 'All Files in Google Drive'],
    },
    {
      title: 'Gold',
      price: 'Rp 1.200.000',
      features: ['1-2 Photographer', '1 Assistent','40 Edited Photos ', '1 Foto Ukuran 16RS', '1 Bingkai Ukuran 16RS', 'All Files in Google Drive'],
    },
    {
      title: 'Platinum',
      price: 'Rp 1.600.000',
      features: ['1-2 Photographer', '1 Assistent','50 Edited Photos ', '3 Foto Ukuran 10RS', '1 Foto Ukuran 16RS', '1 Bingkai Ukuran 16RS', 'All Files in Google Drive'],
    },
  ],
  Video: [
    {
      title: 'Bronze',
      price: 'Rp 1.500.000',
      features: ['1 Videographer', 'Video Durasi 3-5 Menit', 'All Files in Flashdisk'],
    },
     {
      title: 'Silver',
      price: 'Rp 2.000.000',
      features: ['1 Videographer', '1 Minute Teaser for Social Media', 'Video Durasi 3-5 Menit', 'All Files in Flashdisk'],
    },
  ],
  pertunangan: [
    {
      title: 'Bronze',
      price: 'Rp 600.000',
      features: ['3 Jam Dokumentasi', '1 Photographer', '40 Edited Photos', 'All Files in Google Drive'],
    },
    {
      title: 'Silver',
      price: 'Rp 750.000',
      features: ['4 Jam Dokumentasi', '1 Photographer', '1 Assistent','60 Edited Photos + Album', '60 Foto Cetak 4R', 'All Files in Google Drive'],
    },
    {
      title: 'Gold',
      price: 'Rp 1.200.000',
      features: ['5 Jam Dokumentasi', '1 Photographer', '1 Assistent','80 Edited Photos', '80 Foto Cetak 4R', '2 Foto Cetak 10R','All Files in Google Drive'],
    },
  ],
};

export default function PriceList() {
  const [selected, setSelected] = useState('wedding');

  return (
    <div className="price-section" id="priceList">
      <h2 className="price-title">Paket Harga</h2>
      <div className="price-tabs">
        {Object.keys(priceData).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={selected === key ? 'active' : ''}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div className="price-cards fade-in">
        {priceData[selected].map((item, index) => (
          <div key={index} className="price-card">
            <h3>{item.title}</h3>
            <p className="price">{item.price}</p>
            <ul>
              {item.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            <button
              className="order-btn"
              onClick={() =>
                window.open(
                  `https://wa.me/6285258821015?text=${encodeURIComponent(
                    `Halo, saya ingin memesan paket ${item.title}. Apakah masih tersedia?`
                  )}`,
                  '_blank'
                )
              }
            >
              Pesan Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
