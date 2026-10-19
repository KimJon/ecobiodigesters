/**
 * Eco Biodigesters Kenya - main.js
 * Multi-page navigation, Lightbox, Calculator, and Direct WhatsApp/Call actions
 * Phone/WhatsApp: 0724 582 615
 * Office: Ruai Off Kangundo Road
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  // 2. Interactive Biodigester Sizing & Cost Calculator (For Home & Pricing pages)
  const calcUsers = document.getElementById('calc-users');
  const calcProperty = document.getElementById('calc-property');
  const calcGrease = document.getElementById('calc-grease');
  const resultModel = document.getElementById('result-model');
  const resultSpecs = document.getElementById('result-specs');
  const resultPrice = document.getElementById('result-price');
  const calcWhatsAppBtn = document.getElementById('calc-whatsapp-btn');

  function updateCalculator() {
    if (!calcUsers || !resultModel) return;

    const users = parseInt(calcUsers.value, 10);
    const property = calcProperty ? calcProperty.options[calcProperty.selectedIndex].text : 'Residential';
    const hasGrease = calcGrease ? calcGrease.checked : false;

    let modelName = 'Eco Compact Biodigester';
    let specs = 'Best for 1 to 8 people (Bungalow or Maisonette) • 1–7 Days Setup • Reinforced Polystyrene';
    let soakDetails = 'Standard 5ft deep volcanic ballast soak pit. 100% odourless drainage.';

    if (users <= 8) {
      modelName = 'Eco Compact Biodigester';
      specs = 'Recommended for 1 to 8 occupants (1–4 bedroom home or bungalow). Compact footprint that fits in any yard.';
      soakDetails = 'Reinforced polystyrene formwork + volcanic stone soak pit. Clean 1–7 day installation.';
    } else if (users <= 20) {
      modelName = 'Eco Standard Family Biodigester';
      specs = 'Recommended for 9 to 20 occupants (Maisonette, townhouse, or home with SQ/guest wing).';
      soakDetails = 'Multi-chamber reinforced polystyrene system designed for higher laundry and bathroom flow.';
    } else {
      modelName = 'Eco Plus Commercial Biodigester';
      specs = 'Recommended for 21+ occupants (Rental apartments, flats, schools, churches, or commercial premises).';
      soakDetails = 'Heavy-duty multi-chamber filtration with extended soakaway bed to handle continuous daily use.';
    }

    if (hasGrease) {
      specs += ' + Kitchen Grease Trap included to protect system from cooking oils.';
    }

    resultModel.textContent = modelName;
    if (resultSpecs) resultSpecs.textContent = specs;
    if (resultPrice) resultPrice.textContent = 'Free Site Inspection & Custom Quote';

    if (calcWhatsAppBtn) {
      const msg = encodeURIComponent(
        `Hello Eco Biodigesters (Ruai Office)!\n` +
        `I would like a quotation for my project:\n` +
        `- Property Type: ${property}\n` +
        `- Occupants / Users: Approx ${users}\n` +
        `- Recommended System: ${modelName}\n` +
        `- Kitchen Grease Trap: ${hasGrease ? 'Yes, please include' : 'Not needed'}\n` +
        `Please share quotation details and advise on booking a site visit.`
      );
      calcWhatsAppBtn.href = `https://wa.me/254724582615?text=${msg}`;
    }
  }

  if (calcUsers) {
    calcUsers.addEventListener('change', updateCalculator);
    calcProperty?.addEventListener('change', updateCalculator);
    calcGrease?.addEventListener('change', updateCalculator);
    updateCalculator();
  }

  // 3. Quick Booking Form (Direct to WhatsApp)
  const quickBookingForm = document.getElementById('quick-booking-form');
  quickBookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('book-name')?.value || '';
    const phone = document.getElementById('book-phone')?.value || '';
    const location = document.getElementById('book-location')?.value || '';
    const type = document.getElementById('book-type')?.value || '';

    const text = encodeURIComponent(
      `Hello Eco Biodigesters!\n` +
      `I want to book a free site visit:\n` +
      `- Name: ${name}\n` +
      `- Phone: ${phone}\n` +
      `- Location: ${location}\n` +
      `- Property Type: ${type}\n` +
      `Please contact me.`
    );
    window.open(`https://wa.me/254724582615?text=${text}`, '_blank');
    quickBookingForm.reset();
  });

  // 4. Contact Page Form (Direct to WhatsApp)
  const contactForm = document.getElementById('contact-page-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value || '';
    const phone = document.getElementById('c-phone')?.value || '';
    const location = document.getElementById('c-location')?.value || '';
    const service = document.getElementById('c-service')?.value || '';
    const message = document.getElementById('c-message')?.value || '';

    const text = encodeURIComponent(
      `Hello Eco Biodigesters (Ruai Office)!\n` +
      `New Website Inquiry:\n` +
      `- Name: ${name}\n` +
      `- Phone: ${phone}\n` +
      `- Location: ${location}\n` +
      `- Needed: ${service}\n` +
      `- Details: ${message}`
    );
    window.open(`https://wa.me/254724582615?text=${text}`, '_blank');
    contactForm.reset();
  });

  // 5. Portfolio Filtering & Lightbox (For portfolio.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      galleryCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Portfolio Slider Navigation (ecosepticventures style)
  const projectSections = document.querySelectorAll('.project-section');
  projectSections.forEach((section) => {
    const track = section.querySelector('.slider-track');
    const prevBtn = section.querySelector('.prev-btn');
    const nextBtn = section.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
      const scrollAmount = 325; // slide width (310) + gap (15)

      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });

      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }
  });

  // Portfolio Lightbox (works on both .slide and .gallery-card)
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  let currentImgIndex = 0;
  const portfolioElements = Array.from(document.querySelectorAll('.slide, .gallery-card'));

  function openLightbox(index) {
    if (!lightboxModal || !lightboxImg || portfolioElements.length === 0) return;
    currentImgIndex = index;
    const item = portfolioElements[currentImgIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('.slide-caption, .gallery-info')?.textContent || 'Eco Biodigesters Project';

    lightboxImg.src = img.src;
    if (lightboxCaption) {
      lightboxCaption.textContent = `${title} (${currentImgIndex + 1} of ${portfolioElements.length})`;
    }
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  portfolioElements.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex - 1 + portfolioElements.length) % portfolioElements.length;
    openLightbox(currentImgIndex);
  });
  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex + 1) % portfolioElements.length;
    openLightbox(currentImgIndex);
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev?.click();
    if (e.key === 'ArrowRight') lightboxNext?.click();
  });

  // 6. FAQ Accordion
  const faqRows = document.querySelectorAll('.faq-row');
  faqRows.forEach(row => {
    const btn = row.querySelector('.faq-btn');
    btn?.addEventListener('click', () => {
      const isOpen = row.classList.contains('active');
      faqRows.forEach(r => r.classList.remove('active'));
      if (!isOpen) {
        row.classList.add('active');
      }
    });
  });
});
