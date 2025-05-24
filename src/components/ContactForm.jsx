import React from 'react';

const ContactForm = () => (
  <section>
    <h2>Hubungi Kami</h2>
    <form>
      <input type="text" placeholder="Nama Anda" required />
      <input type="email" placeholder="Email" required />
      <textarea rows="5" placeholder="Pesan Anda" required />
      <button type="submit">Kirim</button>
    </form>
  </section>
);

export default ContactForm;
