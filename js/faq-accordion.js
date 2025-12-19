/**
 * FAQ Accordion Functionality
 * Maneja la apertura y cierre de las preguntas frecuentes
 */

(function() {
  'use strict';

  function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) {
      return; // No hay FAQs en esta página
    }

    faqItems.forEach(function(item) {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');

      if (!question || !answer) {
        return; // Estructura incompleta
      }

      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');

        // Cerrar todos los otros FAQs
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherQuestion = otherItem.querySelector('.faq-question');
            const otherIcon = otherItem.querySelector('.faq-icon');

            if (otherQuestion) {
              otherQuestion.setAttribute('aria-expanded', 'false');
            }
            if (otherIcon) {
              otherIcon.textContent = '+';
            }
          }
        });

        // Toggle del item actual
        if (isActive) {
          item.classList.remove('active');
          question.setAttribute('aria-expanded', 'false');
          if (icon) {
            icon.textContent = '+';
          }
        } else {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
          if (icon) {
            icon.textContent = '−';
          }
        }
      });
    });
  }

  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQAccordion);
  } else {
    initFAQAccordion();
  }
})();
