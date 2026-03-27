# ESTUDIO MAESTRO DE HOMOLOGACIÓN
## SEGURIDAD-PRIVADA.COM.MX — ORIGINS Private Security
**Fecha:** Marzo 2026 | **Elaborado por:** Jacinto — Arquitecto Senior OrigenLab  
**Stack:** Astro 5.x SSG + Markdown + Static output

---

## PARTE 1 — SISTEMA APROBADO (BASE DE REFERENCIA)

### 1.1 Componentes del Sistema (aprobados y en producción)

| Componente | Ruta | Estado | Uso correcto |
|---|---|---|---|
| `TopBar.astro` | `src/components/` | ✅ Producción | Solo en Header |
| `Header.astro` | `src/components/` | ✅ Producción | Vía Base.astro |
| `Footer.astro` | `src/components/` | ✅ Producción | Vía Base.astro |
| `SectionHeader.astro` | `src/components/` | ✅ Producción | Todas las secciones |
| `CategoriaCard.astro` | `src/components/` | ✅ Producción | Grids de categorías |
| `ServiceCard.astro` | `src/components/` | ✅ Producción | Cards individuales |
| `TestimonialCard.astro` | `src/components/` | ✅ Producción | Sección testimonios |
| `CredentialsCard.astro` | `src/components/` | ✅ Producción | Sección About oscura |
| `FAQItem.astro` | `src/components/` | ✅ Producción | Módulo FAQ |
| `WhatsAppWidget.astro` | `src/components/` | ✅ Producción | Global (Base.astro) |

### 1.2 Reglas del Sistema (no negociables)

1. **Sin transiciones ni transforms** en cards, imágenes ni secciones. Solo botones y menú.
2. **Iconos SVG monocromáticos** — nunca emojis en componentes
3. **SectionHeader.astro** en TODAS las secciones (badge + H2 + subtítulo + párrafos SEO opcionales)
4. **CSS mobile-first** — padding siempre con ambos ejes en cada breakpoint
5. **Colores globales:** `#0a0f1e` primary, `#25D366` accent/WhatsApp, `#f8f9fa` fondo claro
6. **h4 sobre fondo oscuro** → usar `color: #ffffff !important` (bug global.css)
7. **Scoped CSS en componentes**, CSS de secciones en `src/styles/sections/`

### 1.3 Layout de Página Estándar (orden canónico aprobado)

```
Base.astro (TopBar + Header + Footer + WhatsAppWidget)
  └── [página]
      1. Hero de página (dark gradient)
      2. NavCTA (4 cards) — solo en homepage
      3. SectionHeader
      4. Contenido principal
      5. SectionHeader siguiente sección
      6. ...
      7. NavCTA footer (solo homepage)
      8. Footer
```

### 1.4 Patrón Hero Estándar de Página Interior

```
Hero oscuro (gradient #0d1520 → #0a0f1e)
  ├── Breadcrumb (nav aria)
  ├── Badge (SSC / categoría)
  ├── H1 keyword-optimizado
  ├── Párrafo descripción
  └── 2 CTAs: [Cotizar] + [WhatsApp verde]
```

---

## PARTE 2 — DIAGNÓSTICO POR PÁGINA

### PÁGINA 1: `/` — Homepage (index.astro)
**Estado:** ✅ HOMOLOGADA — es la página modelo del sistema

**Secciones actuales:**
1. Hero 2 columnas (H1 + trust signals + CTAs / 2 párrafos SEO)
2. NavCTA post-hero (4 cards)
3. Servicios/Categorías (SectionHeader + 3 CategoriaCards)
4. About/Empresa (SectionHeader oscura + stats + credenciales)
5. Testimonios (SectionHeader + 9 TestimonialCards + trust bar)
6. FAQ + Cotización (módulo 2 columnas)
7. NavCTA footer
8. Footer

**Problemas detectados:**
- El `SectionHeader` en About section usa fondo oscuro pero `tema="light"` — cambiar a `tema="dark"`
- El `cta-banner` (sección naranja entre About y Testimonios) ya fue eliminado ✅
- El `final-cta` ya fue eliminado ✅

**Acción requerida:** Cambiar `tema="light"` por `tema="dark"` en el SectionHeader de About, o eliminar el SectionHeader de esa sección ya que ya tiene su propio header interno. → **PRIORIDAD BAJA**

---

### PÁGINA 2: `/servicios` — Catálogo de Servicios (servicios/index.astro)
**Estado:** 🔴 FUERA DE SISTEMA — No usa componentes aprobados

