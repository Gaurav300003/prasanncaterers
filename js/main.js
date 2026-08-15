// Prasanna Caterers - Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Luxury Splash Loader Handling
  const splash = document.getElementById('splash');
  if (splash) {
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      splash.classList.add('leaving');
    }, 1500);

    setTimeout(() => {
      splash.classList.add('hidden');
      document.body.style.overflow = '';
    }, 2000);
  }

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isExpanded = mobileDrawer.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile drawer when clicking a link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }

  // Gallery Lightbox Modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (galleryItems.length > 0 && lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Gallery Image';
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxClose) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // Quote Request Contact Form Handling
  const quoteForm = document.getElementById('quoteForm');
  const formSuccess = document.getElementById('formSuccess');

  if (quoteForm && formSuccess) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      quoteForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });

    const resetBtn = document.getElementById('resetFormBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        quoteForm.reset();
        formSuccess.style.display = 'none';
        quoteForm.style.display = 'block';
      });
    }
  }

  // Testimonials Carousel Auto-scroll and Navigation
  const testimonialsCarousel = document.querySelector('.testimonials-carousel');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');

  if (testimonialsCarousel) {
    let autoScrollInterval;
    let isPaused = false;
    const scrollAmount = 420; // Card width + gap

    // Auto-scroll functionality
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (!isPaused) {
          const maxScroll = testimonialsCarousel.scrollWidth - testimonialsCarousel.clientWidth;
          if (testimonialsCarousel.scrollLeft >= maxScroll) {
            testimonialsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            testimonialsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 5000); // Scroll every 5 seconds
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };

    // Navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        testimonialsCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        stopAutoScroll();
        startAutoScroll();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        testimonialsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        stopAutoScroll();
        startAutoScroll();
      });
    }

    // Pause on hover
    testimonialsCarousel.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    testimonialsCarousel.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Start auto-scroll
    startAutoScroll();

    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoScroll();
      } else {
        startAutoScroll();
      }
    });
  }
});
