/**
 * Blog Sidebar Functionality
 * Handles search, interactions, and dynamic behavior
 * ORIGINS Private Security
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  function initSidebar() {
    // Search functionality
    const searchInput = document.getElementById('blogSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', debounce(handleSearch, 300));

      // Handle search form submission
      const searchForm = searchInput.closest('form');
      if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
          e.preventDefault();
          handleSearch();
        });
      }
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.sidebar-newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Track sidebar interactions
    trackSidebarInteractions();

    // Handle sticky sidebar behavior
    initStickySidebar();
  }

  /**
   * Handle blog search
   */
  function handleSearch() {
    const searchInput = document.getElementById('blogSearchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (query.length === 0) {
      return;
    }

    // Track search event
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        'event': 'blog_search',
        'event_category': 'Engagement',
        'event_label': query,
        'value': 1
      });
    }

    // Simple redirect to blog index with search param
    // The blog index will handle filtering
    window.location.href = `../blog/?search=${encodeURIComponent(query)}`;
  }

  /**
   * Handle newsletter subscription
   */
  function handleNewsletterSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!emailInput || !submitButton) return;

    const email = emailInput.value.trim();

    if (!email) {
      showNotification('Por favor ingresa tu correo electrónico', 'error');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Por favor ingresa un correo válido', 'error');
      return;
    }

    // Disable button
    submitButton.disabled = true;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';

    // Track newsletter subscription
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        'event': 'newsletter_signup',
        'event_category': 'Lead Generation',
        'event_label': 'Blog Sidebar',
        'value': 1
      });
    }

    // Simulate API call (replace with actual endpoint)
    setTimeout(function() {
      showNotification('¡Gracias por suscribirte! Revisa tu correo.', 'success');
      emailInput.value = '';
      submitButton.disabled = false;
      submitButton.textContent = originalText;

      // In production, send to actual API:
      // fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: email })
      // }).then(...)
    }, 1000);
  }

  /**
   * Track sidebar link clicks
   */
  function trackSidebarInteractions() {
    // Track category clicks
    const categoryLinks = document.querySelectorAll('.sidebar-category-link');
    categoryLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const categoryName = this.querySelector('.sidebar-category-name')?.textContent;
        if (typeof dataLayer !== 'undefined' && categoryName) {
          dataLayer.push({
            'event': 'sidebar_category_click',
            'event_category': 'Engagement',
            'event_label': categoryName
          });
        }
      });
    });

    // Track popular article clicks
    const popularLinks = document.querySelectorAll('.sidebar-popular-link');
    popularLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const articleTitle = this.querySelector('.sidebar-popular-title')?.textContent;
        if (typeof dataLayer !== 'undefined' && articleTitle) {
          dataLayer.push({
            'event': 'sidebar_popular_article_click',
            'event_category': 'Engagement',
            'event_label': articleTitle
          });
        }
      });
    });

    // Track service links
    const serviceLinks = document.querySelectorAll('.sidebar-service-link');
    serviceLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const serviceName = this.querySelector('.sidebar-service-title')?.textContent;
        if (typeof dataLayer !== 'undefined' && serviceName) {
          dataLayer.push({
            'event': 'sidebar_service_click',
            'event_category': 'Engagement',
            'event_label': serviceName
          });
        }
      });
    });

    // Track CTA button clicks
    const ctaButton = document.querySelector('.sidebar-cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', function() {
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({
            'event': 'sidebar_cta_click',
            'event_category': 'Lead Generation',
            'event_label': 'Solicitar Cotización'
          });
        }
      });
    }

    // Track WhatsApp button
    const whatsappButton = document.querySelector('.sidebar-cta-whatsapp');
    if (whatsappButton) {
      whatsappButton.addEventListener('click', function() {
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({
            'event': 'sidebar_whatsapp_click',
            'event_category': 'Lead Generation',
            'event_label': 'WhatsApp CTA'
          });
        }
      });
    }

    // Track tag clicks
    const tagLinks = document.querySelectorAll('.sidebar-tag');
    tagLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const tagName = this.textContent;
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({
            'event': 'sidebar_tag_click',
            'event_category': 'Engagement',
            'event_label': tagName
          });
        }
      });
    });
  }

  /**
   * Initialize sticky sidebar behavior
   */
  function initStickySidebar() {
    const sidebar = document.querySelector('.blog-sidebar-sticky');
    if (!sidebar) return;

    // Add smooth scroll behavior on resize
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        // Recalculate sidebar height on resize
        const viewportHeight = window.innerHeight;
        const sidebarHeight = sidebar.offsetHeight;

        if (sidebarHeight > viewportHeight) {
          sidebar.style.maxHeight = (viewportHeight - 120) + 'px';
        }
      }, 250);
    });
  }

  /**
   * Show notification message
   */
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `sidebar-notification sidebar-notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      padding: 16px 24px;
      background: ${type === 'success' ? '#28a745' : '#dc3545'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      font-size: 14px;
      font-weight: 600;
      animation: slideIn 0.3s ease;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(function() {
      notification.style.animation = 'slideIn 0.3s ease reverse';
      setTimeout(function() {
        notification.remove();
        style.remove();
      }, 300);
    }, 4000);
  }

  /**
   * Debounce function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize when sidebar is loaded
  // Use MutationObserver to detect when sidebar is injected into DOM
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        const sidebarContainer = document.getElementById('blog-sidebar-container');
        if (sidebarContainer && sidebarContainer.children.length > 0) {
          initSidebar();
          observer.disconnect(); // Stop observing once sidebar is loaded
        }
      }
    });
  });

  // Start observing
  if (document.getElementById('blog-sidebar-container')) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Fallback: also try to init after a short delay
  setTimeout(function() {
    if (document.querySelector('.blog-sidebar')) {
      initSidebar();
    }
  }, 1000);

})();
