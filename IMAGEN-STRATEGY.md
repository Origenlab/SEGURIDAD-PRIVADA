# IMAGEN STRATEGY — SEGURIDAD PRIVADA ORIGINS
**Fecha:** 2026-04-01  
**Objetivo:** Elevar todas las secciones al mismo nivel fotográfico profesional, corregir nombres de archivos para SEO, crear galerías donde faltan, y reutilizar imágenes descontinuadas en el blog.

---

## 📊 ESTADO ACTUAL — INVENTARIO COMPLETO

| Carpeta | Imágenes | Estado | Prioridad |
|---|---|---|---|
| `img-vigilancia-remota/` | 24 | ✅ Completo y bien nombrado | Mantener |
| `img-monitoreo-de-alarmas/` | 21 | ✅ Completo y bien nombrado | Mantener |
| `img-guardias-intramuros/` | 20 | ✅ Completo y bien nombrado | Mantener |
| `patrullaje/` | 21 | ⚠️ 8 archivos con tildes en nombre | Renombrar |
| `control-de-accesos/` | 20 | ⚠️ 8 archivos con tildes/acentos | Renombrar |
| `img-rastreo-gps/` | 13 | ✅ Bien nombrado | Agregar 7 imágenes |
| `img-proteccion-ejecutiva/` | 12 | ⚠️ 1 archivo con tildes | Agregar 8 imágenes |
| `img-condominios/` | 18 | ✅ Bien nombrado | Mantener |
| `img-construccion/` | 20 | ✅ Bien nombrado | Mantener |
| `img-eventos/` | 21 | ✅ Bien nombrado | Mantener |
| `img-hospitalaria/` | 20 | ✅ Bien nombrado | Mantener |
| `prevencion-de-perdidas/` | 20 | ✅ Bien nombrado | Mantener |
| `custodia-de-mercancias/` | 21 | ⚠️ 1 archivo con tildes | Mantener |
| `investigaciones-de-confiabilidad/` | 14 | 🔴 4 genéricos (sector10-13) + tildes | Reemplazar genéricos |
| `consultoria-de-seguridad/` | 14 | 🔴 4 genéricos (sector10-13) + tildes | Reemplazar genéricos |
| `analisis-de-riesgos/` | 14 | 🔴 Tildes generalizadas | Renombrar todos |
| `guardias-intramuros/` | 21 | 🔴 DUPLICADO + tildes — no usado en ningún .md | → Blog |
| `guardias-de-seguridad/` | 4 | 🔴 DUPLICADO — no usado en ningún .md | → Blog |
| `img-guardias-de-seguridad/` | 4 | 🔴 DUPLICADO — no usado en ningún .md | → Blog |
| `tecnologia-monitoreo-seguridad/` | 3 | 🔴 CRÍTICO — solo 3 imágenes, página sin galería | +17 imágenes URGENTE |
| `seguridad-especializada/` | 4 | 🟡 Solo index cards — no necesita más | OK para index |
| `proteccion-y-consultoria/` | 5 | 🟡 Solo index cards | OK para index |
| `img-nosotros/` | 6 | 🟡 Suficiente para la página | OK |
| **`seguridad-residenciales/`** | **0** | 🔴 NO EXISTE — página sin imágenes propias | Crear carpeta + 15 imágenes |

---

## 🔴 PROBLEMA CRÍTICO: NOMBRES DE ARCHIVO CON TILDES

Los archivos con caracteres especiales (tildes, ñ, ü) **rompen las rutas en servidores Linux/Nginx** y **no son indexados correctamente por Google**.

### Archivos a renombrar (y sus rutas nuevas):

#### `control-de-accesos/`
```
control-acceso-biométrico.avif         → control-acceso-biometrico.avif
control-de-acceso-con-cámaras.avif     → control-de-acceso-con-camaras.avif
sistema-de-identificación-de-visitas.avif → sistema-de-identificacion-de-visitas.avif
supervisión-de-torniquetes-para-condominios.avif → supervision-de-torniquetes-para-condominios.avif
seguridad-empresarial-méxico.avif      → seguridad-empresarial-mexico.avif
gestión-de-visitas.avif                → gestion-de-visitas.avif
prevención-de-ingreso-no-autorizado.avif → prevencion-de-ingreso-no-autorizado.avif
validación-de-identidad.avif           → validacion-de-identidad.avif
```

