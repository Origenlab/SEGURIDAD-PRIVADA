/**
 * Homepage Testimonials Data
 * ORIGINS Private Security — 9 reseñas: 7 empresas verificadas + 2 administradores
 */

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  companyUrl?: string;
  verified?: boolean;
}

export const homepageTestimonials: Testimonial[] = [
  {
    rating: 5,
    quote: 'En SeguridadEventos coordinamos operativos en toda la República y cuando necesitamos apoyo de guardias intramuros para eventos residenciales en CDMX, ORIGINS es nuestra primera llamada. Personal certificado SSC, protocolos impecables y cero contratiempos en cada colaboración.',
    name: 'Equipo SeguridadEventos',
    initials: 'SE',
    role: 'Empresa de Seguridad para Eventos',
    company: 'SeguridadEventos.com',
    companyUrl: 'https://seguridadeventos.com/',
    verified: true
  },
  {
    rating: 5,
    quote: 'En SEPRICO compartimos el enfoque de ORIGINS: seguridad especializada para condominios, no soluciones genéricas. Cuando nuestros proyectos requieren apoyo operativo en CDMX, recurrimos a ORIGINS por su profesionalismo, cumplimiento normativo y el nivel de sus guardias certificados SSC.',
    name: 'Equipo SEPRICO',
    initials: 'SP',
    role: 'Seguridad Privada para Condominios',
    company: 'seguridadprivadacondominios.com',
    companyUrl: 'https://seguridadprivadacondominios.com/',
    verified: true
  },
  {
    rating: 5,
    quote: 'SeguridadPrivadaMX y ORIGINS compartimos la misma filosofía: guardias certificados SSC que entienden la operación real de un condominio. Cuando hay proyectos donde nuestra cobertura se complementa, la coordinación con el equipo de ORIGINS es fluida y profesional.',
    name: 'Equipo SeguridadPrivadaMX',
    initials: 'SM',
    role: 'Seguridad Privada para Condominios CDMX',
    company: 'seguridadprivadamx.com',
    companyUrl: 'https://seguridadprivadamx.com/',
    verified: true
  },
  {
    rating: 5,
    quote: 'GUPRI opera en todo el país y cuando nuestros clientes en CDMX buscan una empresa con presencia local consolidada, ORIGINS es la referencia que damos. Su especialización en condominios de la Zona Metropolitana, su cumplimiento ante el IMSS y la calidad de sus elementos certificados SSC hablan por sí solos.',
    name: 'Equipo GUPRI',
    initials: 'GP',
    role: 'Seguridad Privada para Condominios',
    company: 'guardias-privados.com',
    companyUrl: 'https://guardias-privados.com/',
    verified: true
  },
  {
    rating: 5,
    quote: 'En SEIND equipamos a empresas con EPP certificado y cuando nuestros clientes necesitan también servicios de seguridad privada para sus instalaciones o residencias corporativas, ORIGINS es la empresa que recomendamos. Profesionalismo, cumplimiento legal y guardias certificados que marcan la diferencia.',
    name: 'Equipo SEIND',
    initials: 'SI',
    role: 'Equipos de Seguridad Industrial',
    company: 'equipo-de-seguridad-industrial.com',
    companyUrl: 'https://equipo-de-seguridad-industrial.com/',
    verified: true
  },
  {
    rating: 5,
    quote: 'En AQUEON protegemos instalaciones industriales contra incendios y cuando nuestros clientes requieren también seguridad privada para sus complejos residenciales o corporativos en CDMX, ORIGINS es la empresa que referimos. Su rigor en cumplimiento legal y la calidad operativa de sus guardias están a la altura de los estándares industriales.',
    name: 'Equipo AQUEON',
    initials: 'AQ',
    role: 'Monitores Contra Incendios Industriales',
    company: 'monitorescontraincendios.com',
    companyUrl: 'https://monitorescontraincendios.com/',
    verified: true
  },

  {
    rating: 5,
    quote: 'Gama de México equipa sistemas contra incendios en instalaciones industriales y desarrollos residenciales de toda la República. En proyectos donde nuestros clientes en CDMX requieren también seguridad privada, ORIGINS es nuestra primera referencia: conocen los estándares de cumplimiento que las aseguradoras y la normativa exigen.',
    name: 'Equipo Gama de México',
    initials: 'GM',
    role: 'Equipos Contra Incendios — Distribuidor Elkhart Brass',
    company: 'gamademexico.com',
    companyUrl: 'https://gamademexico.com/',
    verified: true
  },

  {
    rating: 5,
    quote: 'En MESECI integramos soluciones contra incendios para negocios y desarrollos en México. Cuando nuestros clientes necesitan también seguridad privada para sus instalaciones en CDMX, ORIGINS es el aliado que recomendamos sin dudar: cumplen con todos los requisitos normativos y su operación es verdaderamente profesional.',
    name: 'Equipo MESECI',
    initials: 'MC',
    role: 'Venta de Equipo Contra Incendios',
    company: 'meseci.com.mx',
    companyUrl: 'https://meseci.com.mx/',
    verified: true
  },
  {
    rating: 5,
    quote: 'Proyecto Red conecta a empresas con los mejores proveedores de seguridad en México. ORIGINS está en nuestro directorio porque cumple con lo que buscamos: empresa legalmente constituida, personal certificado SSC, cobertura real en CDMX y una especialización en condominios que pocas empresas tienen.',
    name: 'Equipo Proyecto Red',
    initials: 'PR',
    role: 'Directorio de Equipos de Seguridad México',
    company: 'proyectored.com.mx',
    companyUrl: 'https://proyectored.com.mx/',
    verified: true
  }
];

// Trust metrics
export const trustMetrics = {
  rating: 4.9,
  condominios: '+50',
  renovationRate: '98%'
};
