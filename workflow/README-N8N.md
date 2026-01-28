# Workflow N8N - Blog SEGURIDAD PRIVADA

## Estructura del Proyecto

```
seguridad-privada/
├── blog/
│   ├── index.html              # Indice del blog
│   ├── sidebar.html            # Sidebar compartido
│   └── articulos/              # Articulos generados
│       ├── slug-articulo.html
│       └── ...
├── workflow/
│   ├── TEMPLATE-ARTICULO-SEGURIDAD-PRIVADA.html
│   ├── workflow-SEGURIDAD-PRIVADA-N8N.json
│   └── README-N8N.md
└── img/
    └── blog/                   # Imagenes para articulos
```

## Configuracion del Workflow

### Importar en N8N
1. Ir a N8N > Settings > Import from File
2. Seleccionar `workflow-SEGURIDAD-PRIVADA-N8N.json`
3. Actualizar credenciales:
   - **OpenAI API Key**: Nodo "ChatGPT API" > Authorization header
   - **GitHub Token**: Nodos "GitHub: Obtener Template" y "GitHub: Subir Articulo"
   - **Telegram Bot Token**: Nodo "Telegram Notificacion" > URL

### Credenciales Requeridas

| Servicio | Variable | Ubicacion |
|----------|----------|-----------|
| OpenAI | API Key | ChatGPT API > Headers > Authorization |
| GitHub | Personal Access Token | GitHub nodes > Headers > Authorization |
| Telegram | Bot Token + Chat ID | Telegram Notificacion > URL y jsonBody |

## Variables del Template

El template usa estas variables que N8N reemplaza automaticamente:

| Variable | Descripcion | Ejemplo |
|----------|-------------|---------|
| `{{TITULO}}` | Titulo H1 del articulo | "Guardias para Condominios CDMX" |
| `{{SLUG}}` | URL amigable sin acentos | "guardias-condominios-cdmx" |
| `{{META_DESCRIPTION}}` | Descripcion SEO (150-160 chars) | "Descubre los mejores..." |
| `{{META_KEYWORDS}}` | Keywords separadas por coma | "guardias, seguridad, cdmx" |
| `{{CATEGORIA}}` | Nombre de categoria | "Seguridad Residencial" |
| `{{CATEGORIA_SLUG}}` | Slug de categoria | "residencial" |
| `{{IMAGEN_PRINCIPAL}}` | Nombre de imagen (sin ruta) | "guardias-elite.avif" |
| `{{IMAGEN_ALT}}` | Alt de imagen principal | "Guardias de seguridad" |
| `{{BREADCRUMB_TEXT}}` | Texto corto para breadcrumb | "Guardias Condominios" |
| `{{TIEMPO_LECTURA}}` | Tiempo estimado | "10 min lectura" |
| `{{CONTENIDO}}` | HTML completo del articulo | `<h2>...</h2><p>...</p>` |
| `{{FAQ_SCHEMA}}` | JSON-LD de FAQs | `{"@type":"FAQPage"...}` |
| `{{TAGS_HTML}}` | HTML de tags | `<a class="tag">...</a>` |
| `{{FECHA_ISO}}` | Fecha ISO 8601 | "2026-01-28" |

## Flujo del Workflow

```
Trigger (Manual/Programado)
    ↓
Selector Inteligente (elige tema, imagen, zonas)
    ↓
Constructor Prompt (genera instrucciones para GPT)
    ↓
Preparar Request (formatea JSON para API)
    ↓
ChatGPT API (genera contenido)
    ↓
Validar Respuesta (parsea JSON, genera slug, FAQ schema)
    ↓
GitHub: Obtener Template (descarga plantilla)
    ↓
Construir HTML (reemplaza variables)
    ↓
GitHub: Subir Articulo (crea archivo en repo)
    ↓
Telegram Notificacion (notifica exito)
```

## URLs Limpias

