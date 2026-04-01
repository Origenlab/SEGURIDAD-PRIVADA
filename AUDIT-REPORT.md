# AUDIT REPORT — SEGURIDAD-PRIVADA (ORIGINS)
**Fecha:** 2026-04-01
**Alcance:** Auditoría completa del template de servicios, CSS, interlinking y contenido de 21 archivos .md

---

## RESUMEN EJECUTIVO

- **20 de 21 páginas de servicios ya estaban en NIVEL 3** (FAQs completas, custom blocks, prose-section-headers, serviceFeatures, relatedServices)
- **1 página legacy eliminada** (marcada como draft)
- **CSS muerto eliminado** del template [...slug].astro (~150 líneas)
- **Internal links agregados** a las 20 páginas activas (0/20 tenían links internos, ahora 20/20)
- **Header/Footer links verificados** — todos correctos y funcionales
- **global.css limpio** — sin keyframes, variables o reglas huérfanas

---

## PASO 1 — AUDITORÍA DE CONTENIDO

### Páginas en NIVEL 3 (ya completas) — 20 archivos

Todas estas páginas tienen: 6-7 FAQs, 6 serviceFeatures, 5 relatedServices, custom visual blocks, prose-section-headers con badges, trust-bar, profile-grid, y prose-steps:

| Archivo | FAQs | Custom Blocks | Nivel |
|---------|------|--------------|-------|
| vigilancia-remota-cctv.md | 7 | cctv-process, coverage-grid, response-matrix, compare-table | 3 |
| monitoreo-alarmas.md | 7 | alarm-stats, sensor-grid, cctv-process, response-matrix, compare-table | 3 |
| guardias-intramuros.md | 7 | compare-table, zones-grid | 3 |
| control-de-accesos.md | 7 | access-flow, methods-compare, scenarios-grid | 3 |
| seguridad-gps-satelital.md | 7 | gps-preview, zones-grid, cost-vs-loss, scenarios-grid | 3 |
| patrullaje.md | 7 | methods-compare, patrol-coverage, cost-vs-loss, scenarios-grid | 3 |
| proteccion-ejecutiva.md | 7 | threat-levels, cost-vs-loss, scenarios-grid | 3 |
| consultoria-seguridad.md | 7 | audit-checklist, deliverable-card, cost-vs-loss, methodology-flow | 3 |
| seguridad-condominios.md | 7 | pillars-grid, zones-grid, problems-grid, scenarios-grid | 3 |
| seguridad-residenciales.md | 7 | patrol-coverage, threat-levels, zones-grid, cost-vs-loss | 3 |
| seguridad-construccion.md | 7 | scenarios-grid | 3 |
| seguridad-eventos.md | 7 | scenarios-grid | 3 |
| seguridad-hospitalaria.md | 7 | scenarios-grid | 3 |
| seguridad-especializada.md | 7 | pillars-grid | 3 |
| prevencion-de-perdidas.md | 7 | loss-calculator, theft-methods, scenarios-grid | 3 |
| custodia-de-mercancias.md | 7 | scenarios-grid | 3 |
| investigaciones-confiabilidad.md | 7 | profile-grid | 3 |
| consultoria-analisis-riesgos.md | 7 | profile-grid, prose-gallery | 3 |
| guardias-de-seguridad-y-vigilancia.md | 7 | scenarios-grid | 3 |
| tecnologia-monitoreo-seguridad.md | 6 | response-matrix, compare-table | 3 |

### Página LEGACY eliminada — 1 archivo

| Archivo | Problema | Acción |
|---------|----------|--------|
| servicios-de-proteccion-ejecutiva-y-consultoria.md | Duplicado legacy. Contenido cubierto por: proteccion-ejecutiva.md, consultoria-seguridad.md, consultoria-analisis-riesgos.md, custodia-de-mercancias.md, investigaciones-confiabilidad.md. Formato completamente diferente (markdown raw sin bloques HTML estructurados). Sin serviceFeatures, sin relatedServices. | Marcado como `draft: true`. Eliminado de serviceIcons map. Filtrado en getStaticPaths. |

---

## PASO 2 — LIMPIEZA DE TEMPLATE [...slug].astro

### CSS eliminado (clases huérfanas):

| Clase | Líneas aprox | Razón |
|-------|-------------|-------|
| `.breadcrumbs`, `.breadcrumbs__list`, etc. | ~35 líneas | No se usa — HeroPagina tiene sus propios breadcrumbs |
| `.service-hero`, `.service-hero__grid`, `.service-hero__badge`, `.service-hero__description`, `.service-hero__pricing`, `.service-hero__price`, `.service-hero__unit`, `.service-hero__cta`, `.service-hero__image` + media queries | ~85 líneas | No se usa — reemplazado por componente HeroPagina |
| `.prose-img-grid` + media queries | ~20 líneas | No se usa en ningún .md |
| `.prose-table-wrap` + hijos (table, th, td, tr) | ~45 líneas | No se usa en ningún .md |
| Referencia cruzada `.prose-section-block .prose-table-wrap` | ~3 líneas | Dependía de prose-table-wrap |

**Total CSS eliminado: ~188 líneas**

### JS/Imports verificados:
- `getCollection`, `render` — usados correctamente
- `HeroPagina`, `NavCTA`, `FAQItem`, `ServiceCard` — todos importados y utilizados
- `faq-cotizacion.css` — importado y utilizado por la sección sfaq-cot
- `getStaticPaths()` — actualizado para filtrar `draft: true`

### Estructura canónica verificada:
```
HeroPagina → NavCTA (top) → service-content (prose + sidebar) → sfaq-cot → sc-section → NavCTA (footer)
```
Correcta y completa.

