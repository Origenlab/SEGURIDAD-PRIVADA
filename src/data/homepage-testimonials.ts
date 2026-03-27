/**
 * Homepage Testimonials Data
 * Customer testimonials for ORIGINS Private Security
 * All testimonials are from condominium administrators and committee members
 */

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  initials: string;
  role: string;
  company: string;
}

export const homepageTestimonials: Testimonial[] = [
  {
    rating: 5,
    quote: 'Llevamos 3 años con ORIGINS y la diferencia es notable. Los guardias conocen a todos los residentes, la bitácora digital nos permite dar seguimiento a cualquier incidencia y la supervisión semanal garantiza que el servicio se mantenga impecable.',
    name: 'Lic. Laura Martínez',
    initials: 'LM',
    role: 'Administradora',
    company: 'Residencial Bosques de las Lomas'
  },
  {
    rating: 5,
    quote: 'Como presidente del comité de vigilancia, valoro mucho la comunicación directa con ORIGINS. Ante cualquier situación, el supervisor responde de inmediato. Los reportes mensuales nos dan tranquilidad de que todo está bajo control.',
    name: 'Ing. Roberto García',
    initials: 'RG',
    role: 'Presidente Comité de Vigilancia',
    company: 'Torre Polanco 200'
  },
  {
    rating: 5,
    quote: 'Cambiamos de proveedor hace 2 años y fue la mejor decisión. El personal es estable, profesional y discreto. La recepción de paquetería funciona perfectamente y los residentes están muy satisfechos con el trato.',
    name: 'C.P. María Hernández',
    initials: 'MH',
    role: 'Administradora General',
    company: 'Condominios Santa Fe'
  },
  {
    rating: 5,
    quote: 'La implementación del control de accesos digital transformó la seguridad de nuestro fraccionamiento. Ahora tenemos registro de cada entrada y salida, y los guardias verifican a cada visitante con fotografía. Totalmente recomendable.',
    name: 'Arq. Jorge Villanueva',
    initials: 'JV',
    role: 'Administrador',
    company: 'Residencial Interlomas'
  },
  {
    rating: 5,
    quote: 'Lo que más valoro es la estabilidad del personal. En otros servicios los guardias cambiaban cada mes, aquí los mismos elementos llevan años con nosotros. Conocen a las familias y eso genera confianza real.',
    name: 'Lic. Alejandra Sánchez',
    initials: 'AS',
    role: 'Presidenta de Condóminos',
    company: 'Torres del Valle'
  },
  {
    rating: 5,
    quote: 'La supervisión semanal que prometen es real. Cada semana veo al supervisor revisando los puntos de control, hablando con los guardias y atendiendo cualquier observación que tengamos. Eso marca la diferencia.',
    name: 'Dr. Fernando Morales',
    initials: 'FM',
    role: 'Vocal del Comité',
    company: 'Residencial Pedregal'
  },
  {
    rating: 5,
    quote: 'Administro 3 torres y ORIGINS maneja la seguridad de todas. La coordinación entre los equipos es impecable, los protocolos son consistentes y la documentación siempre está en orden para las asambleas.',
    name: 'C.P. Carlos Rodríguez',
    initials: 'CR',
    role: 'Administrador',
    company: 'Parque Reforma 500'
  },
  {
    rating: 5,
    quote: 'El monitoreo CCTV complementa perfectamente a los guardias. Cuando hubo un intento de robo en el estacionamiento, la central detectó la anomalía y coordinó la respuesta en segundos. Prevención real.',
    name: 'Ing. Patricia López',
    initials: 'PL',
    role: 'Gerente de Administración',
    company: 'Lomas Country Club'
  },
  {
    rating: 5,
    quote: 'Después de una mala experiencia con otra empresa, encontrar a ORIGINS fue un alivio. Personal profesional, bien uniformado, con capacitación real. Los residentes notan la diferencia desde el primer día.',
    name: 'Lic. Diana Torres',
    initials: 'DT',
    role: 'Tesorera',
    company: 'Residencial Coyoacán'
  }
];

// Trust metrics displayed below testimonials
export const trustMetrics = {
  rating: 4.9,
  condominios: '+50',
  renovationRate: '98%'
};
