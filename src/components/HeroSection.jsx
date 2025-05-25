import '../HeroSection.css';
import heroImage from '../assets/hero.jpeg'; // sesuaikan path gambar

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Jasa Fotografi Profesional</h1>
        <p>
          Abadikan momen spesial Anda dengan sentuhan visual yang berkelas. Kami hadir untuk kebutuhan fotografi pernikahan, prewedding, hingga personal branding.
        </p>
        <button className="cta-button">Hubungi Kami</button>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Fotografi" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
