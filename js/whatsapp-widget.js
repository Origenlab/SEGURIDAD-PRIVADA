/**
 * WhatsApp Floating Widget
 * Botón flotante con mensajes personalizados por página
 * ORIGINS Private Security
 */

(function() {
  'use strict';

  // Configuración
  const config = {
    phoneNumber: '525530255580',
    defaultMessage: 'Hola, necesito información sobre sus servicios de seguridad privada',
    position: 'bottom-right', // bottom-right, bottom-left
    showDelay: 2000, // ms
    pulseAnimation: true
  };

  // Mensajes personalizados por página
  const pageMessages = {
    '/': 'Hola, vi su sitio web y me gustaría información sobre seguridad privada en CDMX',
    '/index.html': 'Hola, vi su sitio web y me gustaría información sobre seguridad privada en CDMX',
    '/guardias-de-seguridad-y-vigilancia.html': 'Hola, necesito cotización para guardias de seguridad certificados SSC',
    '/guardias-intramuros.html': 'Hola, requiero información sobre guardias intramuros para mi empresa',
    '/seguridad-condominios.html': 'Hola, necesito seguridad para mi condominio en CDMX',
    '/control-de-accesos.html': 'Hola, me interesa el servicio de control de accesos',
    '/patrullaje.html': 'Hola, necesito información sobre servicio de patrullaje',
    '/monitoreo-alarmas.html': 'Hola, requiero monitoreo de alarmas 24/7',
    '/vigilancia-remota-cctv.html': 'Hola, me interesa la vigilancia remota con CCTV',
    '/proteccion-ejecutiva.html': 'Hola, necesito información sobre protección ejecutiva',
    '/custodia-de-mercancias.html': 'Hola, requiero servicio de custodia de mercancías',
    '/seguridad-construccion.html': 'Hola, necesito seguridad para obra en construcción',
    '/seguridad-eventos.html': 'Hola, requiero seguridad para un evento',
    '/seguridad-hospitalaria.html': 'Hola, necesito seguridad hospitalaria',
    '/contacto.html': 'Hola, quisiera solicitar una cotización',
    '/nosotros.html': 'Hola, me gustaría conocer más sobre ORIGINS Private Security'
  };

  // Obtener mensaje según la página actual
  function getMessageForCurrentPage() {
    const currentPath = window.location.pathname;
    return pageMessages[currentPath] || config.defaultMessage;
  }

  // Crear el botón de WhatsApp
  function createWhatsAppButton() {
    const button = document.createElement('a');
    button.id = 'whatsapp-float-button';
    button.className = 'whatsapp-float';
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.setAttribute('aria-label', 'Contactar por WhatsApp');

    const message = encodeURIComponent(getMessageForCurrentPage());
    button.href = `https://wa.me/${config.phoneNumber}?text=${message}`;

    // SVG de WhatsApp
    button.innerHTML = `
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4575 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4575 4.15385 17C4.15385 19.5328 4.95122 21.8749 6.29184 23.7984L5.23077 27.7692L9.35955 26.7569C11.2149 27.9969 13.5035 28.8462 16 28.8462Z" fill="white"/>
        <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.9829C4.67032 21.0047 3.77273 18.5903 3.77273 16C3.77273 9.37258 9.14532 3.63636 15.7727 3.63636C22.4001 3.63636 28 9.37258 28 16Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28.8182C23.0503 28.8182 28.7727 23.0958 28.7727 16.0455C28.7727 8.99517 23.0503 3.27273 16 3.27273C8.94969 3.27273 3.22725 8.99517 3.22725 16.0455C3.22725 18.5491 3.98979 20.8831 5.30455 22.8247L4.18182 27.0909L8.61869 26.0027C10.5039 27.2054 12.7679 27.8909 15.1818 28.125V28.8182H16Z" fill="url(#paint0_linear)"/>
        <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear" x1="28.7727" y1="3.27273" x2="3.22725" y2="28.8182" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5BD066"/>
            <stop offset="1" stop-color="#27B43E"/>
          </linearGradient>
        </defs>
      </svg>
      <span class="whatsapp-tooltip">¿Necesitas ayuda? Escríbenos</span>
    `;

    return button;
  }

  // Estilos CSS para el botón
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .whatsapp-float {
        position: fixed;
        ${config.position === 'bottom-right' ? 'right: 24px;' : 'left: 24px;'}
        bottom: 24px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        z-index: 9999;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        transform: scale(0.8) translateY(10px);
        animation: slideUp 0.5s ease forwards;
      }

      @keyframes slideUp {
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      ${config.pulseAnimation ? `
        .whatsapp-float::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: inherit;
          animation: pulse 2s ease-out infinite;
          z-index: -1;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
        }
      ` : ''}

      .whatsapp-float:hover {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5), 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .whatsapp-float:active {
        transform: scale(0.95);
      }

      .whatsapp-float svg {
        width: 32px;
        height: 32px;
        position: relative;
        z-index: 1;
      }

      .whatsapp-tooltip {
        position: absolute;
        ${config.position === 'bottom-right' ? 'right: 70px;' : 'left: 70px;'}
        background: #fff;
        color: #333;
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      }

      .whatsapp-tooltip::after {
        content: '';
        position: absolute;
        top: 50%;
        ${config.position === 'bottom-right' ? 'right: -8px;' : 'left: -8px;'}
        transform: translateY(-50%);
        border: 8px solid transparent;
        ${config.position === 'bottom-right' ? 'border-left-color: #fff;' : 'border-right-color: #fff;'}
      }

      .whatsapp-float:hover .whatsapp-tooltip {
        opacity: 1;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .whatsapp-float {
          width: 56px;
          height: 56px;
          bottom: 20px;
          ${config.position === 'bottom-right' ? 'right: 20px;' : 'left: 20px;'}
        }

        .whatsapp-float svg {
          width: 28px;
          height: 28px;
        }

        .whatsapp-tooltip {
          display: none; /* Ocultar tooltip en móvil */
        }
      }

      @media (max-width: 480px) {
        .whatsapp-float {
          width: 52px;
          height: 52px;
          bottom: 16px;
          ${config.position === 'bottom-right' ? 'right: 16px;' : 'left: 16px;'}
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Inicializar el widget
  function init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Inyectar estilos
    injectStyles();

    // Crear y agregar el botón con retraso
    setTimeout(() => {
      const button = createWhatsAppButton();
      document.body.appendChild(button);

      // Tracking de clicks (si GTM está disponible)
      button.addEventListener('click', function() {
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({
            'event': 'whatsapp_click',
            'event_category': 'Engagement',
            'event_label': getMessageForCurrentPage(),
            'value': 1
          });
        }
      });
    }, config.showDelay);
  }

  // Iniciar
  init();
})();
