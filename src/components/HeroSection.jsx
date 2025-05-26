import '../HeroSection.css';
import heroImage from '../assets/hero.jpeg'; // sesuaikan path gambar

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
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Fotografi" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
