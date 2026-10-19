/* ==========================================================================
   Eco Biodigesters - JavaScript
   Interactive functionality matching ecosepticventures.com
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Auto Year in Footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu when a nav link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 3. Navbar Scroll Effect
    const navbar = document.getElementById('navbar') || document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.style.padding = '8px 0';
                navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            } else {
                navbar.style.padding = '12px 0';
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            }
        });
    }

    // 4. Scroll Animation Observer
    const animateElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
    if (animateElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.12
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animateElements.forEach(el => observer.observe(el));
    }

    // 5. Active Nav Link Handler based on current URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a:not(.btn)');
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPath || (currentPath === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        }
    });

    // 6. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(other => other.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 7. Direct WhatsApp Form Submission (No Email)
    const forms = document.querySelectorAll('.contact-form, #whatsapp-form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = (form.querySelector('[name="name"]') || {}).value || '';
            const phone = (form.querySelector('[name="phone"]') || {}).value || '';
            const locationInput = form.querySelector('[name="location"]');
            const location = locationInput ? locationInput.value : '';
            const serviceSelect = form.querySelector('[name="service"]');
            const serviceText = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'General Inquiry';
            const message = (form.querySelector('[name="message"]') || {}).value || '';

            const whatsappNumber = '254724582615';
            let text = `Hello Eco Biodigesters (Ruai Office),%0A%0AI would like to make an inquiry:%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(serviceText)}`;

            if (location) {
                text += `%0A*Location/County:* ${encodeURIComponent(location)}`;
            }
            if (message) {
                text += `%0A*Details:* ${encodeURIComponent(message)}`;
            }

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // 8. Horizontal Slider Navigation (Exact ecosepticventures behavior)
    const projectSections = document.querySelectorAll('.project-section');
    projectSections.forEach(section => {
        const track = section.querySelector('.slider-track');
        const prevBtn = section.querySelector('.prev-btn');
        const nextBtn = section.querySelector('.next-btn');

        if (track && prevBtn && nextBtn) {
            const scrollAmount = 315; // slide width (300) + gap (15)

            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            // Gentle auto-slide
            let autoSlideInterval;
            const startAutoSlide = () => {
                autoSlideInterval = setInterval(() => {
                    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                        track.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                }, 4500);
            };

            const stopAutoSlide = () => {
                clearInterval(autoSlideInterval);
            };

            startAutoSlide();
            track.addEventListener('mouseenter', stopAutoSlide);
            track.addEventListener('mouseleave', startAutoSlide);
            track.addEventListener('touchstart', stopAutoSlide, { passive: true });
            track.addEventListener('touchend', () => {
                setTimeout(startAutoSlide, 3500);
            }, { passive: true });

            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                setTimeout(startAutoSlide, 6000);
            });
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                setTimeout(startAutoSlide, 6000);
            });
        }
    });

    // 9. Lightbox Modal for All Slides & Gallery Images
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        const allSlides = Array.from(document.querySelectorAll('.slide'));
        let currentIndex = 0;

        const updateLightbox = (index) => {
            if (index < 0) index = allSlides.length - 1;
            if (index >= allSlides.length) index = 0;
            currentIndex = index;

            const slide = allSlides[currentIndex];
            const img = slide.querySelector('img');
            const caption = slide.querySelector('.slide-caption');

            if (img && lightboxImg) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Eco Biodigesters Project Photo';
            }
            if (caption && lightboxCaption) {
                lightboxCaption.textContent = caption.textContent;
            }
        };

        allSlides.forEach((slide, idx) => {
            slide.addEventListener('click', () => {
                updateLightbox(idx);
                lightbox.classList.add('active');
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateLightbox(currentIndex - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateLightbox(currentIndex + 1);
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') updateLightbox(currentIndex - 1);
            if (e.key === 'ArrowRight') updateLightbox(currentIndex + 1);
        });
    }

    // 10. System Sizing Quotation Helper (on pricing.html)
    const propertyTypeSelect = document.getElementById('calc-type');
    const userCountInput = document.getElementById('calc-users');
    const calcSubmitBtn = document.getElementById('calc-submit');

    if (propertyTypeSelect && userCountInput && calcSubmitBtn) {
        const updateRecommendation = () => {
            const users = parseInt(userCountInput.value) || 6;
            const recTitle = document.getElementById('calc-rec-title');
            const recDesc = document.getElementById('calc-rec-desc');
            const recDuration = document.getElementById('calc-rec-duration');

            let title = 'Eco Compact Biodigester';
            let desc = 'Ideal for residential 1 to 4 bedroom homes with up to 8 continuous users. Built with reinforced polystyrene technology.';
            let duration = '1 to 2 working days';

            if (users >= 9 && users <= 20) {
                title = 'Eco Standard Biodigester';
                desc = 'Ideal for large homesteads, guest houses, and rental compounds with 9 to 20 users.';
                duration = '2 to 3 working days';
            } else if (users > 20) {
                title = 'Commercial / Institutional Biodigester';
                desc = 'Engineered for schools, apartments, factories, and hotels with 21+ occupants.';
                duration = '3 to 7 working days';
            }

            if (recTitle) recTitle.textContent = title;
            if (recDesc) recDesc.textContent = desc;
            if (recDuration) recDuration.textContent = duration;
        };

        propertyTypeSelect.addEventListener('change', updateRecommendation);
        userCountInput.addEventListener('input', updateRecommendation);
        updateRecommendation();

        calcSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const propertyType = propertyTypeSelect.options[propertyTypeSelect.selectedIndex].text;
            const users = userCountInput.value || '6';
            const location = (document.getElementById('calc-location') || {}).value || 'Kenya';
            const recTitle = (document.getElementById('calc-rec-title') || {}).textContent || 'Biodigester System';

            const whatsappUrl = `https://wa.me/254724582615?text=Hello%20Eco%20Biodigesters,%20I%20used%20your%20System%20Sizing%20Guide:%0A- Property:%20${encodeURIComponent(propertyType)}%0A- Users:%20${encodeURIComponent(users)}%0A- Location:%20${encodeURIComponent(location)}%0A- Recommended:%20${encodeURIComponent(recTitle)}%0APlease%20provide%20a%20free%20site%20visit%20and%20quotation.`;
            window.open(whatsappUrl, '_blank');
        });
    }
});