El sitio usa URLs limpias (sin .html). Cloudflare Pages maneja los redirects.

**Estructura de URLs:**
- Articulos: `seguridad-privada.com.mx/blog/articulos/slug`
- Servicios: `seguridad-privada.com.mx/nombre-servicio`
- Blog index: `seguridad-privada.com.mx/blog/`

**Archivo de redirects:** `_redirects`
```
/blog/articulos/:slug  /blog/articulos/:slug.html  200
/:page  /:page.html  200
```

## Topics Disponibles

El selector inteligente rota entre estos temas:

1. **guardias-condominios** - Seguridad para condominios de lujo
2. **seguridad-corporativa** - Proteccion para empresas
3. **cctv-monitoreo** - Videovigilancia y monitoreo
4. **control-accesos** - Sistemas de control de acceso
5. **proteccion-ejecutiva** - Escoltas y guardaespaldas
6. **seguridad-construccion** - Proteccion de obras
7. **seguridad-eventos** - Seguridad para eventos
8. **monitoreo-alarmas** - Central de monitoreo 24/7
9. **prevencion-perdidas** - Seguridad para retail
10. **consultoria-seguridad** - Analisis de riesgos

## Imagenes por Categoria

Las imagenes se seleccionan automaticamente segun la categoria:

| Categoria | Imagenes |
|-----------|----------|
| guias | guardias-intramuros-elite, consultoria-de-seguridad |
| tendencias | tecnologia-monitoreo, monitoreo-camaras |
| consejos | consultoria-de-seguridad, guardia-lobby |
| corporativo | guardia-corporativo, guardias-certificados-construccion |
| residencial | guardias-intramuros-elite, control-accesos-biometrico |

## Estructura HTML del Contenido

El contenido generado debe seguir esta estructura:

```html
<!-- Tabla de contenidos -->
<div class="blog-article-toc-inline">
    <h4>En Este Articulo</h4>
    <ul><li><a href="#seccion">Titulo</a></li></ul>
</div>

<!-- Parrafo introductorio -->
<p class="lead">[Introduccion]</p>

<!-- Secciones -->
<h2 id="seccion">[Titulo H2]</h2>
<p>[Contenido]</p>

<!-- Modulos de interes -->
<div class="interest-module stat-module">
    <div class="stat-number">[Dato]</div>
    <div class="stat-content">
        <h4>[Titulo]</h4>
        <p>[Texto]</p>
    </div>
</div>

<div class="interest-module tip-module">
    <div class="tip-icon">i</div>
    <div class="tip-content">
        <h4>Consejo</h4>
        <p>[Texto]</p>
    </div>
</div>

<!-- CTA inline -->
<div class="cta-inline">
    <h3>Solicita tu Evaluacion Gratuita</h3>
    <p>[Texto]</p>
    <a href="https://wa.me/525530255580" class="btn">Contactar</a>
</div>

<!-- FAQs -->
<section class="faq-section" id="faq">
    <h2>Preguntas Frecuentes</h2>
    <div class="faq-item">
        <button class="faq-question">
            <span>[Pregunta]</span>
            <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer"><p>[Respuesta]</p></div>
    </div>
</section>
```

## Mantenimiento

### Actualizar Articulos Destacados
Editar `TEMPLATE-ARTICULO-SEGURIDAD-PRIVADA.html` seccion `.sidebar-featured`

### Agregar Nuevo Tema
1. Editar `workflow-SEGURIDAD-PRIVADA-N8N.json`
2. Agregar objeto en `CONFIG.topics[]`
3. Asegurar imagenes existen en categoria correspondiente

### Cambiar Frecuencia de Publicacion
Modificar nodo "Trigger Programado" > `daysInterval`

## Contacto

**ORIGINS PRIVATE SECURITY**
- Tel: 55 3025 5580
- WhatsApp: wa.me/525530255580
- Email: contacto@seguridad-privada.com.mx
