/**
 * Homepage FAQs Data
 * Frequently asked questions for ORIGINS Private Security
 * Optimized for SEO with Schema.org compatible structure
 * NOTE: No prices or specific dates per project policy
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQ[] = [
  {
    question: '¿Cuánto cuesta la seguridad privada para un condominio en CDMX?',
    answer: 'El <strong>servicio de seguridad privada para condominios</strong> en CDMX se cotiza de manera personalizada según el número de elementos, tipo de condominio (vertical u horizontal), cantidad de accesos, turnos y servicios complementarios como CCTV o control de accesos biométrico. Cada propuesta se adapta a las necesidades específicas de tu condominio. WhatsApp <strong>55 3025 5580</strong> para cotización sin compromiso.'
  },
  {
    question: '¿Qué incluye el servicio de guardias intramuros para condominios?',
    answer: 'El <strong>servicio de guardias intramuros para condominios</strong> incluye: vigilancia permanente con guardias que conocen a cada residente, control de accesos vehicular y peatonal con registro digital, rondines programados en áreas comunes y perímetro con bitácora electrónica, gestión de visitantes y paquetería, monitoreo de cámaras CCTV, respuesta inmediata ante emergencias, reportes diarios a la administración, uniformes corporativos y <strong>supervisión operativa semanal</strong> garantizada.'
  },
  {
    question: '¿Cuál es la diferencia entre seguridad para condominios verticales y horizontales?',
    answer: 'En <strong>condominios verticales</strong> (edificios) nos enfocamos en recepción y lobby 24/7, control de elevadores, rondines por niveles, monitoreo de estacionamientos y gestión de paquetería. En <strong>condominios horizontales</strong> y fraccionamientos, el servicio incluye casetas de vigilancia, control vehicular en accesos, patrullaje de calles internas, seguridad perimetral y vigilancia de amenidades. ORIGINS adapta los protocolos al tipo de desarrollo para garantizar protección integral.'
  },
  {
    question: '¿Qué ventajas tiene un guardia intramuros frente a rondines de vigilancia?',
    answer: 'Los <strong>guardias intramuros</strong> permanecen dentro del condominio las 24 horas, conocen a los residentes, detectan anomalías rápidamente y ofrecen respuesta inmediata. Los rondines son visitas periódicas con intervalos sin presencia. Para condominios, la seguridad intramuros garantiza control de accesos continuo, supervisión constante de áreas comunes y una relación de confianza con la comunidad que los rondines no pueden ofrecer.'
  },
  {
    question: '¿Cómo elegir la mejor empresa de seguridad para mi condominio?',
    answer: 'Verifica que la empresa cuente con <strong>permiso SSC vigente</strong>, póliza de responsabilidad civil, personal en IMSS y capacitación certificada. Pregunta por su experiencia específica en condominios: los protocolos residenciales son distintos a los corporativos. Exámenes psicométricos, verificación de antecedentes y evaluación toxicológica son señales de una empresa seria. Solicita referencias de otros condominios que protejan actualmente.'
  },
  {
    question: '¿Qué requisitos legales debe cumplir la seguridad privada en condominios?',
    answer: 'La <strong>Ley Federal de Seguridad Privada</strong> exige registro SSC, permiso vigente, personal certificado con verificación de antecedentes, póliza de responsabilidad civil, alta ante IMSS-INFONAVIT y cumplimiento normativa STPS. Para condominios, además se requiere capacitación en trato con residentes, protocolos de emergencia habitacional y manejo de conflictos vecinales. ORIGINS cumple cada requisito y documenta todo para la administración.'
  },
  {
    question: '¿Cómo funciona la supervisión del servicio en un condominio?',
    answer: 'ORIGINS realiza <strong>supervisión operativa semanal</strong> en cada condominio. Un supervisor visita las instalaciones para verificar el desempeño de los guardias, revisar bitácoras digitales, validar cumplimiento de rondines, atender observaciones de la administración y coordinar mejoras. La administración y el comité de vigilancia reciben reportes periódicos de incidencias, estadísticas de accesos y recomendaciones.'
  },
  {
    question: '¿Qué zonas de CDMX cubren para seguridad de condominios?',
    answer: 'Protegemos condominios y residenciales en las 16 alcaldías de CDMX, con presencia especial en zonas de alta densidad condominial: Polanco, Santa Fe, Lomas de Chapultepec, Del Valle, Nápoles, Roma-Condesa y Perisur. También cubrimos Naucalpan, Tlalnepantla, Atizapán, Huixquilucan (Interlomas) y Cuautitlán Izcalli. Contacta al <strong>55 3025 5580</strong> para verificar cobertura en tu zona.'
  },
  {
    question: '¿Qué tecnología complementa la seguridad física en condominios?',
    answer: 'La <strong>seguridad integral para condominios</strong> combina guardias intramuros con: cámaras CCTV con monitoreo remoto en áreas comunes, sistemas de alarma conectados a nuestra central 24/7, control de accesos con registro digital o biométrico, bitácora electrónica de entradas y salidas, comunicación por radio con supervisores, y rastreo GPS de rondines. Todo opera coordinadamente para protección completa del condominio.'
  }
];

/**
 * Generate Schema.org FAQPage structured data
 */
export function generateFaqSchema(faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]*>/g, '') // Strip HTML for schema
      }
    }))
  };
}
