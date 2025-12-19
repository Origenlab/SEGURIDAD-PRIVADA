# 📝 GUÍA PROFESIONAL PARA CREACIÓN DE ARTÍCULOS DE BLOG

## ORIGINS PRIVATE SECURITY - Manual de Generación de Contenido SEO

**Versión:** 2.0
**Última actualización:** Noviembre 2025
**Basado en:** `/blog/articulos/sistemas-seguridad-condominios-polanco-santa-fe.html`

---

## 📋 ÍNDICE

1. [Estructura del Archivo HTML](#1-estructura-del-archivo-html)
2. [Arquitectura de Secciones](#2-arquitectura-de-secciones)
3. [Optimización SEO Avanzada](#3-optimización-seo-avanzada)
4. [Marketing y Conversión](#4-marketing-y-conversión)
5. [Guía de Estilos CSS](#5-guía-de-estilos-css)
6. [Checklist de Publicación](#6-checklist-de-publicación)
7. [Plantilla Base](#7-plantilla-base)
8. [Ejemplos de Títulos y Keywords](#8-ejemplos-de-títulos-y-keywords)

---

## 1. ESTRUCTURA DEL ARCHIVO HTML

### 1.1 Ubicación del Archivo

```
/blog/articulos/[nombre-del-articulo].html
```

**Convención de nombres:**
- Solo minúsculas
- Palabras separadas por guiones (-)
- Sin caracteres especiales ni acentos
- Máximo 60 caracteres
- Incluir palabra clave principal

**Ejemplos:**
```
✅ seguridad-condominios-lujo-cdmx.html
✅ como-elegir-empresa-seguridad-privada.html
✅ tendencias-tecnologia-seguridad-2025.html
❌ Seguridad_Condominios.html
❌ artículo-sobre-seguridad.html
```

### 1.2 Doctype y HTML Base

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- META SEO - OBLIGATORIO -->
  <link rel="canonical" href="https://seguridad-privada.com.mx/blog/articulos/[NOMBRE-ARCHIVO].html">
  <title>[TÍTULO SEO] | ORIGINS</title>
  <meta name="description" content="[META DESCRIPTION 150-160 caracteres]">
  <meta name="keywords" content="[5-8 KEYWORDS separadas por coma]">

  <!-- OPEN GRAPH - OBLIGATORIO -->
  <meta property="og:title" content="[TÍTULO OG - máx 60 chars]">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://seguridad-privada.com.mx/blog/articulos/[NOMBRE-ARCHIVO].html">
  <meta property="og:description" content="[DESCRIPCIÓN OG - 100-150 chars]">

  <!-- FAVICONS Y MANIFEST -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../../icon.png">
  <link rel="manifest" href="../../site.webmanifest">
  <meta name="theme-color" content="#1d1d1f">

  <!-- CSS PRINCIPAL -->
  <link rel="stylesheet" href="../../css/style.css">
</head>
```

---

## 2. ARQUITECTURA DE SECCIONES

### 2.1 Estructura General del Body

```
<body>
  ├── <div id="menu-container">      → Header dinámico
  │
  └── <main class="main-content">
      │
      ├── SECTION 1: Article Hero    → Cabecera del artículo
      │
      ├── SECTION 2: Gallery         → Galería de imágenes (opcional)
      │
      ├── SECTION 3: Article Body    → Contenido principal + Sidebar
      │
      ├── SECTION 4: Related Services→ Servicios relacionados
      │
      ├── SECTION 5: Related Articles→ Artículos relacionados
      │
      └── SECTION 6: CTA Final       → Llamada a la acción

  ├── <div id="footer-container">    → Footer dinámico
  │
  └── <script>                       → Scripts de carga
```

### 2.2 SECTION 1: Article Hero (OBLIGATORIO)

```html
<section class="article-hero">
  <div class="container">
    <!-- Enlace de regreso -->
    <a href="../" class="article-back-link">← Volver al Blog</a>

    <div class="article-hero__content">
      <!-- Categoría con badge de color -->
      <span class="article-category article-category--[TIPO]">[Categoría]</span>

      <!-- Título H1 - UNO SOLO POR PÁGINA -->
      <h1 class="article-hero__title">[TÍTULO PRINCIPAL DEL ARTÍCULO]</h1>

      <!-- Lead/Subtítulo - Resumen atractivo -->
      <p class="article-hero__lead">
        [Párrafo introductorio de 2-3 líneas que enganche al lector y resuma el valor del artículo]
      </p>
    </div>

    <!-- Imagen Hero Principal -->
    <div class="article-hero__image">
      <img src="../../img/[CARPETA]/[IMAGEN].webp"
           alt="[ALT DESCRIPTIVO CON KEYWORDS]"
           loading="eager">
    </div>
  </div>
</section>
```

**Tipos de categoría disponibles:**
- `article-category--guias` → Verde (Guías Profesionales)
- `article-category--tendencias` → Azul (Tendencias)
- `article-category--consejos` → Naranja (Consejos)
- `article-category--normativa` → Gris (Normativa)
- `article-category--analisis` → Púrpura (Análisis)
- `article-category--tecnologia` → Cian (Tecnología)

### 2.3 SECTION 2: Gallery Section (OPCIONAL pero RECOMENDADO)

```html
<section class="gallery-section">
  <div class="container">
    <div class="gallery-header">
      <h2 class="gallery-title">[TÍTULO DE LA GALERÍA]</h2>
      <p class="gallery-subtitle">[Subtítulo descriptivo]</p>
    </div>

    <!-- Grid de 3 columnas -->
    <div class="gallery-grid gallery-grid--three">

      <!-- Item 1 -->
      <div class="gallery-item">
        <img src="../../img/[CARPETA]/[IMAGEN-1].webp"
             alt="[ALT DESCRIPTIVO]"
             class="gallery-image">
        <div class="gallery-caption">
          <h3>[Título del componente]</h3>
          <p>[Descripción breve de 1-2 líneas]</p>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="gallery-item">
        <img src="../../img/[CARPETA]/[IMAGEN-2].webp"
             alt="[ALT DESCRIPTIVO]"
             class="gallery-image">
        <div class="gallery-caption">
          <h3>[Título del componente]</h3>
          <p>[Descripción breve]</p>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="gallery-item">
        <img src="../../img/[CARPETA]/[IMAGEN-3].webp"
             alt="[ALT DESCRIPTIVO]"
             class="gallery-image">
        <div class="gallery-caption">
          <h3>[Título del componente]</h3>
          <p>[Descripción breve]</p>
        </div>
      </div>

    </div>
  </div>
</section>
```

### 2.4 SECTION 3: Article Content with Sidebar (OBLIGATORIO)

```html
<article class="article-section">
  <div class="blog-with-sidebar">

    <!-- CONTENIDO PRINCIPAL -->
    <div class="blog-main-content">
      <div class="article-body">

        <!-- ESTRUCTURA DE CONTENIDO -->
        <h2>Título de Sección Principal</h2>
        <p>
          Párrafo introductorio con <strong>texto en negrita</strong> para
          conceptos importantes y <a href="../../[SERVICIO].html">enlaces internos</a>
          a servicios relacionados.
        </p>
        <p>
          Segundo párrafo desarrollando el tema...
        </p>

        <h3>Subtítulo de Subsección</h3>
        <p>
          Contenido de la subsección...
        </p>

        <h2>Segunda Sección Principal</h2>
        <h3>Primer Subtema</h3>
        <p>Contenido...</p>

        <h3>Segundo Subtema</h3>
        <p>Contenido...</p>

        <!-- Repetir estructura según necesidad -->

        <h2>Conclusión / Llamada a la Acción</h2>
        <p>
          Párrafo de cierre que invite al lector a contactar...
        </p>

      </div>
    </div>

    <!-- SIDEBAR - Se carga dinámicamente -->
    <div class="blog-sidebar-sticky" id="blog-sidebar-container">
      <!-- El sidebar se cargará aquí -->
    </div>

  </div>
</article>
```

### 2.5 SECTION 4: Related Services (OBLIGATORIO)

```html
<section class="related-services">
  <div class="container">
    <h2 class="section-title">Servicios de [TEMA] Relacionados</h2>
    <p class="section-subtitle">[Descripción breve de los servicios]</p>

    <div class="related-services-grid">

      <!-- Servicio 1 -->
      <a href="../../[SERVICIO-1].html" class="related-service-card">
        <h3 class="related-service-title">[Nombre del Servicio]</h3>
        <p class="related-service-description">[Descripción corta del servicio]</p>
        <span class="related-service-link">Ver servicio →</span>
      </a>

      <!-- Servicio 2 -->
      <a href="../../[SERVICIO-2].html" class="related-service-card">
        <h3 class="related-service-title">[Nombre del Servicio]</h3>
        <p class="related-service-description">[Descripción corta]</p>
        <span class="related-service-link">Ver servicio →</span>
      </a>

      <!-- Servicio 3 -->
      <a href="../../[SERVICIO-3].html" class="related-service-card">
        <h3 class="related-service-title">[Nombre del Servicio]</h3>
        <p class="related-service-description">[Descripción corta]</p>
        <span class="related-service-link">Ver servicio →</span>
      </a>

    </div>
  </div>
</section>
```

### 2.6 SECTION 5: Related Articles (OBLIGATORIO)

```html
<section class="related-articles-section">
  <div class="container">
    <h2 class="section-title">Artículos Relacionados</h2>
    <p class="section-subtitle">Continúa explorando nuestros recursos especializados</p>

    <div class="related-articles-grid">

      <!-- Artículo 1 -->
      <a href="[ARTICULO-1].html" class="related-article-card" data-category="[CATEGORIA]">
        <div class="related-article-card-content">
          <span class="related-article-category">[Categoría]</span>
          <h3 class="related-article-title">[Título del Artículo]</h3>
          <p class="related-article-excerpt">[Extracto de 10-15 palabras]</p>
          <span class="related-article-link">Leer más</span>
        </div>
      </a>

      <!-- Artículo 2 -->
      <a href="[ARTICULO-2].html" class="related-article-card" data-category="[CATEGORIA]">
        <div class="related-article-card-content">
          <span class="related-article-category">[Categoría]</span>
          <h3 class="related-article-title">[Título]</h3>
          <p class="related-article-excerpt">[Extracto]</p>
          <span class="related-article-link">Leer más</span>
        </div>
      </a>

      <!-- Artículo 3 -->
      <a href="[ARTICULO-3].html" class="related-article-card" data-category="[CATEGORIA]">
        <div class="related-article-card-content">
          <span class="related-article-category">[Categoría]</span>
          <h3 class="related-article-title">[Título]</h3>
          <p class="related-article-excerpt">[Extracto]</p>
          <span class="related-article-link">Leer más</span>
        </div>
      </a>

    </div>
  </div>
</section>
```

### 2.7 SECTION 6: CTA Final (OBLIGATORIO)

```html
<section class="cta-business">
  <div class="cta-business__content">
    <h2 class="cta-business__title">¿[PREGUNTA ORIENTADA A LA ACCIÓN]?</h2>
    <p class="cta-business__description">
      [Párrafo persuasivo de 2-3 líneas que motive al lector a contactar]
    </p>

    <div class="cta-business__features">
      <!-- Feature 1 -->
      <div class="cta-business__feature">
        <h3 class="cta-business__feature-title">[Beneficio 1]</h3>
        <p class="cta-business__feature-text">[Descripción corta]</p>
      </div>
      <!-- Feature 2 -->
      <div class="cta-business__feature">
        <h3 class="cta-business__feature-title">[Beneficio 2]</h3>
        <p class="cta-business__feature-text">[Descripción corta]</p>
      </div>
      <!-- Feature 3 -->
      <div class="cta-business__feature">
        <h3 class="cta-business__feature-title">[Beneficio 3]</h3>
        <p class="cta-business__feature-text">[Descripción corta]</p>
      </div>
    </div>

    <div class="cta-business__actions">
      <!-- Botón WhatsApp -->
      <a href="https://wa.me/525530255580?text=[MENSAJE_CODIFICADO]"
         class="cta-business__btn cta-business__btn--primary"
         target="_blank"
         rel="noopener">
        <span>WhatsApp</span>
      </a>
      <!-- Botón Cotización -->
      <a href="../../#cotizacion" class="cta-business__btn cta-business__btn--secondary">
        Solicitar Cotización
      </a>
    </div>
  </div>
</section>
```

---

## 3. OPTIMIZACIÓN SEO AVANZADA

### 3.1 Meta Tags Críticos

| Meta Tag | Longitud Óptima | Ejemplo |
|----------|-----------------|---------|
| `<title>` | 50-60 caracteres | "Seguridad para Condominios de Lujo en CDMX \| ORIGINS" |
| `meta description` | 150-160 caracteres | "Guía completa de sistemas de seguridad para condominios premium: guardias certificados SSC, CCTV con IA, control biométrico. Cotización gratuita." |
| `meta keywords` | 5-8 keywords | "seguridad condominios CDMX, guardias certificados, CCTV inteligente" |
| `og:title` | 50-60 caracteres | Mismo que title o variación |
| `og:description` | 100-150 caracteres | Versión resumida de la descripción |

### 3.2 Estructura de Headings (Jerarquía)

```
H1 → Solo UNO por página (en article-hero__title)
  │
  ├── H2 → Secciones principales del contenido (3-6 por artículo)
  │    │
  │    ├── H3 → Subsecciones dentro de H2 (2-4 por H2)
  │    │    │
  │    │    └── H4 → Detalles específicos (raro, solo si necesario)
  │    │
  │    └── H3 → Otra subsección
  │
  └── H2 → Siguiente sección principal
```

### 3.3 Enlaces Internos (CRÍTICO PARA SEO)

**Regla de oro:** Cada artículo debe tener **mínimo 5-8 enlaces internos** a:

1. **Servicios relacionados** (3-5 enlaces):
   ```html
   <a href="../../guardias-intramuros.html">guardias intramuros especializados</a>
   <a href="../../seguridad-condominios.html">seguridad para condominios</a>
   <a href="../../vigilancia-remota-cctv.html">vigilancia remota con CCTV</a>
   ```

2. **Otros artículos del blog** (2-3 enlaces):
   ```html
   <a href="certificaciones-guardias-seguridad-cdmx.html">certificaciones de guardias</a>
   ```

3. **Páginas de conversión** (1-2 enlaces):
   ```html
   <a href="../../contacto.html">solicite una cotización</a>
   ```

### 3.4 Optimización de Imágenes

**Formato:** WebP (obligatorio)
**Carpetas disponibles:**
```
/img/img-condominios/
/img/img-construccion/
/img/img-eventos/
/img/img-hospitalaria/
/img/img-guardias-intramuros/
/img/img-vigilancia-remota/
/img/img-monitoreo-de-alarmas/
/img/img-rastreo-gps/
/img/img-proteccion-ejecutiva/
/img/img-index/
```

**Atributos obligatorios:**
```html
<img
  src="../../img/[CARPETA]/[nombre-descriptivo].webp"
  alt="[Descripción con keywords - 5-10 palabras]"
  loading="lazy"  <!-- O "eager" para imagen hero -->
  class="[clase-correspondiente]"
>
```

### 3.5 Densidad de Keywords

- **Keyword principal:** 3-5 veces en el artículo
- **Keywords secundarias:** 1-2 veces cada una
- **Ubicaciones clave:**
  - H1 (obligatorio)
  - Primer párrafo (obligatorio)
  - Al menos 1 H2
  - Alt de imagen hero
  - Último párrafo

---

## 4. MARKETING Y CONVERSIÓN

### 4.1 Fórmula de Títulos Atractivos

**Estructura recomendada:**

```
[Beneficio Principal] + [Especificidad] + [Contexto Geográfico]

Ejemplos:
✅ "Sistemas de Seguridad Integral para Condominios de Lujo en Polanco y Santa Fe"
✅ "Guía Completa de Control de Accesos Biométrico para Empresas en CDMX"
✅ "7 Errores Críticos al Contratar Seguridad Privada (y Cómo Evitarlos)"
✅ "Certificaciones SSC: Lo Que Todo Administrador de Condominio Debe Saber"
```

**Fórmulas que funcionan:**
- "Guía Completa de [TEMA]"
- "[NÚMERO] [BENEFICIOS/ERRORES/CONSEJOS] de [TEMA]"
- "Cómo [LOGRAR BENEFICIO] en [CONTEXTO]"
- "[TEMA]: Todo lo que Necesitas Saber en [AÑO]"
- "La Verdad Sobre [TEMA] que Nadie Te Cuenta"

### 4.2 Lead/Subtítulo Persuasivo

El párrafo debajo del H1 debe:
1. **Prometer valor específico** → "Descubra las soluciones profesionales..."
2. **Crear urgencia/relevancia** → "...diseñadas específicamente para..."
3. **Establecer autoridad** → "...con más de 15 años de experiencia..."

**Estructura del lead:**
```html
<p class="article-hero__lead">
  [VERBO DE ACCIÓN]: Descubra / Conozca / Aprenda / Implemente
  [BENEFICIO ESPECÍFICO]: las soluciones profesionales de seguridad
  [PARA QUIÉN]: diseñadas para condominios premium
  [DÓNDE]: en Ciudad de México
  [ELEMENTOS CLAVE]: tecnología avanzada, personal certificado y protocolos especializados.
</p>
```

### 4.3 CTA Efectivos por Sección

**En el contenido del artículo:**
```html
<p>
  ¿Necesita evaluar la seguridad de su condominio?
  <a href="../../consultoria-analisis-riesgos.html">Solicite un análisis de riesgos profesional</a>
  sin costo y descubra vulnerabilidades que podrían estar exponiendo a sus residentes.
</p>
```

**En el CTA final:**
- Pregunta directa que identifique el problema
- 3 beneficios concretos
- 2 opciones de contacto (WhatsApp + Formulario)

### 4.4 Mensaje de WhatsApp Pre-configurado

**Codificación URL del mensaje:**
```
Hola,%20necesito%20información%20sobre%20[TEMA]
```

**Ejemplos:**
```
?text=Hola,%20necesito%20información%20sobre%20sistemas%20de%20seguridad%20para%20condominios%20de%20lujo
?text=Hola,%20quiero%20cotizar%20guardias%20intramuros%20para%20mi%20empresa
?text=Hola,%20me%20interesa%20conocer%20sus%20servicios%20de%20CCTV%20con%20monitoreo%2024/7
```

---

## 5. GUÍA DE ESTILOS CSS

### 5.1 Clases Principales Disponibles

**Hero del Artículo:**
```css
.article-hero                 /* Contenedor principal */
.article-hero__content        /* Wrapper del contenido */
.article-hero__title          /* H1 del artículo */
.article-hero__lead           /* Párrafo introductorio */
.article-hero__image          /* Contenedor de imagen */
.article-back-link            /* Enlace "← Volver" */
.article-category             /* Badge de categoría */
.article-category--[tipo]     /* Modificador de color */
```

**Galería:**
```css
.gallery-section              /* Contenedor de galería */
.gallery-header               /* Header con título */
.gallery-title                /* H2 de galería */
.gallery-subtitle             /* Subtítulo */
.gallery-grid                 /* Grid de items */
.gallery-grid--three          /* Modificador 3 columnas */
.gallery-item                 /* Cada item */
.gallery-image                /* Imagen */
.gallery-caption              /* Caption con texto */
```

**Contenido del Artículo:**
```css
.article-section              /* Wrapper del artículo */
.blog-with-sidebar            /* Layout con sidebar */
.blog-main-content            /* Columna principal */
.article-body                 /* Contenedor del texto */
.blog-sidebar-sticky          /* Sidebar sticky */
```

**Servicios y Artículos Relacionados:**
```css
.related-services             /* Sección servicios */
.related-services-grid        /* Grid de servicios */
.related-service-card         /* Cada tarjeta */
.related-service-title        /* Título */
.related-service-description  /* Descripción */
.related-service-link         /* Enlace "Ver →" */

.related-articles-section     /* Sección artículos */
.related-articles-grid        /* Grid */
.related-article-card         /* Tarjeta de artículo */
.related-article-category     /* Badge categoría */
.related-article-title        /* Título */
.related-article-excerpt      /* Extracto */
```

**CTA Final:**
```css
.cta-business                 /* Contenedor CTA */
.cta-business__content        /* Wrapper */
.cta-business__title          /* Título (H2) */
.cta-business__description    /* Descripción */
.cta-business__features       /* Grid de features */
.cta-business__feature        /* Cada feature */
.cta-business__feature-title  /* Título feature */
.cta-business__feature-text   /* Texto feature */
.cta-business__actions        /* Contenedor botones */
.cta-business__btn            /* Botón base */
.cta-business__btn--primary   /* WhatsApp (verde) */
.cta-business__btn--secondary /* Cotización (outline) */
```

### 5.2 Estilos de Texto en article-body

El CSS aplica automáticamente estos estilos:

```css
.article-body h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 2.5rem 0 1rem;
  line-height: 1.3;
}

.article-body h3 {
  font-size: 1.35rem;
  font-weight: 600;
  color: #333;
  margin: 2rem 0 0.75rem;
}

.article-body p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.25rem;
}

.article-body a {
  color: var(--color-primary);
  text-decoration: underline;
}

.article-body strong {
  font-weight: 600;
  color: #1d1d1f;
}
```

---

## 6. CHECKLIST DE PUBLICACIÓN

### 6.1 Antes de Escribir

- [ ] Definir keyword principal (búsqueda en Google Keyword Planner)
- [ ] Definir 4-6 keywords secundarias
- [ ] Identificar 3 servicios relacionados para enlazar
- [ ] Identificar 3 artículos relacionados existentes
- [ ] Seleccionar 4-6 imágenes WebP de la carpeta `/img/`
- [ ] Definir categoría del artículo (Guías, Tendencias, Consejos, etc.)

### 6.2 Durante la Escritura

- [ ] H1 único con keyword principal
- [ ] Meta title ≤ 60 caracteres
- [ ] Meta description 150-160 caracteres
- [ ] Keywords en primer párrafo
- [ ] Mínimo 5 enlaces internos
- [ ] Mínimo 3 H2 y 6 H3
- [ ] Longitud: 2000-4000 palabras para SEO óptimo
- [ ] Cada párrafo < 4 líneas (legibilidad)
- [ ] Uso de `<strong>` para términos importantes
- [ ] Alt text en todas las imágenes

### 6.3 Estructura Completa

- [ ] Article Hero con categoría, H1, lead e imagen
- [ ] Gallery Section (si aplica)
- [ ] Article Body con sidebar
- [ ] Related Services (3 servicios)
- [ ] Related Articles (3 artículos)
- [ ] CTA Final con 3 features y 2 botones

### 6.4 SEO Técnico

- [ ] Canonical URL correcta
- [ ] Open Graph tags completos
- [ ] Imágenes en formato WebP
- [ ] Loading="lazy" en imágenes (excepto hero)
- [ ] URLs relativas correctas (../../)
- [ ] Scripts de menu y footer incluidos
- [ ] Script de sidebar incluido

### 6.5 Post-Publicación

- [ ] Agregar artículo al sitemap.xml
- [ ] Agregar artículo al blog/index.html
- [ ] Actualizar sidebar con artículos relacionados
- [ ] Verificar en navegador (desktop y mobile)
- [ ] Verificar enlaces internos funcionan
- [ ] Verificar imágenes cargan correctamente

---

## 7. PLANTILLA BASE

Copiar el siguiente código como base para nuevos artículos:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="https://seguridad-privada.com.mx/blog/articulos/NOMBRE-ARCHIVO.html">
  <title>TITULO SEO MAX 60 CHARS | ORIGINS</title>
  <meta name="description" content="META DESCRIPTION DE 150-160 CARACTERES CON KEYWORD PRINCIPAL Y CTA.">
  <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4, keyword5">

  <meta property="og:title" content="TITULO OG MAX 60 CHARS">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://seguridad-privada.com.mx/blog/articulos/NOMBRE-ARCHIVO.html">
  <meta property="og:description" content="DESCRIPCION OG 100-150 CHARS">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../../icon.png">
  <link rel="manifest" href="../../site.webmanifest">
  <meta name="theme-color" content="#1d1d1f">

  <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
  <div id="menu-container"></div>

  <main class="main-content">
    <!-- Article Hero -->
    <section class="article-hero">
      <div class="container">
        <a href="../" class="article-back-link">← Volver al Blog</a>
        <div class="article-hero__content">
          <span class="article-category article-category--guias">Guías Profesionales</span>
          <h1 class="article-hero__title">TITULO H1 PRINCIPAL DEL ARTICULO</h1>
          <p class="article-hero__lead">
            Lead persuasivo de 2-3 líneas que enganche al lector y resuma el valor del contenido.
          </p>
        </div>

        <div class="article-hero__image">
          <img src="../../img/CARPETA/imagen-hero.webp" alt="Alt descriptivo con keywords" loading="eager">
        </div>
      </div>
    </section>

    <!-- Gallery Section (Opcional) -->
    <section class="gallery-section">
      <div class="container">
        <div class="gallery-header">
          <h2 class="gallery-title">Título de la Galería</h2>
          <p class="gallery-subtitle">Subtítulo descriptivo</p>
        </div>
        <div class="gallery-grid gallery-grid--three">
          <div class="gallery-item">
            <img src="../../img/CARPETA/imagen-1.webp" alt="Alt imagen 1" class="gallery-image">
            <div class="gallery-caption">
              <h3>Título Item 1</h3>
              <p>Descripción breve</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../../img/CARPETA/imagen-2.webp" alt="Alt imagen 2" class="gallery-image">
            <div class="gallery-caption">
              <h3>Título Item 2</h3>
              <p>Descripción breve</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../../img/CARPETA/imagen-3.webp" alt="Alt imagen 3" class="gallery-image">
            <div class="gallery-caption">
              <h3>Título Item 3</h3>
              <p>Descripción breve</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content with Sidebar -->
    <article class="article-section">
      <div class="blog-with-sidebar">
        <div class="blog-main-content">
          <div class="article-body">

          <h2>Primera Sección Principal</h2>
          <p>
            Párrafo introductorio con <strong>términos importantes</strong> en negrita
            y <a href="../../servicio-relacionado.html">enlaces internos a servicios</a>.
          </p>
          <p>
            Segundo párrafo desarrollando el tema...
          </p>

          <h3>Subsección 1.1</h3>
          <p>
            Contenido de la subsección...
          </p>

          <h3>Subsección 1.2</h3>
          <p>
            Contenido de la subsección...
          </p>

          <h2>Segunda Sección Principal</h2>
          <p>
            Contenido de la segunda sección...
          </p>

          <h3>Subsección 2.1</h3>
          <p>
            Contenido...
          </p>

          <h2>Conclusión y Siguiente Paso</h2>
          <p>
            Párrafo de cierre que invite al lector a tomar acción. Contacte a
            <a href="../../contacto.html">nuestros especialistas</a> para una
            evaluación personalizada.
          </p>

          </div>
        </div>

        <div class="blog-sidebar-sticky" id="blog-sidebar-container">
        </div>
      </div>
    </article>

    <!-- Related Services -->
    <section class="related-services">
      <div class="container">
        <h2 class="section-title">Servicios Relacionados</h2>
        <p class="section-subtitle">Soluciones profesionales para su necesidad</p>
        <div class="related-services-grid">
          <a href="../../servicio-1.html" class="related-service-card">
            <h3 class="related-service-title">Servicio 1</h3>
            <p class="related-service-description">Descripción del servicio</p>
            <span class="related-service-link">Ver servicio →</span>
          </a>
          <a href="../../servicio-2.html" class="related-service-card">
            <h3 class="related-service-title">Servicio 2</h3>
            <p class="related-service-description">Descripción del servicio</p>
            <span class="related-service-link">Ver servicio →</span>
          </a>
          <a href="../../servicio-3.html" class="related-service-card">
            <h3 class="related-service-title">Servicio 3</h3>
            <p class="related-service-description">Descripción del servicio</p>
            <span class="related-service-link">Ver servicio →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="related-articles-section">
      <div class="container">
        <h2 class="section-title">Artículos Relacionados</h2>
        <p class="section-subtitle">Continúa explorando nuestros recursos</p>
        <div class="related-articles-grid">
          <a href="articulo-1.html" class="related-article-card" data-category="guias">
            <div class="related-article-card-content">
              <span class="related-article-category">Guías</span>
              <h3 class="related-article-title">Título Artículo 1</h3>
              <p class="related-article-excerpt">Extracto breve del artículo</p>
              <span class="related-article-link">Leer más</span>
            </div>
          </a>
          <a href="articulo-2.html" class="related-article-card" data-category="tendencias">
            <div class="related-article-card-content">
              <span class="related-article-category">Tendencias</span>
              <h3 class="related-article-title">Título Artículo 2</h3>
              <p class="related-article-excerpt">Extracto breve</p>
              <span class="related-article-link">Leer más</span>
            </div>
          </a>
          <a href="articulo-3.html" class="related-article-card" data-category="consejos">
            <div class="related-article-card-content">
              <span class="related-article-category">Consejos</span>
              <h3 class="related-article-title">Título Artículo 3</h3>
              <p class="related-article-excerpt">Extracto breve</p>
              <span class="related-article-link">Leer más</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-business">
      <div class="cta-business__content">
        <h2 class="cta-business__title">¿Pregunta Orientada a la Acción?</h2>
        <p class="cta-business__description">
          Párrafo persuasivo que motive al lector a contactar.
        </p>
        <div class="cta-business__features">
          <div class="cta-business__feature">
            <h3 class="cta-business__feature-title">Beneficio 1</h3>
            <p class="cta-business__feature-text">Descripción corta</p>
          </div>
          <div class="cta-business__feature">
            <h3 class="cta-business__feature-title">Beneficio 2</h3>
            <p class="cta-business__feature-text">Descripción corta</p>
          </div>
          <div class="cta-business__feature">
            <h3 class="cta-business__feature-title">Beneficio 3</h3>
            <p class="cta-business__feature-text">Descripción corta</p>
          </div>
        </div>
        <div class="cta-business__actions">
          <a href="https://wa.me/525530255580?text=Hola,%20necesito%20información%20sobre%20TEMA" class="cta-business__btn cta-business__btn--primary" target="_blank" rel="noopener">
            <span>WhatsApp</span>
          </a>
          <a href="../../#cotizacion" class="cta-business__btn cta-business__btn--secondary">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  </main>

  <div id="footer-container"></div>

  <script>
    fetch('../../menu.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('menu-container').innerHTML = html;
        const header = document.querySelector('.header');
        if (header) {
          const logoImg = header.querySelector('.logo__image');
          if (logoImg) {
            const imgSrc = logoImg.getAttribute('src');
            if (imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('../')) {
              logoImg.setAttribute('src', '../../' + imgSrc);
            }
          }
          const links = header.querySelectorAll('a[href]');
          links.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('../')) {
              link.setAttribute('href', '../../' + href);
            }
          });
        }
        initMenu();
      });

    fetch('../../footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer-container').innerHTML = html;
        const footer = document.querySelector('.footer');
        if (footer) {
          const links = footer.querySelectorAll('a[href]');
          links.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('../')) {
              link.setAttribute('href', '../../' + href);
            }
          });
        }
      });

    function initMenu() {
      const menuToggle = document.getElementById('menuToggle');
      const nav = document.getElementById('headerNav');
      const contact = document.querySelector('.header__contact');
      const dropdownItems = document.querySelectorAll('.nav__item--dropdown');
      if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(e) {
          e.preventDefault();
          const isActive = nav.classList.toggle('active');
          menuToggle.classList.toggle('active');
          if (contact) contact.classList.toggle('active');
          document.body.style.overflow = isActive ? 'hidden' : '';
        });
        dropdownItems.forEach(function(item) {
          const link = item.querySelector('.nav__link');
          if (link) {
            link.addEventListener('click', function(e) {
              if (window.innerWidth <= 734) {
                e.preventDefault();
                item.classList.toggle('active');
              }
            });
          }
        });
        window.addEventListener('resize', function() {
          if (window.innerWidth > 734) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            if (contact) contact.classList.remove('active');
            dropdownItems.forEach(item => item.classList.remove('active'));
            document.body.style.overflow = '';
          }
        });
        document.addEventListener('click', function(e) {
          if (nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
              nav.classList.remove('active');
              menuToggle.classList.remove('active');
              if (contact) contact.classList.remove('active');
              dropdownItems.forEach(item => item.classList.remove('active'));
              document.body.style.overflow = '';
            }
          }
        });
      }
    }
  </script>

  <!-- Load Sidebar -->
  <script>
    fetch('../sidebar.html')
      .then(function(response) { return response.text(); })
      .then(function(html) {
        document.getElementById('blog-sidebar-container').innerHTML = html;
        // Aquí puedes agregar widget de artículos relacionados personalizados
      })
      .catch(function(error) { console.error('Error loading sidebar:', error); });
  </script>
</body>
</html>
```

---

## 8. EJEMPLOS DE TÍTULOS Y KEYWORDS

### 8.1 Por Categoría de Servicio

**Guardias de Seguridad:**
- "Guía Completa para Contratar Guardias de Seguridad Certificados en CDMX"
- "5 Señales de que tu Empresa Necesita Guardias Intramuros Profesionales"
- Keywords: guardias certificados CDMX, seguridad intramuros, vigilantes profesionales

**Condominios:**
- "Seguridad Integral para Condominios: Del Control de Accesos al CCTV"
- "Cómo Evaluar la Seguridad de tu Condominio en 10 Pasos"
- Keywords: seguridad condominios CDMX, control accesos residencial, vigilancia condominios

**Tecnología:**
- "CCTV con Inteligencia Artificial: El Futuro de la Vigilancia en México"
- "Guía de Sistemas de Alarma para Empresas: Qué Buscar en 2025"
- Keywords: CCTV inteligente, video analytics, monitoreo remoto 24/7

**Protección Ejecutiva:**
- "Protección Ejecutiva en México: Cuándo y Por Qué Contratarla"
- "Escoltas Profesionales vs Guardaespaldas: Diferencias Clave"
- Keywords: protección ejecutiva CDMX, escoltas profesionales, guardaespaldas certificados

### 8.2 Por Tipo de Contenido

**Guías:**
- "Guía Definitiva de...", "Todo lo que Necesitas Saber sobre...", "Manual Completo de..."

**Tendencias:**
- "Tendencias 2025 en...", "El Futuro de...", "Nuevas Tecnologías en..."

**Consejos:**
- "X Consejos para...", "Cómo Evitar...", "Mejores Prácticas de..."

**Comparativas:**
- "X vs Y: ¿Cuál Elegir?", "Comparativa de...", "Diferencias Entre..."

**Casos de Estudio:**
- "Caso de Éxito: Cómo [Cliente] Mejoró su Seguridad", "Implementación de..."

---

## 9. REGISTRO DE ARTÍCULOS EN BLOG/INDEX.HTML

### 9.1 Ubicación del Array de Artículos

El archivo `blog/index.html` contiene un array JavaScript llamado `blogArticles` que controla qué artículos se muestran en el blog. Este array se encuentra aproximadamente en la línea 107 del archivo.

### 9.2 Estructura de Cada Artículo en el Array

```javascript
{
  id: [NÚMERO_ÚNICO],           // ID incremental (siguiente disponible)
  title: "[TÍTULO COMPLETO]",   // Título del artículo
  excerpt: "[EXTRACTO]",        // Descripción de 150-200 caracteres
  category: "[CATEGORÍA]",      // guias | tendencias | consejos | normativa
  image: "../img/[CARPETA]/[IMAGEN].webp",  // Ruta de imagen
  slug: "[nombre-del-archivo]"  // Sin .html
}
```

### 9.3 Cómo Agregar un Nuevo Artículo

**Paso 1:** Abrir `blog/index.html`

**Paso 2:** Localizar el array `blogArticles` (aprox. línea 107)

**Paso 3:** Agregar el nuevo artículo AL INICIO del array (para que aparezca primero):

```javascript
const blogArticles = [
  // ⬇️ AGREGAR NUEVOS ARTÍCULOS AQUÍ ⬇️
  {
    id: 17,  // Siguiente ID disponible
    title: "Título del Nuevo Artículo",
    excerpt: "Descripción breve del artículo que aparecerá en la tarjeta del blog. Máximo 200 caracteres.",
    category: "guias",  // O: tendencias, consejos, normativa
    image: "../img/img-condominios/imagen-articulo.webp",
    slug: "nombre-del-archivo-sin-extension"
  },
  // ⬆️ ARTÍCULOS EXISTENTES DEBAJO ⬆️
  {
    id: 1,
    title: "Sistemas de Seguridad Integral...",
    // ... resto de artículos existentes
  }
];
```

### 9.4 Categorías Disponibles

| Categoría | Valor en código | Badge color |
|-----------|-----------------|-------------|
| Guías Profesionales | `guias` | Verde |
| Tendencias | `tendencias` | Azul |
| Consejos | `consejos` | Naranja |
| Normativa | `normativa` | Gris |

### 9.5 Artículos Actualmente Registrados (16 artículos)

| ID | Slug | Categoría |
|----|------|-----------|
| 1 | sistemas-seguridad-condominios-polanco-santa-fe | guias |
| 2 | mejores-practicas-control-accesos-condominios-lujo | guias |
| 3 | proteccion-vigilancia-complejos-residenciales-premium | guias |
| 4 | integracion-tecnologia-cctv-condominios-lujo-cdmx | tendencias |
| 5 | como-elegir-empresa-seguridad-privada | consejos |
| 6 | certificaciones-guardias-seguridad-cdmx | guias |
| 7 | tendencias-tecnologia-seguridad | tendencias |
| 8 | seguridad-condominios-lujo-cdmx | guias |
| 9 | control-accesos-inteligente-condominios-cdmx | tendencias |
| 10 | amenazas-seguridad-condominios-alto-valor-mexico | consejos |
| 11 | tecnologia-cctv-vigilancia-remota-condominios | tendencias |
| 12 | costo-seguridad-privada-condominios-cdmx | consejos |
| 13 | tendencias-tecnologia-seguridad-2025 | tendencias |
| 14 | como-reducir-costos-seguridad-privada-sin-sacrificar-calidad | consejos |
| 15 | errores-comunes-contratar-seguridad-privada-como-evitarlos | guias |
| 16 | seguridad-fisica-vs-tecnologica-cual-necesita-tu-empresa | tendencias |

### 9.6 Actualizar Sitemap.xml

Después de agregar un artículo, también agregar al sitemap:

```xml
<url>
  <loc>https://seguridad-privada.com.mx/blog/articulos/[SLUG].html</loc>
  <lastmod>[FECHA-YYYY-MM-DD]</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### 9.7 Ejemplo Completo de Nuevo Artículo

**1. Crear archivo:** `blog/articulos/guia-seguridad-eventos-corporativos-2025.html`

**2. Agregar al array en blog/index.html:**
```javascript
{
  id: 17,
  title: "Guía de Seguridad para Eventos Corporativos 2025",
  excerpt: "Protocolos profesionales de seguridad para eventos empresariales: control de accesos, personal certificado, coordinación con autoridades y planes de emergencia.",
  category: "guias",
  image: "../img/img-eventos/guardias-seguridad-eventos-privados.webp",
  slug: "guia-seguridad-eventos-corporativos-2025"
}
```

**3. Agregar al sitemap.xml:**
```xml
<url>
  <loc>https://seguridad-privada.com.mx/blog/articulos/guia-seguridad-eventos-corporativos-2025.html</loc>
  <lastmod>2025-11-25</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## 📌 NOTAS FINALES

### Mantenimiento del Blog

1. **Actualizar blog/index.html** con el nuevo artículo (array blogArticles)
2. **Actualizar sitemap.xml** con la URL del nuevo artículo
3. **Revisar sidebar.html** mensualmente para actualizar artículos populares
4. **Verificar enlaces rotos** cada 3 meses

### Métricas de Éxito

- **Tiempo en página:** > 3 minutos
- **Tasa de rebote:** < 60%
- **Páginas por sesión:** > 2
- **Conversiones:** CTR en CTAs > 3%

### Contacto para Dudas

Para consultas sobre esta guía o generación de contenido:
- WhatsApp: 55 3025 5580
- Email: josecruz@originsecurity.mx

---

**Documento creado por:** Claude Code
**Versión:** 2.0
**Fecha:** Noviembre 2025
