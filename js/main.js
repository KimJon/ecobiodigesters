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
    let specs = 'Best for 1 to 8 people • 1-Day Setup • 3 Chambers';
    let price = 'KSh 75,000 – 85,000';
    let minKsh = 75000;
    let maxKsh = 85000;

    if (users <= 8) {
      modelName = 'Eco Compact Biodigester';
      specs = 'Best for 1 to 8 people (Bungalow or Maisonette) • 1-Day Setup';
      minKsh = 75000;
      maxKsh = 85000;
    } else if (users <= 20) {
      modelName = 'Eco Standard Family Biodigester';
      specs = 'Best for 9 to 20 people (Large Family or Duplex) • 1–2 Days Setup';
      minKsh = 95000;
      maxKsh = 115000;
    } else if (users <= 50) {
      modelName = 'Eco Plus Biodigester (Apartment / Flats)';
      specs = 'Best for 21 to 50 people (Rental Flats & Hostels) • 2 Days Setup';
      minKsh = 140000;
      maxKsh = 180000;
    } else {
      modelName = 'Eco Commercial Multi-Chamber System';
      specs = 'Best for 50 to 150+ people (Schools, Hotels, Estates) • Custom Setup';
      minKsh = 220000;
      maxKsh = 350000;
    }

    if (hasGrease) {
      minKsh += 18000;
      maxKsh += 25000;
      specs += ' + Kitchen Grease Trap included';
    }

    price = `KSh ${minKsh.toLocaleString()} – ${maxKsh.toLocaleString()}`;

    resultModel.textContent = modelName;
    if (resultSpecs) resultSpecs.textContent = specs;
    if (resultPrice) resultPrice.textContent = price;

    if (calcWhatsAppBtn) {
      const msg = encodeURIComponent(
        `Hello Eco Biodigesters (Ruai Office)!\n` +
        `I checked your website price calculator:\n` +
        `- Property: ${property}\n` +
        `- People/Users: Approx ${users}\n` +
        `- Recommended Tank: ${modelName}\n` +
        `- Price Range: ${price}\n` +
        `- Grease Trap: ${hasGrease ? 'Yes' : 'No'}\n` +
        `Please give me your best price and arrange a site visit.`
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

  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  let currentImgIndex = 0;
  const cardsArray = Array.from(galleryCards);

  function openLightbox(index) {
    if (!lightboxModal || !lightboxImg || cardsArray.length === 0) return;
    currentImgIndex = index;
    const card = cardsArray[currentImgIndex];
    const img = card.querySelector('img');
    const title = card.querySelector('.gallery-info')?.textContent || 'Eco Biodigester Job Done';

    lightboxImg.src = img.src;
    if (lightboxCaption) {
      lightboxCaption.textContent = `${title} (${currentImgIndex + 1} of ${cardsArray.length})`;
    }
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryCards.forEach((card, idx) => {
    card.addEventListener('click', () => openLightbox(idx));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex - 1 + cardsArray.length) % cardsArray.length;
    openLightbox(currentImgIndex);
  });
  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex + 1) % cardsArray.length;
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
