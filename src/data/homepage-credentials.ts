/**
 * Homepage Credentials Data
 * Company credentials and certifications for ORIGINS Private Security
 */

export interface Credential {
  title: string;
  icon: 'shield' | 'users' | 'document' | 'clock';
  items: string[];
}

export const homepageCredentials: Credential[] = [
  {
    title: 'Registro y Permisos',
    icon: 'shield',
    items: [
      'Permiso SSC 0102-15 vigente',
      'Ley Federal de Seguridad Privada',
      'Registro ante Secretaría de Economía'
    ]
  },
  {
    title: 'Personal Certificado',
    icon: 'users',
    items: [
      'Verificación de antecedentes',
      'Exámenes psicométricos',
      'Capacitación continua'
    ]
  },
  {
    title: 'Cumplimiento Legal',
    icon: 'document',
    items: [
      'Alta IMSS-INFONAVIT',
      'Póliza de responsabilidad civil',
      'Facturación fiscal completa'
    ]
  },
  {
    title: 'Supervisión y Calidad',
    icon: 'clock',
    items: [
      'Supervisión semanal in situ',
      'Bitácora digital de incidencias',
      'Reportes mensuales a administración'
    ]
  }
];

// Company stats for about section
export const companyStats = [
  { number: '+15', label: 'Años de experiencia' },
  { number: '+50', label: 'Condominios protegidos' },
  { number: '24/7', label: 'Operación continua' }
];
