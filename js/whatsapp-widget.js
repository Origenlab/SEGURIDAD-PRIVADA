/**
 * WhatsApp Floating Widget - Professional Edition
 * ORIGINS Private Security
 * Boton flotante con notificacion y mensajes personalizados
 */

(function() {
  'use strict';

  // Configuracion
  const config = {
    phoneNumber: '525530255580',
    defaultMessage: 'Hola, necesito informacion sobre sus servicios de seguridad privada',
    position: 'bottom-right',
    showDelay: 1500,
    pulseAnimation: true,
    showNotificationBadge: true,
    tooltipText: 'Cotiza ahora por WhatsApp'
  };

  // Mensajes personalizados por pagina
  const pageMessages = {
    '/': 'Hola, vi su sitio web y me gustaria informacion sobre seguridad privada en CDMX',
    '/index.html': 'Hola, vi su sitio web y me gustaria informacion sobre seguridad privada en CDMX',
    '/guardias-de-seguridad-y-vigilancia.html': 'Hola, necesito cotizacion para guardias de seguridad certificados SSC',
    '/guardias-intramuros.html': 'Hola, requiero informacion sobre guardias intramuros para mi empresa',
    '/seguridad-condominios.html': 'Hola, necesito seguridad para mi condominio en CDMX',
    '/control-de-accesos.html': 'Hola, me interesa el servicio de control de accesos',
    '/patrullaje.html': 'Hola, necesito informacion sobre servicio de patrullaje',
    '/monitoreo-alarmas.html': 'Hola, requiero monitoreo de alarmas 24/7',
    '/vigilancia-remota-cctv.html': 'Hola, me interesa la vigilancia remota con CCTV',
    '/proteccion-ejecutiva.html': 'Hola, necesito informacion sobre proteccion ejecutiva',
    '/custodia-de-mercancias.html': 'Hola, requiero servicio de custodia de mercancias',
    '/seguridad-construccion.html': 'Hola, necesito seguridad para obra en construccion',
    '/seguridad-eventos.html': 'Hola, requiero seguridad para un evento',
    '/seguridad-hospitalaria.html': 'Hola, necesito seguridad hospitalaria',
    '/seguridad-especializada.html': 'Hola, necesito informacion sobre seguridad especializada',
    '/tecnologia-monitoreo-seguridad.html': 'Hola, me interesa la tecnologia de monitoreo de seguridad',
    '/seguridad-gps-satelital.html': 'Hola, necesito informacion sobre seguridad GPS satelital',
    '/consultoria-seguridad.html': 'Hola, requiero consultoria de seguridad',
    '/consultoria-analisis-riesgos.html': 'Hola, necesito un analisis de riesgos',
    '/investigaciones-confiabilidad.html': 'Hola, me interesan las investigaciones de confiabilidad',
    '/prevencion-de-perdidas.html': 'Hola, necesito servicio de prevencion de perdidas',
    '/servicios-de-proteccion-ejecutiva-y-consultoria.html': 'Hola, necesito proteccion ejecutiva y consultoria',
    '/servicios.html': 'Hola, quisiera conocer todos sus servicios de seguridad',
    '/contacto.html': 'Hola, quisiera solicitar una cotizacion',
    '/nosotros.html': 'Hola, me gustaria conocer mas sobre ORIGINS Private Security',
    '/bolsa-de-trabajo.html': 'Hola, me interesa trabajar en ORIGINS Private Security'
  };

  // Obtener mensaje segun la pagina actual
  function getMessageForCurrentPage() {
    const currentPath = window.location.pathname;
    return pageMessages[currentPath] || config.defaultMessage;
  }

  // Crear el boton de WhatsApp
  function createWhatsAppButton() {
    const container = document.createElement('div');
    container.id = 'whatsapp-widget';
    container.className = 'wa-widget';

    const message = encodeURIComponent(getMessageForCurrentPage());

    container.innerHTML = `
      <a href="https://wa.me/${config.phoneNumber}?text=${message}"
         class="wa-button"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Contactar por WhatsApp">
        <div class="wa-button-icon">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.28 2 2 8.28 2 16C2 18.82 2.8 21.44 4.18 23.68L2 30L8.56 27.9C10.72 29.14 13.26 29.84 16 29.84C23.72 29.84 30 23.56 30 15.84C30 8.12 23.72 2 16 2Z" fill="white"/>
            <path d="M16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28C13.52 28 11.22 27.26 9.3 25.98L5.36 27.14L6.58 23.36C5.14 21.36 4.28 18.9 4.28 16.22C4 9.38 9.38 4 16 4Z" fill="#25D366"/>
            <path d="M23.3 19.62C23.02 20.54 21.72 21.32 20.68 21.54C19.94 21.68 18.98 21.8 16.04 20.62C12.32 19.16 9.94 15.4 9.76 15.16C9.58 14.92 8.24 13.18 8.24 11.38C8.24 9.58 9.2 8.72 9.56 8.34C9.84 8.04 10.32 7.9 10.78 7.9C10.94 7.9 11.08 7.9 11.2 7.92C11.56 7.94 11.74 7.96 11.98 8.54C12.26 9.22 12.94 11.02 13.04 11.22C13.14 11.42 13.2 11.66 13.06 11.9C12.94 12.16 12.86 12.3 12.66 12.54C12.46 12.78 12.28 12.96 12.08 13.2C11.9 13.42 11.7 13.66 11.94 14.02C12.18 14.38 12.94 15.62 14.06 16.62C15.5 17.9 16.68 18.3 17.08 18.46C17.36 18.58 17.7 18.54 17.94 18.28C18.24 17.94 18.62 17.38 19 16.84C19.28 16.44 19.62 16.38 19.94 16.5C20.26 16.6 22.04 17.48 22.4 17.66C22.76 17.84 23 17.92 23.1 18.08C23.2 18.24 23.2 19.04 22.92 19.96C23.02 19.62 23.02 19.62 23.3 19.62Z" fill="white"/>
          </svg>
        </div>
        ${config.showNotificationBadge ? '<span class="wa-badge">1</span>' : ''}
        <span class="wa-tooltip">${config.tooltipText}</span>
      </a>
      <div class="wa-pulse"></div>
    `;

    return container;
  }

  // Estilos CSS
  function injectStyles() {
    const style = document.createElement('style');
    style.id = 'whatsapp-widget-styles';
    style.textContent = `
      .wa-widget {
        position: fixed;
        ${config.position === 'bottom-right' ? 'right: 24px;' : 'left: 24px;'}
        bottom: 24px;
        z-index: 9998;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      }

      .wa-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        border-radius: 50%;
        box-shadow:
          0 4px 16px rgba(37, 211, 102, 0.4),
          0 2px 8px rgba(0, 0, 0, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        animation: wa-fadeIn 0.6s ease forwards;
        opacity: 0;
        transform: scale(0.8);
      }

      @keyframes wa-fadeIn {
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .wa-button:hover {
        transform: scale(1.08) translateY(-2px);
        box-shadow:
          0 8px 24px rgba(37, 211, 102, 0.5),
          0 4px 12px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.3);
        text-decoration: none;
      }

      .wa-button:active {
        transform: scale(0.98);
      }

      .wa-button-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
      }

      .wa-button-icon svg {
        width: 100%;
        height: 100%;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
      }

      /* Badge de notificacion */
      .wa-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        min-width: 22px;
        height: 22px;
        background: linear-gradient(135deg, #ff5252 0%, #d32f2f 100%);
        color: white;
        font-size: 12px;
        font-weight: 700;
        border-radius: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(211, 47, 47, 0.4);
        border: 2px solid white;
        animation: wa-badgePulse 2s ease-in-out infinite;
        padding: 0 6px;
      }

      @keyframes wa-badgePulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }

      /* Tooltip */
      .wa-tooltip {
        position: absolute;
        ${config.position === 'bottom-right' ? 'right: 76px;' : 'left: 76px;'}
        top: 50%;
        transform: translateY(-50%);
        background: white;
        color: #1d1d1f;
        padding: 12px 18px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        pointer-events: none;
      }

      .wa-tooltip::after {
        content: '';
        position: absolute;
        top: 50%;
        ${config.position === 'bottom-right' ? 'right: -8px;' : 'left: -8px;'}
        transform: translateY(-50%);
        border: 8px solid transparent;
        ${config.position === 'bottom-right' ? 'border-left-color: white;' : 'border-right-color: white;'}
      }

      .wa-button:hover + .wa-pulse + .wa-tooltip,
      .wa-button:hover .wa-tooltip {
        opacity: 1;
        visibility: visible;
      }

      /* Pulse animation */
      .wa-pulse {
        position: absolute;
        top: 0;
        left: 0;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: rgba(37, 211, 102, 0.3);
        animation: wa-pulseRing 2.5s ease-out infinite;
        pointer-events: none;
        z-index: -1;
      }

      @keyframes wa-pulseRing {
        0% {
          transform: scale(1);
          opacity: 0.6;
        }
        100% {
          transform: scale(1.6);
          opacity: 0;
        }
      }

      /* Responsive */
      @media (max-width: 768px) {
        .wa-widget {
          ${config.position === 'bottom-right' ? 'right: 16px;' : 'left: 16px;'}
          bottom: 16px;
        }

        .wa-button {
          width: 58px;
          height: 58px;
        }

        .wa-button-icon {
          width: 32px;
          height: 32px;
        }

        .wa-pulse {
          width: 58px;
          height: 58px;
        }

        .wa-badge {
          min-width: 20px;
          height: 20px;
          font-size: 11px;
          top: -2px;
          right: -2px;
        }

        .wa-tooltip {
          display: none;
        }
      }

      @media (max-width: 480px) {
        .wa-widget {
          bottom: 12px;
          ${config.position === 'bottom-right' ? 'right: 12px;' : 'left: 12px;'}
        }

        .wa-button {
          width: 54px;
          height: 54px;
        }

        .wa-button-icon {
          width: 30px;
          height: 30px;
        }

        .wa-pulse {
          width: 54px;
          height: 54px;
        }
      }

      /* Print - ocultar en impresion */
      @media print {
        .wa-widget {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Inicializar
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Verificar si ya existe
    if (document.getElementById('whatsapp-widget')) {
      return;
    }

    injectStyles();

    setTimeout(() => {
      const widget = createWhatsAppButton();
      document.body.appendChild(widget);

      // Tracking de clicks
      const button = widget.querySelector('.wa-button');
      if (button) {
        button.addEventListener('click', function() {
          // Google Analytics / GTM
          if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
              'event_category': 'Engagement',
              'event_label': window.location.pathname
            });
          }
          if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
              'event': 'whatsapp_click',
              'event_category': 'Engagement',
              'event_label': window.location.pathname
            });
          }
        });
      }
    }, config.showDelay);
  }

  init();
})();