#### `patrullaje/`
```
servicio-rondín-fraccionamientos.avif  → servicio-rondin-fraccionamientos.avif
vigilancia-móvil-empresas.avif         → vigilancia-movil-empresas.avif
seguridad-móvil-condominios.avif       → seguridad-movil-condominios.avif
vigilancia-móvil-privada.avif          → vigilancia-movil-privada.avif
seguridad-con-unidades-móviles.avif    → seguridad-con-unidades-moviles.avif
servicio-de-vigilancia-móvil.avif      → servicio-de-vigilancia-movil.avif
servicio-de-rondín-vehicular.avif      → servicio-de-rondin-vehicular.avif
```

#### `analisis-de-riesgos/` — RENOMBRAR TODOS
```
administración-de-riesgos.avif             → administracion-de-riesgos.avif
analisis-riesgos-metodologia-iso-31000.avif → (sin cambio — ya OK)
... (ver sección de renombrado masivo abajo)
```

#### `investigaciones-de-confiabilidad/` + `consultoria-de-seguridad/`
```
administración-de-riesgos.avif → administracion-de-riesgos-[seccion].avif
sector10.avif → REEMPLAZAR con imagen real (ver prompts más abajo)
sector11.avif → REEMPLAZAR con imagen real
sector12.avif → REEMPLAZAR con imagen real
sector13.avif → REEMPLAZAR con imagen real
```

---

## 📦 IMÁGENES PARA REUTILIZAR EN EL BLOG

Estas carpetas NO están referenciadas en ningún archivo .md de servicio activo. **No borrar — mover a uso editorial (blog):**

| Carpeta | Imágenes | Temas para blog |
|---|---|---|
| `guardias-intramuros/` (sin img-) | 21 | Artículos sobre guardias, vigilancia física, disuasión |
| `guardias-de-seguridad/` | 4 | Artículos sobre guardias de seguridad general |
| `img-guardias-de-seguridad/` | 4 | Artículos sobre guardias y servicios |
| `proteccion-y-consultoria/` | 5 | Artículos sobre consultoría y protección |
| `seguridad-especializada/` | 4 | Artículos sobre servicios especializados |

**Documentado en:** `src/content/blog/` — al crear artículos, priorizar estas imágenes.

---

## 🎯 NUEVAS IMÁGENES NECESARIAS — POR SECCIÓN

---

### 1. TECNOLOGÍA Y MONITOREO DE SEGURIDAD
**Carpeta:** `/public/img/tecnologia-monitoreo-seguridad/`  
**Estado actual:** Solo 3 imágenes (alertas-inteligentes.avif, rastreo-gps.avif, vigilancia-remota.avif)  
**Necesita:** 17 imágenes adicionales para la galería y las secciones prose-two-col  
**PRIORIDAD: CRÍTICA**

#### Imágenes necesarias y prompts:

**`tecnologia-monitoreo-cdmx-centro-operaciones.avif`**
```
Professional photograph of a modern security operations center (SOC) in Mexico City. 
Wide-angle view of a high-tech monitoring room with multiple large curved screens 
displaying real-time CCTV feeds, GPS tracking maps of Mexico City streets, and alarm 
dashboards. Certified security operators in dark uniforms seated at ergonomic 
workstations. Blue and white accent lighting. Atmosphere: professional, high-tech, 
24/7 operation. Shot on Canon R5 with 24mm lens, f/2.8, cinematic color grading. 
No watermarks, no text overlays.
```

**`sistema-cctv-ip-alta-resolucion-cdmx.avif`**
```
Professional product and environment photograph showing a modern IP security camera 
system installation in a Mexican corporate building lobby or condominium entrance. 
High-resolution dome cameras mounted on ceiling, displaying crisp 4K footage on a 
nearby monitor showing clear facial recognition detail. Clean, modern installation 
with concealed wiring. Neutral gray walls, polished concrete floor. Shot from below 
at 45-degree angle to show both camera and monitored area. Commercial photography 
style, sharp focus, natural daylight mixed with warm lobby lighting.
```

**`integracion-alarma-cctv-gps-panel-control.avif`**
```
Close-up professional photograph of an integrated security control panel showing 
three synchronized screens: one with live CCTV grid view, one with GPS vehicle 
tracking on a Mexico City map, and one with alarm system status dashboard. Dark 
themed UI with green "active" indicators. A certified technician's hands are visible 
adjusting settings. Shallow depth of field, warm studio lighting. High-end tech 
product photography aesthetic.
```

