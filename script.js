
  // Scroll smoothly to contact section when button is clicked
  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  // Contact form submission handler - simulate success message
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    successMessage.style.display = 'block';

    setTimeout(() => {
      successMessage.style.display = 'none';
      form.reset();
    }, 4000);
  });
