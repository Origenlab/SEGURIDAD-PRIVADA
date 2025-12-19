// Main JavaScript for Seguridad Privada Website

(function() {
  'use strict';

  // Load menu dynamically
  function loadMenu() {
    const container = document.getElementById('header-container');
    if (!container) {
      console.error('Header container not found');
      return;
    }

    console.log('Loading menu from menu.html...');

    fetch('menu.html')
      .then(function(response) {
        console.log('Menu fetch response:', response.status);
        if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
        return response.text();
      })
      .then(function(html) {
        console.log('Menu loaded successfully, length:', html.length);
        container.innerHTML = html;
        initMenuInteractions();
      })
      .catch(function(error) {
        console.error('Error loading menu:', error);
        console.error('Make sure menu.html exists in the same directory as index.html');
      });
  }

  // Initialize menu interactions
  function initMenuInteractions() {
    const menuToggle = document.getElementById('menuToggle');
    const headerNav = document.getElementById('headerNav');
    const menuOverlay = document.getElementById('menuOverlay');
    const dropdownItems = document.querySelectorAll('.nav__item--dropdown');

    if (!menuToggle || !headerNav) {
      console.error('Menu elements not found');
      return;
    }

    console.log('Menu interactions initialized successfully');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      headerNav.classList.toggle('active');
      if (menuOverlay) {
        menuOverlay.classList.toggle('active');
      }
      document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking overlay
    if (menuOverlay) {
      menuOverlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        dropdownItems.forEach(function(item) {
          item.classList.remove('active');
        });
      });
    }

    // Handle mobile dropdown toggle
    dropdownItems.forEach(function(item) {
      const link = item.querySelector('.nav__link');
      if (link) {
        link.addEventListener('click', function(e) {
          if (window.innerWidth < 734) {
            e.preventDefault();
            // Close other dropdowns
            dropdownItems.forEach(function(otherItem) {
              if (otherItem !== item) {
                otherItem.classList.remove('active');
              }
            });
            // Toggle current dropdown
            item.classList.toggle('active');
          }
        });
      }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 734 && headerNav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
        if (menuOverlay) {
          menuOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
        dropdownItems.forEach(function(item) {
          item.classList.remove('active');
        });
      }
    });
  }

  // Load footer dynamically
  function loadFooter() {
    const container = document.getElementById('footer-container');
    if (!container) {
      console.error('Footer container not found');
      return;
    }

    console.log('Loading footer from footer.html...');

    fetch('footer.html')
      .then(function(response) {
        console.log('Footer fetch response:', response.status);
        if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
        return response.text();
      })
      .then(function(html) {
        console.log('Footer loaded successfully, length:', html.length);
        container.innerHTML = html;
      })
      .catch(function(error) {
        console.error('Error loading footer:', error);
        console.error('Make sure footer.html exists in the same directory as index.html');
      });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // Initialize FAQ accordion functionality
  function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', function() {
          const isActive = item.classList.contains('active');

          // Close all other items
          faqItems.forEach(function(otherItem) {
            otherItem.classList.remove('active');
          });

          // Toggle current item
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // Form validation
  function initFormValidation() {
    const forms = document.querySelectorAll('.contact-form');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(function(field) {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('field--error');
          } else {
            field.classList.remove('field--error');
          }
        });

        if (isValid) {
          // Here you would typically send the form data to a server
          alert('Gracias por su solicitud. Nos pondremos en contacto con usted pronto.');
          form.reset();
        } else {
          alert('Por favor complete todos los campos requeridos.');
        }
      });
    });
  }

  // Initialize all functions when DOM is ready
  function init() {
    // Menu and footer are now embedded in HTML, just init interactions
    initMenuInteractions();
    initSmoothScroll();
    initFAQAccordion();
    initFormValidation();
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