**`monitoreo-remoto-tablet-smartphone-seguridad.avif`**
```
Professional lifestyle photograph showing a Mexican business executive (man, 45-50 
years, business casual attire) reviewing live security camera feeds on a modern 
tablet. Background is a blurred modern Mexico City office with floor-to-ceiling 
windows and city views. The tablet screen shows a clean security app UI with 
multiple camera thumbnails and green status indicators. Natural daylight, shallow 
depth of field. Aspirational, professional mood.
```

**`central-monitoreo-noche-operadores-cdmx.avif`**
```
Cinematic night photography of a professional security monitoring center in Mexico 
City. Multiple operators working overnight shift, faces illuminated by screen glow. 
Large wall-mounted display showing Mexico City aerial map with vehicle tracking 
points, alarm zones highlighted in different colors. The room has a professional, 
military-grade aesthetic with branded workstations. Blue hour color palette. 
Shot with Sony A7 IV, 35mm f/1.8, available light photography.
```

**`instalacion-camaras-cctv-profesional-edificio.avif`**
```
Professional documentary photograph of two ORIGINS security technicians in branded 
navy uniforms installing a high-resolution PTZ security camera on the exterior wall 
of a modern Mexico City condominium building. One technician on a lift, the other 
managing cabling below. Clean, organized installation process. Background shows 
Mexico City residential neighborhood, clear blue sky. Action photography, sharp 
focus on technicians and equipment.
```

**`dashboard-monitoreo-multicanal-empresas.avif`**
```
Professional flat-lay or elevated photograph of a security dashboard on a large 
curved ultra-wide monitor showing multi-channel monitoring interface: 16 CCTV 
camera thumbnails, GPS fleet tracking, alarm status board, and incident log. 
Dark theme UI with professional typography and color-coded status indicators 
(green/amber/red). Shot from above at slight angle. Studio lighting, clean desk 
environment. No person visible — pure technology showcase.
```

**`camaras-vision-nocturna-perimetro-empresa.avif`**
```
Professional after-dark photograph showing a corporate building perimeter with 
clearly visible mounted security cameras capturing crisp infrared night vision 
footage. Small monitor inset in corner shows the clean black-and-white IR feed 
with excellent detail. Industrial/corporate setting, perimeter fence visible. 
Atmospheric night photography with security lighting. No people, focus on 
technology and coverage capability.
```

**`verificacion-video-alarma-tiempo-real.avif`**
```
Split-screen professional photograph: left side shows an operator at a security 
console receiving an alarm alert on screen; right side shows the corresponding 
live camera feed of the triggered zone (a parking lot or building entrance). 
The operator's body language conveys calm, professional response. Blue-tinted 
monitoring room lighting. Documentary photography style.
```

**`protocolo-respuesta-incidente-monitoreo.avif`**
```
Professional environmental portrait photograph of a female certified security 
operator in Mexico, wearing a headset and ORIGINS uniform, speaking calmly into 
her radio while simultaneously viewing an incident on multiple screens. The screens 
show camera feeds and alarm data. Professional, competent, reassuring expression. 
Modern monitoring center background. Editorial photography style.
```

---

### 2. INVESTIGACIONES DE CONFIABILIDAD
**Carpeta:** `/public/img/investigaciones-de-confiabilidad/`  
**Estado actual:** 14 imágenes — 4 son genéricas (sector10-13), 1 tiene tildes  
**Necesita:** Reemplazar las 4 genéricas + agregar 6 más

**`investigacion-confiabilidad-estudio-socioeconomico.avif`** *(reemplaza sector10.avif)*
```
Professional documentary photograph of a ORIGINS investigator conducting an 
in-person socioeconomic study visit. Investigator (man, 35-45, professional attire 
with ID badge) speaking with a residential building doorman or neighbor in a 
middle-class Mexico City neighborhood. Clipboard with forms visible. Natural 
afternoon lighting, residential street background. Candid, professional, 
trust-building atmosphere.
```

**`poligrafo-examen-confianza-certificado.avif`** *(reemplaza sector11.avif)*
```
Professional controlled-environment photograph of a polygraph examination room. 
Clean, neutral-colored room with a professional polygraph machine (Stoelting or 
similar brand) connected to a seated subject (back to camera for privacy). 
A certified examiner visible in background reviewing data on laptop. 
Clinical, professional, confidential atmosphere. Studio lighting.
```

