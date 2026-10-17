/**
 * Eco Biodigesters Kenya - Interactive Logic & UI Handlers
 * Phone/WhatsApp: 0724582615 (+254 724 582 615)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation & Scroll Spy
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Navbar shadow on scroll
    if (scrollY > 60) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Back to top click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // 3. Interactive Biodigester Sizing & Cost Calculator
  const calcProperty = document.getElementById('calc-property');
  const calcUsers = document.getElementById('calc-users');
  const calcGrease = document.getElementById('calc-grease');
  const calcEnzymes = document.getElementById('calc-enzymes');

  const resultModel = document.getElementById('result-model');
  const resultSpecs = document.getElementById('result-specs');
  const resultEstimate = document.getElementById('result-estimate');
  const resultWhatsappBtn = document.getElementById('calc-whatsapp-btn');

  function calculateBiodigester() {
    if (!calcProperty || !calcUsers || !resultModel) return;

    const property = calcProperty.value;
    const users = parseInt(calcUsers.value, 10);
    const hasGrease = calcGrease ? calcGrease.checked : false;
    const hasEnzymes = calcEnzymes ? calcEnzymes.checked : false;

    let modelName = 'Eco Biodigester Compact';
    let specs = 'Recommended for 1–8 Users | Standard 1.2m Diameter | 1-Day Setup';
    let minPrice = 75000;
    let maxPrice = 85000;

    if (users <= 8) {
      modelName = 'Eco Biodigester Compact (Single Home)';
      specs = 'Engineered for up to 8 users | 3-Chamber Biological System | 1-Day Setup';
      minPrice = 75000;
      maxPrice = 85000;
    } else if (users <= 20) {
      modelName = 'Eco Biodigester Standard (Family & Maisonette)';
      specs = 'Engineered for 9–20 users | Reinforced Multi-Chamber | 1-2 Days Setup';
      minPrice = 95000;
      maxPrice = 115000;
    } else if (users <= 45) {
      modelName = 'Eco Biodigester Plus (Multi-Family / Units)';
      specs = 'Engineered for 21–45 users | High-flow anaerobic chambers | 2 Days Setup';
      minPrice = 135000;
      maxPrice = 175000;
    } else if (users <= 100) {
      modelName = 'Eco Biodigester Commercial Max (Apartments/Hostels)';
      specs = 'Engineered for 46–100 users | Heavy-duty dual system + French drain';
      minPrice = 220000;
      maxPrice = 290000;
    } else {
      modelName = 'Eco Commercial Custom Estate / Institutional System';
      specs = 'Engineered for 100+ users | High capacity multi-cell digestors';
      minPrice = 350000;
      maxPrice = 500000;
    }

    if (hasGrease) {
      minPrice += 18000;
      maxPrice += 25000;
      specs += ' + Commercial Grease Trap';
    }

    if (hasEnzymes) {
      minPrice += 4000;
      maxPrice += 6000;
      specs += ' + Bio-Enzyme Starter Kit';
    }

    resultModel.textContent = modelName;
    resultSpecs.textContent = specs;
    resultEstimate.textContent = `KSh ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}`;

    // Update WhatsApp link with details
    const message = encodeURIComponent(
      `Hello Eco Biodigesters Kenya! I used your website calculator:\n` +
      `- Property Type: ${calcProperty.options[calcProperty.selectedIndex].text}\n` +
      `- Capacity: Approx ${users} users\n` +
      `- Recommended: ${modelName}\n` +
      `- Estimated Range: KSh ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}\n` +
      `- Grease Trap: ${hasGrease ? 'Yes' : 'No'}\n` +
      `- Starter Enzymes: ${hasEnzymes ? 'Yes' : 'No'}\n` +
      `Kindly provide an official site visit and quote for my property.`
    );
    resultWhatsappBtn.href = `https://wa.me/254724582615?text=${message}`;
  }

  [calcProperty, calcUsers, calcGrease, calcEnzymes].forEach(elem => {
    elem?.addEventListener('change', calculateBiodigester);
  });
  // Initial calculate call
  calculateBiodigester();

  // 4. Portfolio Filtering & Lightbox Modal
  const portfolioTabs = document.querySelectorAll('.portfolio-tab');
  const galleryCards = document.querySelectorAll('.gallery-card');

  portfolioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      portfolioTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      galleryCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox implementation for 27 images
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  let activeIndex = 0;
  const galleryItems = Array.from(galleryCards);

  function openLightbox(index) {
    if (!lightboxModal || !lightboxImg) return;
    activeIndex = index;
    const card = galleryItems[activeIndex];
    const img = card.querySelector('img');
    const title = card.querySelector('.gallery-title')?.textContent || 'Eco Biodigester Installation';
    const category = card.querySelector('.gallery-cat')?.textContent || 'Project';

    lightboxImg.src = img.src;
    lightboxCaption.textContent = `${title} (${category})`;
    lightboxCounter.textContent = `Project ${activeIndex + 1} of ${galleryItems.length}`;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= galleryItems.length) nextIndex = 0;
    openLightbox(nextIndex);
  }

  function prevLightbox() {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) prevIndex = galleryItems.length - 1;
    openLightbox(prevIndex);
  }

  galleryCards.forEach((card, idx) => {
    card.addEventListener('click', () => openLightbox(idx));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    nextLightbox();
  });
  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    prevLightbox();
  });

  // Close on outside background click
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  // 5. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isOpen = faqItem.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isOpen) {
        faqItem.classList.add('active');
      }
    });
  });

  // 6. Contact Form & Hero Quick Quote Form Handlers
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || '';
    const phone = document.getElementById('contact-phone')?.value || '';
    const location = document.getElementById('contact-location')?.value || '';
    const service = document.getElementById('contact-service')?.value || '';
    const message = document.getElementById('contact-message')?.value || '';

    const text = encodeURIComponent(
      `Hello Eco Biodigesters!\n` +
      `New Website Contact Request:\n` +
      `- Name: ${name}\n` +
      `- Phone: ${phone}\n` +
      `- Location: ${location}\n` +
      `- Service Required: ${service}\n` +
      `- Message: ${message}`
    );

    window.open(`https://wa.me/254724582615?text=${text}`, '_blank');
    alert('Thank you! Redirecting to WhatsApp to send your inquiry directly to our engineering team.');
    contactForm.reset();
  });

  const heroForm = document.getElementById('hero-quick-form');
  heroForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('hero-name')?.value || '';
    const phone = document.getElementById('hero-phone')?.value || '';
    const type = document.getElementById('hero-type')?.value || '';
    const location = document.getElementById('hero-location')?.value || '';

    const text = encodeURIComponent(
      `Hello Eco Biodigesters! I'd like a quick quote for my property:\n` +
      `- Name: ${name}\n` +
      `- Phone: ${phone}\n` +
      `- Property Type: ${type}\n` +
      `- Site Location: ${location}`
    );

    window.open(`https://wa.me/254724582615?text=${text}`, '_blank');
    alert('Redirecting to WhatsApp to chat with our installation manager!');
    heroForm.reset();
  });

  // 7. Dynamic Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