**Estructura actual:**
- Hero propio (`services-hero`) con H1 sin badge ni trust signals
- Grid de pillar services con `pillar-card` (componente propio no aprobado)
- Grid de otros servicios con cards no homologadas
- CTA propio

**Problemas críticos:**
1. Hero sin `SectionHeader`, sin badge, sin breadcrumb
2. Usa clase `.section-subtitle` de global (texto centrado simple)
3. `pillar-card` — componente no existe en el sistema, CSS inline en la página
4. No usa `CategoriaCard.astro` para las 3 categorías pillar
5. No usa `ServiceCard.astro` para servicios individuales
6. CSS inline (246 líneas) — debería estar en `src/styles/sections/`
7. Sin `SectionHeader` en ninguna sección interna

**Estructura ideal:**
```
Hero oscuro → breadcrumb + H1 + descripción + CTAs
SectionHeader (Servicios Residenciales) + 3 pillar cards → CategoriaCard
SectionHeader (Todos los servicios) + grid de ServiceCards
SectionHeader (FAQ rápido) + 3-4 FAQItems
NavCTA (4 cards)
```

**Acción:** Reescribir completo con el sistema aprobado. **PRIORIDAD ALTA**

---

### PÁGINA 3: `/servicios/[slug]` — Página de Servicio Individual
**Estado:** 🟡 PARCIALMENTE HOMOLOGADA

**Lo que está bien:**
- Usa `Base.astro` ✅
- Breadcrumb con schema ✅
- Schema Service + BreadcrumbList ✅
- Sección "Servicios Complementarios" (CategoriaCard light) ✅
- FAQs con schema ✅

**Problemas:**
1. Hero de servicio (`service-hero`) tiene badge genérico "Servicio Principal" — debería usar el badge dinámico de la categoría
2. El grid de features (`.features-grid`) no usa ningún componente del sistema
3. Sidebar con "¿Listo para Proteger?" — botón sin estilos del sistema (`.btn-block`)
4. El CTA final (`service-cta`) tiene su propio CSS inline, no usa los componentes del Footer ni SectionHeader
5. No tiene `SectionHeader` en la sección de features

**Acción:** Refinar hero, alinear sidebar card con el sistema. **PRIORIDAD MEDIA**

---

### PÁGINA 4: `/zonas` — Índice de Zonas (zonas/index.astro)
**Estado:** 🟡 FUNCIONAL PERO NO HOMOLOGADA

**Problemas:**
1. Hero propio (`zonas-hero`) con gradient igual al del sistema ✅ pero sin badge del sistema ni trust signals
2. H2s de sección (`"CDMX — Alcaldías"`) sin `SectionHeader`
3. `.zona-card` tiene CSS inline — no usa `CategoriaCard` ni el sistema de cards
4. CTA final no usa patrón del sistema
5. Sin breadcrumb (es el índice, no lo requiere)

**Acción:** Agregar `SectionHeader` en secciones CDMX y EdoMex. Homologar hero. **PRIORIDAD MEDIA**

---

### PÁGINA 5: `/zonas/[slug]` — Página de Zona
**Estado:** 🟡 FUNCIONAL PERO NO HOMOLOGADA

**Problemas:**
1. Hero propio con gradient similar al sistema ✅ pero sin trust signals ni badge estándar
2. Sección "Servicios disponibles" con cards `.zona-servicio-card` — CSS inline, no usa componentes del sistema
3. Sidebar correcto en estructura pero sin estilos del sistema
4. CTA final no usa `SectionHeader`
5. Breadcrumb presente ✅

**Acción:** Usar `SectionHeader` en sección de servicios. Homologar sidebar con estilo de `service-content__sidebar`. **PRIORIDAD MEDIA**

---

### PÁGINA 6: `/nosotros` — Nosotros (nosotros.astro)
**Estado:** 🔴 FUERA DE SISTEMA — La página más desalineada

**Problemas críticos:**
1. Usa `useLegacyCSS={true}` — activa CSS heredado no del sistema
2. Hero propio (`hero-two-col`) sin breadcrumb, sin trust signals del sistema
3. **487 líneas de CSS inline** — toda la página tiene estilos propios desconectados
4. Usa `.section-title` y `.section-subtitle` del sistema global pero con estilos encima
5. No usa `SectionHeader`, `CategoriaCard`, ni ningún componente aprobado
6. Secciones con nombres propios: `stats-section`, `mission-vision-values`, `corporate-values`, `our-history`, `why-choose-us-about`, `certifications` — ninguna en el sistema
7. Sin breadcrumb
8. Schema corregido ✅ (arreglado anteriormente)