**`analisis-historial-crediticio-financiero.avif`** *(reemplaza sector12.avif)*
```
Professional photograph showing a security investigator's workstation with multiple 
monitors displaying financial history analysis, credit bureau reports, and database 
records (UI clearly fictional/blurred for privacy). Papers with official-looking 
documents on desk. Reading glasses, pen taking notes. Organized, professional 
workspace. Shallow depth of field. Warm office lighting.
```

**`informe-confidencial-investigacion-ejecutivo.avif`** *(reemplaza sector13.avif)*
```
Professional flat-lay photograph of a confidential investigation report delivered 
in a sealed branded envelope with ORIGINS logo. Alongside: an official-looking 
printed report with redacted sections visible, a USB drive, and a formal letter. 
Dark wood desk surface. Dramatic side lighting creating shadows. The atmosphere 
conveys discretion, professionalism, and confidentiality.
```

---

### 3. ANÁLISIS DE RIESGOS
**Carpeta:** `/public/img/analisis-de-riesgos/`  
**Estado actual:** 14 imágenes con tildes generalizadas — contenido bueno, solo renombrar  
**Acción:** Renombrar todos los archivos (no generar nuevas)

**Script de renombrado — ejecutar en terminal:**
```bash
cd /Users/carsolio/Desktop/PAGINAS-HTML/SEGURIDAD-PRIVADA/public/img/analisis-de-riesgos
mv "administración-de-riesgos.avif" "administracion-de-riesgos-corporativa.avif"
```
*(Los demás archivos de esta carpeta ya tienen nombres correctos sin tildes)*

**3 imágenes adicionales recomendadas para galería:**

**`reunion-directiva-analisis-riesgos-corporativo.avif`**
```
Professional boardroom photograph in a modern Mexico City corporate office. 
Security consultant presenting a risk analysis report on a large screen to 
3-4 company executives (men and women, business attire). The presentation shows 
a risk matrix with probability/impact axes, highlighted vulnerability zones, 
and a priority action roadmap. Warm boardroom lighting, city views through windows. 
Corporate photography style.
```

**`inspeccion-fisica-instalaciones-vulnerabilidades.avif`**
```
Professional documentary photograph of a security consultant conducting a physical 
vulnerability inspection in a Mexican corporate building. Consultant with clipboard 
and tablet examining access control points, checking door locks, and noting 
observations. Background shows an office corridor or warehouse area. 
Professional, methodical, expert demeanor. Natural office lighting.
```

**`matriz-riesgos-plan-mitigacion-empresarial.avif`**
```
Professional overhead flat-lay photograph showing a physical risk management matrix 
laid out on a conference table: printed risk assessment documents, color-coded 
sticky notes in red/orange/yellow/green, markers, a tablet showing digital risk 
dashboard. Multiple hands visible around the table suggesting team collaboration. 
Corporate photography, natural office light from above.
```

---

### 4. CONSULTORÍA DE SEGURIDAD
**Carpeta:** `/public/img/consultoria-de-seguridad/`  
**Estado actual:** 14 imágenes — 4 genéricas (sector10-13) + tildes  
**Necesita:** Reemplazar 4 genéricas

**`consultoria-diagnostico-seguridad-pymes-cdmx.avif`** *(reemplaza sector10.avif)*
```
Professional photograph of a ORIGINS security consultant meeting with a Mexican 
SME business owner in their office or showroom. Consultant presenting printed 
security assessment findings on a tablet, owner engaged and attentive. 
Warm, trust-based atmosphere. Modern Mexican office aesthetic. 
Editorial photography, natural light.
```

**`auditoria-protocolos-seguridad-empresa.avif`** *(reemplaza sector11.avif)*
```
Professional documentary photograph showing a security audit in progress at a 
Mexican company. Consultant reviewing posted emergency procedures, checking 
extinguisher placement, and photographing access points with a tablet. 
Background: corporate corridor or warehouse. Professional, systematic, expert 
appearance. Documentary photography style.
```

**`capacitacion-brigada-emergencias-personal.avif`** *(reemplaza sector12.avif)*
```
Professional photograph of a security consultant conducting an emergency brigade 
training session for 8-10 company employees in a Mexican corporate meeting room. 
Consultant at whiteboard with emergency protocol diagram. Participants engaged, 
taking notes. Branded training materials on table. Corporate training photography, 
warm lighting, authentic engagement.
```

