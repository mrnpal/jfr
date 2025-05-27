import '../HeroSection.css';
import heroImage from '../assets/hero.jpeg';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function HeroSection() {
  return (
    <section className="hero" id='home'>
      <div className="hero-content">
        <h1>Jasa Fotografi Profesional</h1>
        <p>
          Abadikan momen spesial Anda dengan sentuhan visual yang berkelas. Kami hadir untuk kebutuhan fotografi pernikahan, prewedding, hingga personal branding.
        </p>
        <button
          className="cta-button"
          onClick={() =>
            window.open(
              `https://wa.me/6285258821015?text=${encodeURIComponent(
                `Halo, Saya ingin konsultasi dulu sebelum booking. Apakah bisa?`
              )}`,
              '_blank'
            )
          }
        >
          Pesan Sekarang
        </button>
        <div className="hero-social">
          <a href="https://instagram.com/jfrphotograpy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={28} />
          </a>
          <a href="https://tiktok.com/@jfrfotografi" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{marginLeft: '12px'}}>
            <FaTiktok size={28} />
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Fotografi" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