**Estructura ideal:**
```
Hero oscuro → badge + H1 + subtítulo + CTAs
SectionHeader "Quiénes Somos" + 2 col (texto izq + stats der)
SectionHeader "Nuestras Credenciales" + 4 CredentialsCards
SectionHeader "Historia" + timeline minimalista
SectionHeader "¿Por Qué ORIGINS?" + 6 diferenciadores en grid
SectionHeader "Nuestro Equipo" + descripción + stats
CTA final con WhatsApp
```

**Acción:** Reescribir completo con sistema aprobado. **PRIORIDAD ALTA**

---

### PÁGINA 7: `/blog` — Blog (blog/index.astro)
**Estado:** 🟡 FUNCIONAL PERO NO HOMOLOGADA

**Problemas:**
1. Hero propio (`blog-hero`) — simple H1 sin badge, sin trust signals, sin CTAs
2. Grid de featured posts (`featured-card`) — componente propio no en el sistema
3. Grid de posts regulares (`blog-card`) — componente propio
4. CSS inline (325 líneas con `<style>`)
5. No usa `SectionHeader`
6. Sin breadcrumb en post individual (no hay template de post — solo 3 artículos sin plantilla)

**Hallazgo crítico:** No existe `src/pages/blog/[...slug].astro` — ¡el blog no tiene páginas individuales funcionales! Solo existe el índice.

**Acción:** Crear `BlogPostCard.astro`, `src/pages/blog/[...slug].astro` con el sistema. Reescribir índice. **PRIORIDAD ALTA**

---

### PÁGINA 8: `/contacto` — Contacto (contacto.astro)
**Estado:** 🟡 FUNCIONAL PERO MUY MINIMALISTA

**Problemas:**
1. Sin hero definido — entra directo a la sección
2. Sin `SectionHeader`
3. Sin breadcrumb
4. CSS inline propio
5. No usa el sistema de formulario del módulo FAQ+Cotización
6. Link "Ir al formulario" apunta a `/#cotizacion` — debería haber formulario en la página

**Acción:** Agregar hero mínimo + SectionHeader + formulario completo del sistema. **PRIORIDAD ALTA**

---

### PÁGINA 9: `/bolsa-de-trabajo` — Bolsa de Trabajo (bolsa-de-trabajo.astro)
**Estado:** 🔴 FUERA DE SISTEMA

**Problemas:**
1. Usa `useLegacyCSS={true}`
2. 855 líneas — la página más larga del proyecto
3. Hero propio (`hero--careers`) con H1 de 20 palabras sobreoptimizado
4. Secciones: `why-work-section`, `benefits-section`, `requirements-section` — no en el sistema
5. **Formulario de empleo** propio (190+ líneas)
6. Sin breadcrumb, sin `SectionHeader`, sin ningún componente aprobado
7. 0 CSS del sistema utilizado

**Acción:** Reescribir con sistema. Simplificar hero. Usar módulo de formulario. **PRIORIDAD MEDIA**

---

### PÁGINA 10: `/aviso-de-privacidad` — Legal
**Estado:** 🟢 ACEPTABLE (bajo estándar intencional para páginas legales)

**Observaciones:**
- CSS inline mínimo
- Sin breadcrumb
- Sin hero estructurado

**Acción:** Solo agregar breadcrumb + hero mínimo. **PRIORIDAD BAJA**

---

### PÁGINA 11: `/mapa-del-sitio` — Sitemap HTML
**Estado:** 🟢 ACEPTABLE

**Observaciones:**
- Funcional, sin diseño elaborado (correcto para sitemap)
- Sin hero ni SectionHeader

**Acción:** Hero mínimo + SectionHeader. **PRIORIDAD BAJA**

---

## PARTE 3 — INVENTARIO DE INCONSISTENCIAS TÉCNICAS

### 3.1 CSS — Problemas sistémicos

| Problema | Archivos afectados | Impacto |
|---|---|---|
| CSS inline en páginas | nosotros, bolsa, servicios/index, blog, contacto | Alto — imposible mantener |
| `useLegacyCSS={true}` activo | nosotros, bolsa | Alto — activa CSS antiguo |
| `.section-title` y `.section-subtitle` en global.css | Todas las páginas | Medio — override de h2 color |
| `h4` sobre fondo oscuro sin !important | CredentialsCard (resuelto), potencial en otras páginas | Medio |
| `cta.css` y `final-cta.css` en index.css | Cargados pero clases eliminadas del HTML | Bajo — peso muerto |
| `services.css` vacío pero importado | index.css | Bajo |

### 3.2 Componentes — Inconsistencias