**`plan-seguridad-corporativo-presentacion.avif`** *(reemplaza sector13.avif)*
```
Professional photograph showing final delivery of a comprehensive security plan: 
a professional printed and bound security manual with ORIGINS branding, alongside 
a USB with digital version, on a clean boardroom table. Executive hand accepting 
the document. Out-of-focus boardroom and consultant in background. 
Product delivery photography, studio quality.
```

---

### 5. SEGURIDAD RESIDENCIAL / RESIDENCIALES
**Carpeta:** `/public/img/seguridad-residenciales/` ← **CREAR ESTA CARPETA**  
**Estado actual:** NO EXISTE — la página usa imágenes de otras carpetas  
**Necesita:** 15 imágenes propias

**`guardia-seguridad-residencial-cdmx.avif`**
```
Professional photograph of an ORIGINS security guard in full uniform standing 
at the entrance of a premium residential building in Mexico City. Polanco or 
Santa Fe architectural style. Guard with professional posture, ORIGINS badge 
visible, walkie-talkie in hand. Daytime, clear sky. The image conveys: premium 
residential security, professional presence, welcoming authority. 
Corporate portrait photography style.
```

**`control-acceso-residencial-premium-cdmx.avif`**
```
Professional photograph of a modern residential building guard booth/gatehouse 
in Mexico City. Guard reviewing visitor ID and vehicle at a boom barrier. 
Clean, modern caseta design with digital registration tablet visible. 
Branded signage visible. Warm afternoon light. The image communicates: 
organized, professional, zero unauthorized entry. Architectural + 
corporate photography.
```

**`rondin-nocturno-residencial-privado.avif`**
```
Atmospheric professional photograph of a security guard performing a night 
patrol rounds in a Mexican residential compound. Guard with flashlight walking 
along well-lit pathways between residential towers. Security lighting creating 
safe, visible environment. The image conveys: active nighttime protection, 
visible deterrence, professional vigilance. Night photography with warm 
security lighting.
```

**`monitoreo-cctv-residencial-caseta-guardia.avif`**
```
Professional photograph inside a residential building guard station showing 
a security officer monitoring multiple CCTV screens displaying building 
entrances, parking levels, and common areas of a Mexico City residential 
complex. Modern monitoring setup, ORIGINS branded elements. 
Technology + human oversight combination. Available light photography.
```

**`vecinos-seguridad-condominio-reunión.avif`**
```
Professional photograph of an ORIGINS security supervisor presenting a monthly 
security report to a condominium residents committee meeting. 5-6 residents 
(diverse ages, professional Mexican demographics) reviewing printed report. 
Modern condominium meeting room, branded presentation materials. 
The image conveys: transparency, communication, resident involvement. 
Corporate meeting photography.
```

**`control-vehicular-acceso-condominio-barrera.avif`**
```
Aerial or elevated professional photograph showing a modern vehicle access 
control system at a Mexico City residential building entrance. Boom barrier 
in raised position, camera visible for license plate reading, guard verifying 
vehicle. Clean architectural design. The image shows efficiency and 
technology integration. Architectural photography, golden hour lighting.
```

**`guardias-residencial-protocolo-visitas.avif`**
```
Professional photograph showing the visitor management process at a residential 
building in Mexico City. Guard at front desk using a digital tablet to register 
a visitor, taking their photo, and printing a visitor badge. Clean lobby design. 
The visitor appears in business casual attire. Process efficiency and 
professionalism are the key message. Corporate/lifestyle photography.
```

**`seguridad-perimetral-residencial-noche.avif`**
```
Professional nighttime architectural photograph of a premium Mexico City 
residential building perimeter with clearly visible security infrastructure: 
perimeter lighting, CCTV cameras on poles, security guard post, and boom 
barrier gate. The building and grounds look secure, safe, and attractive. 
The image balances security with residential appeal. Night photography 
with professional lighting.
```

**`app-vigilancia-residencial-smartphone.avif`**
```
Professional lifestyle photograph showing a resident in their apartment 
(modern Mexico City high-rise, visible through windows) checking live CCTV 
feeds of their building's entrance and parking on a smartphone app. 
Clean, modern interior, natural light. The image communicates: remote 
access, peace of mind, technology at your fingertips. Lifestyle + 
tech photography.
```

