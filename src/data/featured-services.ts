/**
 * Featured Services Data
 * Homepage service cards for ORIGINS Private Security
 * 3 pillar categories — estructura tipo redeil.com
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
    description: 'Guardias que conocen a cada residente por nombre. Presencia 24/7 dentro de tu condominio, con trato residencial, primeros auxilios y respuesta inmediata. Certificados SSC con verificación de antecedentes.',
    features: ['Certificados SSC', 'Bitácora digital', 'Cotización personalizada'],
    ctaText: 'Guardias Intramuros',
    loading: 'eager'
  },
  {
    href: '/servicios/seguridad-condominios',
    image: '/img/img-index/seguridad-para-condominios.avif',
    imageAlt: 'Seguridad para condominios verticales y horizontales en CDMX',
    badge: 'Edificios',
    title: 'Seguridad Condominios',
    description: 'Protección integral para condominios verticales y horizontales: lobby 24 horas, gestión de paquetería, control de estacionamientos y monitoreo de áreas comunes. Más de 50 edificios en CDMX.',
    features: ['Recepción 24/7', 'CCTV integrado', '+50 edificios'],
    ctaText: 'Seguridad Condominios',
    loading: 'eager'
  },
  {
    href: '/servicios/seguridad-residenciales',
    image: '/img/img-index/patrullaje.avif',
    imageAlt: 'Seguridad para fraccionamientos y residenciales privados en CDMX',
    badge: 'Fraccionamientos',
    title: 'Seguridad Residenciales',
    description: 'Vigilancia especializada para fraccionamientos y residenciales cerrados: casetas profesionales 24 horas, patrullaje con GPS verificable y control de accesos vehicular. Reportes diarios para el comité.',
    features: ['Casetas 24 hrs', 'Patrullaje GPS', 'Reportes diarios'],
    ctaText: 'Seguridad Residenciales',
    loading: 'lazy'
  }
];
