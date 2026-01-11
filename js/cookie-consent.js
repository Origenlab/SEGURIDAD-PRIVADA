/**
 * Cookie Consent Banner - LFPDPPP Compliance
 * ORIGINS PRIVATE SECURITY S.A. DE C.V.
 *
 * Este script gestiona el consentimiento de cookies conforme a la
 * Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares (LFPDPPP)
 */

(function() {
  'use strict';

  const COOKIE_NAME = 'cookie_consent_origins';
  const COOKIE_EXPIRY_DAYS = 365;

  // Configuracion de cookies
  const cookieConfig = {
    essential: {
      name: 'Esenciales',
      description: 'Necesarias para el funcionamiento del sitio. No se pueden desactivar.',
      required: true,
      enabled: true
    },
    analytics: {
      name: 'Analiticas',
      description: 'Nos ayudan a entender como usas el sitio para mejorarlo.',
      required: false,
      enabled: false
    },
    marketing: {
      name: 'Marketing',
      description: 'Permiten mostrarte contenido relevante.',
      required: false,
      enabled: false
    }
  };

  // Verificar si ya hay consentimiento guardado
  function getStoredConsent() {
    try {
      const consent = localStorage.getItem(COOKIE_NAME);
      return consent ? JSON.parse(consent) : null;
    } catch (e) {
      return null;
    }
  }

  // Guardar consentimiento
  function saveConsent(preferences) {
    const consentData = {
      timestamp: new Date().toISOString(),
      version: '1.0',
      preferences: preferences
    };

    try {
      localStorage.setItem(COOKIE_NAME, JSON.stringify(consentData));

      // Tambien guardar como cookie para acceso del servidor
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
      document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consentData))}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax; Secure`;
    } catch (e) {
      console.warn('No se pudo guardar el consentimiento de cookies');
    }
  }

  // Aplicar preferencias de cookies
  function applyPreferences(preferences) {
    // Analytics (Rybbit ya esta cargado, pero respetamos la preferencia para futuras cargas)
    if (preferences.analytics) {
      // Activar tracking
      window.cookieConsentAnalytics = true;
    } else {
      // Desactivar tracking si es posible
      window.cookieConsentAnalytics = false;
    }

    // Marketing
    if (preferences.marketing) {
      window.cookieConsentMarketing = true;
    } else {
      window.cookieConsentMarketing = false;
    }

    // Disparar evento personalizado para otros scripts
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: preferences
    }));
  }

  // Crear HTML del banner
  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.id = 'cookieBanner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookieTitle');
    banner.setAttribute('aria-describedby', 'cookieDesc');

    banner.innerHTML = `
      <div class="cookie-banner__container">
        <div class="cookie-banner__content">
          <h4 class="cookie-banner__title" id="cookieTitle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1.004 1.004 0 0 0-1.189-1.189A2.939 2.939 0 0 1 15 6c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1.004 1.004 0 0 0-1.189-1.189C5.689 2.046 2 6.497 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.144a1.004 1.004 0 0 0-.395-.792zM12 20c-4.411 0-8-3.589-8-8 0-3.727 2.555-6.969 6.158-7.851C10.054 4.686 10 5.342 10 6c0 2.757 2.243 5 5 5 .658 0 1.314-.054 1.851-.158C16.969 14.445 13.727 17 10 17c-3.314 0-6-2.686-6-6 0-.342.035-.677.086-1.006A6.003 6.003 0 0 1 10 4c3.314 0 6 2.686 6 6 0 .342-.035.677-.086 1.006a6.003 6.003 0 0 1-5.914 6.994z"/>
              <circle cx="8.5" cy="10.5" r="1.5"/>
              <circle cx="10.5" cy="16" r="1"/>
              <circle cx="15" cy="14" r="1.5"/>
            </svg>
            Tu Privacidad es Importante
          </h4>
          <p class="cookie-banner__text" id="cookieDesc">
            Utilizamos cookies para mejorar tu experiencia y analizar el trafico del sitio.
            <a href="aviso-de-privacidad.html">Ver Aviso de Privacidad</a>
          </p>
        </div>
        <div class="cookie-banner__actions">
          <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAcceptAll">
            Aceptar Todo
          </button>
          <button type="button" class="cookie-btn cookie-btn--reject" id="cookieRejectAll">
            Solo Esenciales
          </button>
        </div>
      </div>
    `;

    return banner;
  }

  // Mostrar banner
  function showBanner() {
    const banner = createBanner();
    document.body.appendChild(banner);

    // Pequeño delay para la animacion
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        banner.classList.add('active');
      });
    });

    // Event listeners
    document.getElementById('cookieAcceptAll').addEventListener('click', function() {
      const preferences = {
        essential: true,
        analytics: true,
        marketing: true
      };
      saveConsent(preferences);
      applyPreferences(preferences);
      hideBanner();
    });

    document.getElementById('cookieRejectAll').addEventListener('click', function() {
      const preferences = {
        essential: true,
        analytics: false,
        marketing: false
      };
      saveConsent(preferences);
      applyPreferences(preferences);
      hideBanner();
    });
  }

  // Ocultar banner
  function hideBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('active');
      setTimeout(() => {
        banner.remove();
      }, 400);
    }
  }

  // Inicializar
  function init() {
    // Verificar si ya hay consentimiento
    const storedConsent = getStoredConsent();

    if (storedConsent && storedConsent.preferences) {
      // Ya hay consentimiento, aplicar preferencias
      applyPreferences(storedConsent.preferences);
    } else {
      // No hay consentimiento, mostrar banner
      // Esperar a que el DOM este listo
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner);
      } else {
        // Pequeño delay para que la pagina cargue primero
        setTimeout(showBanner, 1000);
      }
    }
  }

  // Exponer funcion para reabrir el banner (para link en footer)
  window.openCookieSettings = function() {
    // Eliminar consentimiento actual
    localStorage.removeItem(COOKIE_NAME);
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    showBanner();
  };

  // Iniciar
  init();

})();