**`supervision-seguridad-residencial-supervisor.avif`**
```
Professional editorial photograph of an ORIGINS security supervisor conducting 
a scheduled inspection visit at a residential building. Supervisor with tablet 
reviewing guards' log books and walking the property with the head guard. 
Professional uniforms, documentation visible. The image conveys: oversight, 
quality control, professional standards. Documentary photography.
```

---

### 6. PROTECCIÓN EJECUTIVA
**Carpeta:** `/public/img/img-proteccion-ejecutiva/`  
**Estado actual:** 12 imágenes — good base, needs 8 more for gallery  
**Acción:** Agregar 8 imágenes

**`escolta-discreta-vip-cdmx.avif`**
```
Professional photograph of a discreet executive protection detail in Mexico City. 
A business executive (man, 50s, conservative suit) walking through a modern 
building lobby accompanied by two close protection officers in business attire 
(dark suits, coiled earpieces barely visible). The escorts maintain professional 
proximity without drawing attention. The image conveys: discretion, professionalism, 
invisible protection. Cinematic photography style.
```

**`traslado-seguro-vehiculo-ejecutivo.avif`**
```
Professional exterior photograph showing a security motorcade transition: 
a black armored SUV (Mercedes GLS or similar) with tinted windows parked 
at a secure Mexico City building entrance. A protection officer in black suit 
opens the rear door professionally as an executive approaches. 
Urban Mexico City background, evening light. High-end executive security photography.
```

**`analisis-previo-rutas-seguras-cdmx.avif`**
```
Professional photograph of an executive protection specialist studying a Mexico 
City map on a large tablet/computer, planning secure transportation routes. 
Multiple browser tabs with traffic, satellite view, and risk zones visible. 
Professional, focused expression. Modern operations room background. 
The image communicates: intelligence-led protection, advance planning, 
professionalism. Editorial photography.
```

**`protocolo-emergencia-evacuacion-ejecutivo.avif`**
```
Professional photograph showing an emergency evacuation drill in a Mexico City 
corporate environment. Executive protection officer guiding a principal quickly 
through a corridor toward a secure exit, hand on shoulder directing movement. 
Serious, efficient, professional execution. The image conveys: practiced 
protocols, rapid response, trained operators. Documentary photography.
```

---

### 7. RASTREO GPS SATELITAL
**Carpeta:** `/public/img/img-rastreo-gps/`  
**Estado actual:** 13 imágenes — necesita 7 más para galería completa

**`instalacion-dispositivo-gps-vehiculo-profesional.avif`**
```
Professional close-up photograph of a certified ORIGINS technician installing 
a GPS tracking device in a vehicle's OBD port or under dashboard area. 
Clean installation, professional tools visible. The device is compact, 
modern, branded. Workshop or fleet yard background. The image communicates: 
professional installation, certified equipment, discreet placement. 
Product/corporate photography.
```

**`flotilla-vehiculos-empresa-rastreo-gps.avif`**
```
Professional aerial or wide-angle photograph of a corporate vehicle fleet 
(10-15 branded delivery vans or cargo trucks) parked in a Mexico City 
distribution center yard. All vehicles shown with GPS antenna visible. 
The image communicates: fleet management scale, GPS coverage, 
operational efficiency. Aerial/drone photography, daytime.
```

**`alerta-geocerca-movil-gps-notificacion.avif`**
```
Professional lifestyle photograph showing a fleet manager receiving a real-time 
GPS geofence alert on their smartphone. The phone screen shows a Mexico City 
map with a red alert zone and vehicle dot outside the permitted area. 
Manager at their office desk, taking quick action. Natural office lighting. 
The image communicates: immediate alerts, proactive monitoring, quick response.
```

**`recuperacion-vehiculo-robado-gps.avif`**
```
Professional documentary-style photograph showing a fleet coordinator working 
with police officers in a Mexico City Police precinct, displaying GPS tracking 
data on a laptop that located a stolen vehicle. Map showing recovery location. 
The image communicates: GPS = recovery, real-world effectiveness, 
police coordination. Documentary photography, serious professional tone.
```

---

## 🔧 INSTRUCCIONES TÉCNICAS DE GENERACIÓN

### Especificaciones para todas las imágenes:
- **Formato final:** AVIF (convertir de PNG/JPG generado con `cwebp` o `squoosh`)
- **Dimensiones:** 640×480px (ratio 4:3) para todas las imágenes de servicio
- **Peso objetivo:** < 80KB por imagen en AVIF
- **Calidad AVIF:** 75-85% (balance calidad/peso)

