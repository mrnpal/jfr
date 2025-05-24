import '../Services.css';

function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Layanan Kami</h2>
      <p className="section-subtitle">Kami menyediakan berbagai jasa fotografi profesional untuk kebutuhan Anda.</p>

      <div className="services-grid">
        <div className="service-card">
          <img src="/images/2.jpeg" alt="Product Photography" />
          <h3>Fotografi Prewedding</h3>
          <p>Tingkatkan daya tarik produk Anda dengan hasil foto yang tajam dan estetik.</p>
        </div>
        <div className="service-card">
          <img src="/images/1.jpeg" alt="Product Photography" />
          <h3>Fotografi Prewedding</h3>
          <p>Tingkatkan daya tarik produk Anda dengan hasil foto yang tajam dan estetik.</p>
        </div>
        <div className="service-card">
          <img src="/images/4.jpeg" alt="Product Photography" />
          <h3>Fotografi Prewedding</h3>
          <p>Tingkatkan daya tarik produk Anda dengan hasil foto yang tajam dan estetik.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