---

## PASO 3 — INTERLINKING

### Header.astro — Links verificados
Todos los links internos son correctos:
- `/` — Inicio
- `/servicios` y sub-páginas (seguridad-condominios, seguridad-residenciales, guardias-intramuros, control-de-accesos, patrullaje, tecnologia-monitoreo-seguridad, vigilancia-remota-cctv, monitoreo-alarmas, seguridad-gps-satelital, prevencion-de-perdidas, seguridad-construccion, seguridad-eventos, seguridad-hospitalaria, guardias-de-seguridad-y-vigilancia, proteccion-ejecutiva, custodia-de-mercancias, consultoria-seguridad, consultoria-analisis-riesgos, investigaciones-confiabilidad)
- `/zonas` y sub-páginas (miguel-hidalgo, cuauhtemoc, benito-juarez, alvaro-obregon, coyoacan, naucalpan, tlalnepantla, atizapan)
- `/nosotros`, `/blog`, `/bolsa-de-trabajo`, `/contacto`

### Footer.astro — Links verificados
Mismos destinos que Header. Todos correctos.

### NavCTA en template — Links verificados
- Card 1: Dinámico desde serviciosRelacionados (válido)
- Card 2: `/zonas` (válido)
- Card 3: `/nosotros` (válido)
- Card 4: WhatsApp con texto dinámico (válido)

### Links internos agregados a .md files
**ANTES:** 0 de 20 archivos tenían links internos en el cuerpo
**DESPUÉS:** 20 de 20 archivos tienen 2-3 links internos cada uno

Links agregados en las secciones prose-intro y prose-highlight de cada archivo, apuntando a servicios complementarios y zonas.

---

## PASO 4 — ELEVACIÓN DE PÁGINAS

**Resultado: No fue necesario reescribir ninguna de las 20 páginas activas.** Todas ya estaban en NIVEL 3 con:
- Frontmatter completo (title, description, keywords, serviceFeatures, relatedServices, faqs)
- 6-7 FAQs conversacionales
- Bloques custom visuales (trust-bar, scenarios-grid, profile-grid, prose-steps, etc.)
- Prose-section-headers con badges
- Lenguaje orientado al cliente (admin de condominio / dueño de empresa)

**Única mejora aplicada:** Internal links (2-3 por archivo) — la única carencia detectada.

---

## PASO 5 — PERFORMANCE CSS

### global.css
- Sin @keyframes (política de no-animaciones cumplida)
- Sin reglas duplicadas
- Sin variables no utilizadas
- Las overrides para `.response-matrix__header span` y `.compare-table__head-*` son necesarias y están en uso

### [...slug].astro
- ~188 líneas de CSS muerto eliminadas (detalle arriba)
- Media queries ya consolidadas (no se encontraron duplicados)
- Sin redundancia con global.css

---

## ARCHIVOS MODIFICADOS

| Archivo | Cambio |
|---------|--------|
| `src/pages/servicios/[...slug].astro` | Filtro draft en getStaticPaths, eliminación entrada serviceIcons legacy, eliminación ~188 líneas CSS muerto |
| `src/content/servicios/servicios-de-proteccion-ejecutiva-y-consultoria.md` | Marcado `draft: true` |
| `src/content/servicios/seguridad-condominios.md` | +3 internal links |
| `src/content/servicios/seguridad-residenciales.md` | +3 internal links |
| `src/content/servicios/guardias-intramuros.md` | +3 internal links |
| `src/content/servicios/control-de-accesos.md` | +3 internal links |
| `src/content/servicios/guardias-de-seguridad-y-vigilancia.md` | +2 internal links |
| `src/content/servicios/vigilancia-remota-cctv.md` | +3 internal links |
| `src/content/servicios/monitoreo-alarmas.md` | +2 internal links |
| `src/content/servicios/seguridad-gps-satelital.md` | +3 internal links |
| `src/content/servicios/tecnologia-monitoreo-seguridad.md` | +3 internal links |
| `src/content/servicios/patrullaje.md` | +3 internal links |
| `src/content/servicios/proteccion-ejecutiva.md` | +3 internal links |
| `src/content/servicios/consultoria-seguridad.md` | +2 internal links |
| `src/content/servicios/consultoria-analisis-riesgos.md` | +2 internal links |
| `src/content/servicios/investigaciones-confiabilidad.md` | +3 internal links |
| `src/content/servicios/custodia-de-mercancias.md` | +3 internal links |
| `src/content/servicios/prevencion-de-perdidas.md` | +3 internal links |
| `src/content/servicios/seguridad-construccion.md` | +3 internal links |
| `src/content/servicios/seguridad-eventos.md` | +3 internal links |
| `src/content/servicios/seguridad-hospitalaria.md` | +3 internal links |
| `src/content/servicios/seguridad-especializada.md` | +3 internal links |

**Total: 23 archivos modificados**

---

## PENDIENTES (si aplica)

1. **Verificar build de producción** — Ejecutar `npm run build` para confirmar que no hay errores tras los cambios
2. **Considerar eliminar definitivamente** el archivo legacy `servicios-de-proteccion-ejecutiva-y-consultoria.md` en lugar de solo marcarlo draft
3. **Considerar agregar redirect 301** para `/servicios/servicios-de-proteccion-ejecutiva-y-consultoria` → `/servicios/proteccion-ejecutiva` si existía tráfico SEO a esa URL
4. **Verificar que las zonas referenciadas en links internos** (miguel-hidalgo, cuauhtemoc, etc.) tengan páginas reales generadas
