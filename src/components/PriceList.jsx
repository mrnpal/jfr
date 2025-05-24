import React from 'react';
import '../PriceList.css';

const pricePackages = [
  {
    title: 'Paket Basic',
    price: 'Rp 500.000',
    features: ['1 jam sesi foto', '10 foto edit HD', '1 lokasi'],
  },
  {
    title: 'Paket Premium',
    price: 'Rp 1.200.000',
    features: ['2 jam sesi foto', '30 foto edit HD', '2 lokasi', 'Album digital'],
  },
  {
    title: 'Paket Eksklusif',
    price: 'Rp 2.500.000',
    features: [
      '4 jam sesi foto',
      '60 foto edit HD',
      '4 lokasi',
      'Album fisik & digital',
      'Make-up artist',
    ],
  },
];

const PriceList = () => {
  return (
    <section className="price-section">
      <h2>Daftar Harga</h2>
      <p className="price-description">Pilih paket yang sesuai dengan kebutuhan Anda.</p>
      <div className="price-cards">
        {pricePackages.map((pkg, index) => (
          <div className="price-card" key={index}>
            <h3>{pkg.title}</h3>
            <p className="price">{pkg.price}</p>
            <ul>
              {pkg.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            <button className="order-btn">Pesan Sekarang</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceList;