| Componente | Estado | Problema |
|---|---|---|
| `SectionHeader.astro` | ✅ Creado | No usado en 7 de 11 páginas |
| `CategoriaCard.astro` | ✅ Creado | Solo usado en homepage |
| `ServiceCard.astro` | ✅ Creado | Solo usado en homepage (ya no, con el rediseño) |
| Hero de página | ❌ No existe como componente | Cada página tiene su propio hero |
| `BlogPostCard.astro` | ❌ No existe | Blog sin componente de card |
| `HeroPagina.astro` | ❌ No existe | Necesario para homologar |

### 3.3 SEO — Gaps

| Página | H1 | Meta desc | Breadcrumb | Schema |
|---|---|---|---|---|
| `/` | ✅ | ✅ | N/A | ✅ LocalBusiness + FAQ |
| `/servicios` | ✅ simple | ✅ | ❌ | ✅ ItemList |
| `/servicios/[slug]` | ✅ | ✅ | ✅ | ✅ Service |
| `/zonas` | ✅ | ✅ | ❌ | ✅ ItemList |
| `/zonas/[slug]` | ✅ | ✅ | ✅ | ✅ LocalBusiness |
| `/nosotros` | ✅ | ✅ | ❌ | ✅ Organization |
| `/blog` | ✅ simple | ✅ | ❌ | ✅ Blog |
| `/blog/[slug]` | N/A | N/A | N/A | ❌ **NO EXISTE** |
| `/contacto` | ✅ implícito | ✅ | ❌ | ❌ |
| `/bolsa-de-trabajo` | ✅ sobreoptimizado | ✅ | ❌ | ✅ JobPosting |

---

## PARTE 4 — COMPONENTES NUEVOS A CREAR

### Componente 1: `HeroPagina.astro` (CRÍTICO)
```
Props:
- badge: string
- titulo: string  
- descripcion: string
- breadcrumb?: { label, href }[]
- ctaPrimario?: { texto, href }
- ctaWhatsapp?: boolean
- tema?: 'dark' | 'gradient'
- imagen?: string (opcional, col derecha)

Estructura:
nav.breadcrumb → schema BreadcrumbList
section.hero-page (gradient oscuro)
  span.badge
  h1
  p.descripcion
  div.hero-cta
```

### Componente 2: `BlogPostCard.astro`
```
Props:
- href, title, description, category, publishDate, readingTime, heroImage

Estructura:
article.blog-card
  div.blog-card__image (16:9)
  div.blog-card__body
    span.blog-card__category
    h3.blog-card__title
    p.blog-card__desc
    div.blog-card__meta (fecha + tiempo lectura)
```

### Componente 3: `PageCTA.astro` (banner de cierre de página)
```
Props:
- titulo: string
- descripcion: string
- ctaPrimario: { texto, href }
- ctaWhatsapp?: boolean

Estructura:
section.page-cta (fondo dark)
  h2 + p + div.cta-btns
```

---

## PARTE 5 — PLAN DE EJECUCIÓN (orden de prioridad)

### FASE 1 — Componentes base (antes de tocar páginas)
1. ✅ Crear `HeroPagina.astro` — usado en TODAS las páginas interiores
2. ✅ Crear `BlogPostCard.astro` — necesario para blog
3. ✅ Crear `PageCTA.astro` — CTA de cierre estándar

### FASE 2 — Páginas críticas (impacto SEO + conversión)
4. ✅ `/contacto` — reescribir con hero + formulario del sistema
5. ✅ `/servicios/index` — reescribir con sistema completo
6. ✅ `/nosotros` — reescribir eliminando useLegacyCSS
7. ✅ Crear `blog/[...slug].astro` — plantilla de post

### FASE 3 — Páginas importantes
8. ✅ `/blog` — reescribir con BlogPostCard
9. ✅ `/zonas/index` — agregar SectionHeader, homologar cards
10. ✅ `/zonas/[slug]` — ajustes de homologación

### FASE 4 — Páginas secundarias
11. ✅ `/bolsa-de-trabajo` — simplificar con sistema
12. ✅ `/aviso-de-privacidad` — hero mínimo
13. ✅ `/mapa-del-sitio` — hero mínimo

### FASE 5 — Limpieza técnica
14. ✅ Eliminar `cta.css` y `final-cta.css` del index.css (clases huérfanas)
15. ✅ Eliminar CSS inline de todas las páginas procesadas
16. ✅ Quitar `useLegacyCSS` de todas las páginas
17. ✅ Crear `src/styles/pages/` para estilos de páginas interiores

---

