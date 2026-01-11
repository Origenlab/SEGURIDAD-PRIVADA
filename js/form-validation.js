/**
 * Form Validation - Seguridad y UX mejorada
 * ORIGINS PRIVATE SECURITY S.A. DE C.V.
 *
 * Validacion del lado del cliente con proteccion contra spam
 * y rate limiting basico
 */

(function() {
  'use strict';

  // Rate limiting - maximo 3 envios por hora
  const RATE_LIMIT_KEY = 'form_submissions';
  const MAX_SUBMISSIONS = 3;
  const TIME_WINDOW = 3600000; // 1 hora en ms

  // Patrones de validacion
  const patterns = {
    // Email valido
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,

    // Telefono mexicano (10 digitos, con o sin formato)
    phone: /^(?:\+?52)?[\s.-]?(?:\d{2}[\s.-]?)?\d{4}[\s.-]?\d{4}$|^\d{10}$/,

    // Solo letras y espacios (nombres)
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,100}$/,

    // Texto seguro (sin scripts)
    safeText: /^[^<>{}]*$/
  };

  // Mensajes de error
  const errorMessages = {
    required: 'Este campo es obligatorio',
    email: 'Ingresa un correo electrónico válido',
    phone: 'Ingresa un teléfono válido (10 dígitos)',
    name: 'Ingresa un nombre válido',
    minLength: 'Debe tener al menos {min} caracteres',
    maxLength: 'Debe tener máximo {max} caracteres',
    unsafe: 'El texto contiene caracteres no permitidos',
    rateLimit: 'Has enviado demasiados mensajes. Intenta más tarde.'
  };

  // Verificar rate limiting
  function checkRateLimit() {
    try {
      const data = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '{"submissions":[]}');
      const now = Date.now();

      // Filtrar envios dentro de la ventana de tiempo
      data.submissions = data.submissions.filter(time => now - time < TIME_WINDOW);

      if (data.submissions.length >= MAX_SUBMISSIONS) {
        return false;
      }

      return true;
    } catch (e) {
      return true;
    }
  }

  // Registrar envio
  function recordSubmission() {
    try {
      const data = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '{"submissions":[]}');
      data.submissions.push(Date.now());
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
    } catch (e) {
      // Silently fail
    }
  }

  // Sanitizar input
  function sanitizeInput(value) {
    if (typeof value !== 'string') return '';

    return value
      .trim()
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  // Validar campo individual
  function validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    const name = input.name.toLowerCase();
    const required = input.hasAttribute('required');
    const minLength = input.getAttribute('minlength');
    const maxLength = input.getAttribute('maxlength');

    // Campo requerido vacio
    if (required && !value) {
      return { valid: false, message: errorMessages.required };
    }

    // Si esta vacio y no es requerido, es valido
    if (!value) {
      return { valid: true };
    }

    // Validar longitud minima
    if (minLength && value.length < parseInt(minLength)) {
      return {
        valid: false,
        message: errorMessages.minLength.replace('{min}', minLength)
      };
    }

    // Validar longitud maxima
    if (maxLength && value.length > parseInt(maxLength)) {
      return {
        valid: false,
        message: errorMessages.maxLength.replace('{max}', maxLength)
      };
    }

    // Validar texto seguro (sin HTML/scripts)
    if (!patterns.safeText.test(value)) {
      return { valid: false, message: errorMessages.unsafe };
    }

    // Validar email
    if (type === 'email' || name.includes('email') || name.includes('correo')) {
      if (!patterns.email.test(value)) {
        return { valid: false, message: errorMessages.email };
      }
    }

    // Validar telefono
    if (type === 'tel' || name.includes('telefono') || name.includes('phone') || name.includes('whatsapp')) {
      const cleanPhone = value.replace(/[\s.-]/g, '');
      if (cleanPhone.length < 10 || !patterns.phone.test(value)) {
        return { valid: false, message: errorMessages.phone };
      }
    }

    // Validar nombre
    if (name.includes('nombre') || name.includes('name')) {
      if (!patterns.name.test(value)) {
        return { valid: false, message: errorMessages.name };
      }
    }

    return { valid: true };
  }

  // Mostrar error
  function showError(input, message) {
    clearError(input);

    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');

    const errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    errorEl.setAttribute('role', 'alert');
    errorEl.textContent = message;

    input.parentNode.appendChild(errorEl);
  }

  // Limpiar error
  function clearError(input) {
    input.classList.remove('error');
    input.removeAttribute('aria-invalid');

    const errorEl = input.parentNode.querySelector('.form-error');
    if (errorEl) {
      errorEl.remove();
    }
  }

  // Mostrar error global del formulario
  function showFormError(form, message) {
    const existingError = form.querySelector('.form-global-error');
    if (existingError) existingError.remove();

    const errorEl = document.createElement('div');
    errorEl.className = 'form-global-error';
    errorEl.setAttribute('role', 'alert');
    errorEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
      <span>${message}</span>
    `;

    form.insertBefore(errorEl, form.firstChild);

    // Auto-remover despues de 5 segundos
    setTimeout(() => {
      errorEl.remove();
    }, 5000);
  }

  // Inicializar validacion en formulario
  function initForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');

    // Validacion en tiempo real (blur)
    inputs.forEach(input => {
      // Ignorar campos hidden
      if (input.type === 'hidden') return;

      input.addEventListener('blur', function() {
        const result = validateField(this);
        if (!result.valid) {
          showError(this, result.message);
        } else {
          clearError(this);
        }
      });

      // Limpiar error al escribir
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          clearError(this);
        }
      });
    });

    // Validacion al enviar
    form.addEventListener('submit', function(e) {
      let isValid = true;
      let firstError = null;

      // Verificar rate limiting
      if (!checkRateLimit()) {
        e.preventDefault();
        showFormError(form, errorMessages.rateLimit);
        return;
      }

      // Validar todos los campos
      inputs.forEach(input => {
        if (input.type === 'hidden') return;

        const result = validateField(input);
        if (!result.valid) {
          isValid = false;
          showError(input, result.message);
          if (!firstError) firstError = input;
        } else {
          clearError(input);
        }
      });

      if (!isValid) {
        e.preventDefault();
        if (firstError) {
          firstError.focus();
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Registrar envio para rate limiting
      recordSubmission();

      // Deshabilitar boton de envio para evitar doble click
      const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
    });
  }

  // Inicializar al cargar la pagina
  function init() {
    // Buscar todos los formularios
    const forms = document.querySelectorAll('form:not([data-no-validate])');
    forms.forEach(initForm);
  }

  // Esperar a que el DOM este listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