### Conversión a AVIF (comando por imagen):
```bash
# Instalar si no tienes: brew install imagemagick
magick input.jpg -resize 640x480^ -gravity center -extent 640x480 -quality 80 output.avif

# O con ffmpeg:
ffmpeg -i input.jpg -vf scale=640:480:force_original_aspect_ratio=increase,crop=640:480 -c:v libavc1 -crf 30 output.avif
```

### Conversión masiva de una carpeta:
```bash
# Convertir todos los JPG/PNG de una carpeta a AVIF
for f in *.jpg *.png; do
  magick "$f" -resize 640x480^ -gravity center -extent 640x480 -quality 80 "${f%.*}.avif"
done
```

### Reglas de naming SEO (OBLIGATORIO):
✅ Todo en minúsculas  
✅ Solo guiones medios (-)  
✅ Sin espacios, sin tildes, sin caracteres especiales  
✅ Palabras clave del servicio + location cuando aplique  
✅ Descriptivo pero conciso (máx. 60 caracteres)  

```
✅ guardias-intramuros-corporativo-cdmx.avif
✅ control-acceso-biometrico-condominio.avif
✅ monitoreo-cctv-24-7-operadores-certificados.avif
❌ Guardias Intramuros.avif
❌ administración-de-riesgos.avif
❌ sector10.avif
```

---

## 🏗️ PLAN DE IMPLEMENTACIÓN

### FASE 1 — Inmediata (sin generar nada nuevo)
- [ ] Renombrar archivos con tildes en `control-de-accesos/`, `patrullaje/`, `analisis-de-riesgos/`
- [ ] Actualizar referencias en los .md correspondientes tras el renombrado
- [ ] Crear carpeta `/public/img/seguridad-residenciales/`

### FASE 2 — Generación de imágenes prioritarias
- [ ] **tecnologia-monitoreo-seguridad/** — 10 imágenes (crítico — la página no tiene galería)
- [ ] **seguridad-residenciales/** — 10 imágenes (carpeta no existe)
- [ ] **investigaciones-de-confiabilidad/** — 4 imágenes (reemplazar genéricas)
- [ ] **consultoria-de-seguridad/** — 4 imágenes (reemplazar genéricas)

### FASE 3 — Completar galerías
- [ ] **analisis-de-riesgos/** — 3 imágenes adicionales
- [ ] **img-proteccion-ejecutiva/** — 4 imágenes adicionales
- [ ] **img-rastreo-gps/** — 4 imágenes adicionales

### FASE 4 — Galerías de blog
- [ ] Catalogar las imágenes de `guardias-intramuros/`, `guardias-de-seguridad/`, etc. como assets del blog
- [ ] Crear índice de imágenes disponibles para artículos

---

## 📝 CÓMO USAR LOS PROMPTS

### Con Midjourney v6 / DALL-E 3 / Flux:
1. Copia el prompt exacto de cada imagen
2. Genera en formato 4:3 (1280×960px mínimo para escalar a 640×480)
3. Selecciona la toma más fotorrealista y profesional
4. Convierte a AVIF con el comando indicado
5. Guarda con el nombre de archivo exacto especificado

### Con Gemini / Firefly:
- Agregar al final del prompt: `"--ar 4:3 --style photorealistic --no illustration cartoon"`

### Con Adobe Firefly (recomendado para Mexico City context):
- Activa "Generative Match" con fotos de referencia de CDMX
- Usa el estilo "Photography" no "Illustration"

---

## ✅ CHECKLIST DE CALIDAD POR IMAGEN

Antes de publicar cada imagen nueva, verificar:
- [ ] Dimensiones exactas: 640×480px
- [ ] Peso: < 80KB en AVIF
- [ ] Nombre de archivo: sin tildes, sin espacios, todo minúsculas
- [ ] Contenido: no muestra marcas de terceros visibles sin permiso
- [ ] Personas: si hay personas, no son reconocibles (blur/angle) O son actores/modelos
- [ ] Context: imagen coherente con el servicio (no imágenes genéricas de stock sin relevancia)
- [ ] Alt text definido en el .md correspondiente
- [ ] Loading: `loading="lazy"` excepto la primera imagen de cada página (que debe ser `loading="eager"`)

---

*Documento generado por Jacinto — Agente SEO & Marketing OrigenLab*  
*Proyecto: SEGURIDAD-PRIVADA / ORIGINS*
