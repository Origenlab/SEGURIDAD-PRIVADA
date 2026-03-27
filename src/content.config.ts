// =============================================================================
// ORIGINS Private Security - Content Collections Configuration
// Astro 5.x Content Collections with Zod Schemas
// =============================================================================

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// =============================================================================
// Servicios Collection
// Pillar pages and service pages for SEO topical authority
// =============================================================================
const serviciosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: z.object({
    // Basic metadata
    title: z.string().max(60, 'Title should be under 60 characters for SEO'),
    description: z.string().max(160, 'Meta description should be under 160 characters'),

    // SEO fields
    keywords: z.array(z.string()).min(3).max(10),
    canonical: z.string().url().optional(),

    // Service categorization
    category: z.enum([
      'pillar',           // Pillar pages (main service categories)
      'service',          // Individual service pages
      'location'          // Location-specific pages
    ]),

    // For pillar pages
    pillarType: z.enum([
      'guardias-intramuros',
      'seguridad-residenciales',
      'seguridad-condominios'
    ]).optional(),

    // Service details
    serviceFeatures: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional()
    })).optional(),

    // Pricing info (optional)
    pricing: z.object({
      startingPrice: z.number().optional(),
      priceUnit: z.string().optional(),
      includesVat: z.boolean().default(true)
    }).optional(),

    // Related content for internal linking
    relatedServices: z.array(z.string()).optional(),
    relatedBlogPosts: z.array(z.string()).optional(),

    // Schema.org structured data
    schemaType: z.enum(['Service', 'LocalBusiness', 'Product']).default('Service'),

    // Publishing
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),

    // Images
    heroImage: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),

    // FAQ for schema markup
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),

    // CTA configuration
    ctaText: z.string().default('Solicitar Cotización'),
    ctaLink: z.string().default('/contacto'),

    // Location targeting
    targetLocations: z.array(z.string()).optional()
  })
});

// =============================================================================
// Blog Collection
// Blog articles organized by topic clusters for SEO authority
// =============================================================================
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Basic metadata
    title: z.string().max(70, 'Title should be under 70 characters for SEO'),
    description: z.string().max(160, 'Meta description should be under 160 characters'),

    // SEO fields
    keywords: z.array(z.string()).min(3).max(10),
    canonical: z.string().url().optional(),

    // Blog categorization - aligned with pillar pages
    cluster: z.enum([
      'guardias-intramuros',      // Cluster 1: Guardias intramuros
      'seguridad-residenciales',  // Cluster 2: Seguridad residenciales
      'seguridad-condominios',    // Cluster 3: Seguridad condominios
      'general'                   // General security topics
    ]),

    // Article type
    articleType: z.enum([
      'guide',          // How-to guides
      'comparison',     // Comparison articles
      'case-study',     // Case studies
      'tips',           // Tips and best practices
      'news',           // Industry news
      'checklist'       // Checklists
    ]),

    // Author information
    author: z.object({
      name: z.string(),
      role: z.string().optional(),
      avatar: z.string().optional()
    }).default({
      name: 'ORIGINS Security Team',
      role: 'Expertos en Seguridad Privada'
    }),

    // Publishing dates
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),

    // Featured article
    featured: z.boolean().default(false),

    // Images
    heroImage: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),

    // Reading time (auto-calculated or manual)
    readingTime: z.number().optional(),

    // Related content for internal linking
    relatedPillar: z.string().optional(), // Link to parent pillar page
    relatedPosts: z.array(z.string()).optional(),
    relatedServices: z.array(z.string()).optional(),

    // Tags for additional categorization
    tags: z.array(z.string()).optional(),

    // FAQ for schema markup
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),

    // Schema.org type
    schemaType: z.enum(['Article', 'BlogPosting', 'HowTo']).default('BlogPosting'),

    // Location targeting
    targetLocations: z.array(z.string()).optional()
  })
});

// =============================================================================
// Testimonios Collection
// Client testimonials for social proof
// =============================================================================
const testimoniosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/testimonios' }),
  schema: z.object({
    // Client information
    clientName: z.string(),
    clientRole: z.string().optional(),
    clientCompany: z.string().optional(),
    clientLocation: z.string().optional(),
    clientAvatar: z.string().optional(),

    // Testimonial content
    quote: z.string(),
    fullTestimonial: z.string().optional(),

    // Rating (1-5 stars)
    rating: z.number().min(1).max(5).default(5),

    // Service categorization
    serviceCategory: z.enum([
      'guardias-intramuros',
      'seguridad-residenciales',
      'seguridad-condominios',
      'general'
    ]),

    // Property type (for targeting)
    propertyType: z.enum([
      'condominio-vertical',
      'condominio-horizontal',
      'residencial-privado',
      'fraccionamiento',
      'corporativo',
      'industrial',
      'comercial'
    ]).optional(),

    // Publishing
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    approved: z.boolean().default(true),

    // Video testimonial
    videoUrl: z.string().url().optional(),

    // Metrics (if available)
    metrics: z.object({
      label: z.string(),
      value: z.string(),
      improvement: z.string().optional()
    }).optional()
  })
});

// =============================================================================
// Zonas Collection
// Location/zone pages for local SEO
// =============================================================================
const zonasCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/zonas' }),
  schema: z.object({
    // Zone identification
    zoneName: z.string(),
    zoneSlug: z.string(),

    // SEO metadata
    title: z.string().max(60),
    description: z.string().max(160),
    keywords: z.array(z.string()).min(3).max(10),

    // Geographic data
    municipality: z.string(),
    state: z.string().default('Ciudad de México'),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional(),

    // Zone characteristics
    zoneType: z.enum([
      'residential',
      'commercial',
      'mixed',
      'industrial'
    ]),

    // Security profile
    securityLevel: z.enum(['high', 'medium', 'low']).optional(),
    commonIssues: z.array(z.string()).optional(),

    // Services available in zone
    availableServices: z.array(z.string()),

    // Content
    heroImage: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),

    // Publishing
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),

    // Related zones
    nearbyZones: z.array(z.string()).optional()
  })
});

// =============================================================================
// Export Collections
// =============================================================================
export const collections = {
  servicios: serviciosCollection,
  blog: blogCollection,
  testimonios: testimoniosCollection,
  zonas: zonasCollection
};