## PARTE 6 — ARQUITECTURA CSS OBJETIVO

```
src/styles/
├── global.css              → reset, variables, tipografía base, .container, .btn
├── sections/               → estilos de secciones de homepage
│   ├── index.css           → importa todo
│   ├── hero.css
│   ├── nav-cta.css
│   ├── servicios-cats.css
│   ├── about.css
│   ├── testimonials.css
│   ├── faq-cotizacion.css
│   └── faq.css
└── pages/                  → estilos de páginas interiores (NUEVO)
    ├── servicios.css       → /servicios index
    ├── nosotros.css        → /nosotros
    ├── blog.css            → /blog + /blog/[slug]
    ├── contacto.css        → /contacto
    ├── bolsa.css           → /bolsa-de-trabajo
    └── legal.css           → aviso + mapa del sitio
```

---

## PARTE 7 — ESTÁNDAR DE PÁGINA INTERIOR (plantilla)

Cada página interior debe seguir EXACTAMENTE esta estructura:

```astro
---
import Base from '../layouts/Base.astro';
import HeroPagina from '../components/HeroPagina.astro';
import SectionHeader from '../components/SectionHeader.astro';
import PageCTA from '../components/PageCTA.astro';
import '../styles/pages/[pagina].css';

// Schema
const schema = { ... };
---

<Base title={...} description={...} canonical={...} schema={schema}>

  <HeroPagina
    badge="..."
    titulo="..."
    descripcion="..."
    breadcrumb={[{ label: 'Página', href: '/pagina' }]}
  />

  <!-- SECCIÓN 1 -->
  <section class="[pagina]-[seccion]" id="...">
    <div class="container">
      <SectionHeader
        badge="..."
        titulo="..."
        subtitulo="..."
        align="center" | "left"
      />
      <!-- contenido -->
    </div>
  </section>

  <!-- ... más secciones -->

  <PageCTA
    titulo="..."
    descripcion="..."
    ctaPrimario={{ texto: '...', href: '/contacto' }}
    ctaWhatsapp={true}
  />

</Base>
```

---

## PARTE 8 — CHECKLIST DE HOMOLOGACIÓN POR PÁGINA

Para cada página, verificar antes de marcarla como homologada:

- [ ] Usa `Base.astro` sin `useLegacyCSS`
- [ ] Hero usa `HeroPagina.astro` (o hero de homepage para index)
- [ ] Breadcrumb con schema cuando aplica
- [ ] Todas las secciones usan `SectionHeader.astro`
- [ ] CSS en `src/styles/pages/[pagina].css`, no inline
- [ ] Sin transiciones ni transforms (excepto botones)
- [ ] Iconos SVG monocromáticos
- [ ] H1 con keyword principal al inicio
- [ ] Cierra con `PageCTA.astro`
- [ ] Schema correcto por tipo de página
- [ ] Mobile probado en 375px

---

## RESUMEN EJECUTIVO

| Página | Estado actual | Prioridad | Acción |
|---|---|---|---|
| `/` Homepage | ✅ HOMOLOGADA | — | Ajuste menor en SectionHeader About |
| `/servicios` | 🔴 Fuera de sistema | ALTA | Reescribir completo |
| `/servicios/[slug]` | 🟡 Parcial | MEDIA | Refinar hero + sidebar |
| `/zonas` | 🟡 Funcional | MEDIA | Agregar SectionHeader |
| `/zonas/[slug]` | 🟡 Funcional | MEDIA | Ajustes homologación |
| `/nosotros` | 🔴 Fuera de sistema | ALTA | Reescribir sin legacyCSS |
| `/blog` | 🟡 Funcional | ALTA | BlogPostCard + reescribir |
| `/blog/[slug]` | ❌ No existe | CRÍTICA | Crear plantilla completa |
| `/contacto` | 🟡 Minimalista | ALTA | Hero + formulario sistema |
| `/bolsa-de-trabajo` | 🔴 Fuera de sistema | MEDIA | Simplificar + sistema |
| `/aviso-de-privacidad` | 🟢 Aceptable | BAJA | Hero mínimo |
| `/mapa-del-sitio` | 🟢 Aceptable | BAJA | Hero mínimo |

**Páginas fuera de sistema:** 3 críticas (nosotros, bolsa, servicios/index)  
**Página no existente:** blog/[slug] — brecha SEO crítica  
**CSS inline total a migrar:** ~2,000+ líneas en páginas activas

---
*Estudio generado por Jacinto — Arquitecto Senior OrigenLab | Marzo 2026*
*Versión 1.0 — Base para ejecución de homologación total*
