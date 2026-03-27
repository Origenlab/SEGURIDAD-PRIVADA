/**
 * Featured Services Data
 * Homepage service cards for ORIGINS Private Security
 * Organized by priority: Most requested first, then complementary services
 */

export interface FeaturedService {
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  loading: 'eager' | 'lazy';
}

export const featuredServices: FeaturedService[] = [
  {
    href: '/servicios/guardias-intramuros',
    image: '/img/img-index/guardias-intramuros.avif',
    imageAlt: 'Guardias intramuros certificados SSC para condominios en CDMX',
    badge: 'Más Solicitado',
    title: 'Guardias Intramuros',
    description: 'Guardias de seguridad privada que conocen a cada residente por nombre. Presencia permanente 24/7 dentro de tu condominio con capacitación en trato residencial, primeros auxilios y respuesta inmediata ante emergencias. Personal certificado SSC con verificación de antecedentes.',
    features: ['Certificados SSC', 'Bitácora digital', 'Cotización personalizada'],
    ctaText: 'Guardias Intramuros',
    loading: 'eager'
  },
  {
    href: '/servicios/seguridad-condominios',
    image: '/img/img-index/seguridad-para-condominios.avif',
    imageAlt: 'Seguridad para condominios verticales y horizontales CDMX',
    badge: 'Edificios',
    title: 'Seguridad Condominios',
    description: 'Protección integral especializada para condominios verticales y horizontales: vigilancia de lobby 24 horas, gestión de paquetería, control de estacionamientos, monitoreo de áreas comunes y protocolos de emergencia. Más de 50 edificios en CDMX confían en nosotros.',
    features: ['Recepción 24/7', 'CCTV integrado', '+50 edificios'],
    ctaText: 'Seguridad Condominios',
    loading: 'eager'
  },
  {
    href: '/servicios/seguridad-residenciales',
    image: '/img/img-index/patrullaje.avif',
    imageAlt: 'Seguridad para fraccionamientos y residenciales privados',
    badge: 'Fraccionamientos',
    title: 'Seguridad Residenciales',
    description: 'Seguridad privada especializada para fraccionamientos y residenciales cerrados: casetas de vigilancia profesional 24 horas, patrullaje interno con GPS verificable, control de accesos vehicular y seguridad perimetral. Reportes diarios para el comité de vigilancia.',
    features: ['Casetas 24 hrs', 'Patrullaje GPS', 'Reportes diarios'],
    ctaText: 'Seguridad Residenciales',
    loading: 'lazy'
  }
];
