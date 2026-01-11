# WORKFLOW DE GENERACION DE ARTICULOS
## ORIGINS PRIVATE SECURITY

Sistema automatizado para generar articulos de blog optimizados para SEO utilizando N8N + ChatGPT/Claude + GitHub.

---

## ARQUITECTURA DEL SISTEMA

```
┌─────────────────────────────────────────────────────────────────────┐
│                        FLUJO DEL WORKFLOW                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐        │
│   │  INPUT  │───▶│   AI    │───▶│ PROCESS │───▶│ GITHUB  │        │
│   │ Keyword │    │ Generate│    │  JSON   │    │  Upload │        │
│   └─────────┘    └─────────┘    └─────────┘    └─────────┘        │
│                                                                     │
│   1. Usuario      2. ChatGPT/    3. Parsear     4. Crear          │
│      ingresa         Claude         JSON y        archivo y       │
│      tema            genera         reemplazar    subir a         │
│                      contenido      variables     GitHub          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## ARCHIVOS DEL SISTEMA

| Archivo | Proposito |
|---------|-----------|
| `TEMPLATE-ARTICULO-SEGURIDAD-PRIVADA.html` | Template HTML con variables para reemplazo |
| `PROMPT-ARTICULOS-SEGURIDAD-PRIVADA.md` | Prompt completo para la IA |
| `CONFIGURACION-SEGURIDAD-PRIVADA.md` | Datos del sitio, servicios, keywords |
| `README-WORKFLOW-SEGURIDAD-PRIVADA.md` | Este archivo - documentacion |
| `workflow-SEGURIDAD-PRIVADA.json` | Workflow exportado de N8N |

---

## CONFIGURACION EN N8N

### Paso 1: Nodo Trigger (Manual o Webhook)

```javascript
// Input esperado
{
    "tema": "Como proteger una obra en construccion"
}
```

### Paso 2: Nodo Set - Preparar Prompt

```javascript
// Concatenar el prompt con el tema
const prompt = $node["PROMPT_BASE"].json.content;
const tema = $json.tema;

return {
    prompt_completo: prompt.replace("[INSERTAR TEMA/KEYWORD AQUI]", tema)
};
```

### Paso 3: Nodo OpenAI/Anthropic

**Configuracion OpenAI:**
- Model: `gpt-4-turbo` o `gpt-4o`
- Temperature: 0.7
- Max tokens: 8000
- Response format: JSON

**Configuracion Anthropic (Claude):**
- Model: `claude-3-opus` o `claude-3-sonnet`
- Temperature: 0.7
- Max tokens: 8000

### Paso 4: Nodo Code - Procesar Respuesta

```javascript
// Parsear la respuesta JSON de la IA
const aiResponse = JSON.parse($json.response);

// Generar FAQ Schema
function generarFAQSchema(faqArray) {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqArray.map(faq => ({
            "@type": "Question",
            "name": faq.pregunta,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.respuesta
            }
        }))
    }, null, 2);
}

// Generar Tags HTML
function generarTagsHTML(tagsArray) {
    return tagsArray.map(tag =>
        `<a href="#" class="tag">${tag}</a>`
    ).join('\n            ');
}

// Generar Fecha ISO
const fechaISO = new Date().toISOString().split('T')[0];

return {
    titulo: aiResponse.titulo,
    slug: aiResponse.slug,
    metaDescription: aiResponse.metaDescription,
    metaKeywords: aiResponse.metaKeywords,
    breadcrumbText: aiResponse.breadcrumbText,
    categoria: aiResponse.categoria,
    categoriaSlug: aiResponse.categoriaSlug,
    tiempoLectura: aiResponse.tiempoLectura,
    imagenPrincipal: aiResponse.imagenPrincipal,
    imagenAlt: aiResponse.imagenAlt,
    contenidoHTML: aiResponse.contenidoHTML,
    faqSchema: generarFAQSchema(aiResponse.faqSchema),
    tagsHTML: generarTagsHTML(aiResponse.tags),
    fechaISO: fechaISO,
    tags: aiResponse.tags,
    articulosRelacionados: aiResponse.articulosRelacionados
};
```

### Paso 5: Nodo HTTP Request - Obtener Template

```
GET https://raw.githubusercontent.com/tu-usuario/seguridad-privada/main/workflow/TEMPLATE-ARTICULO-SEGURIDAD-PRIVADA.html
```

### Paso 6: Nodo Code - Reemplazar Variables

```javascript
let template = $node["HTTP_Template"].json.body;

// Reemplazos
const replacements = {
    "{{TITULO}}": $json.titulo,
    "{{SLUG}}": $json.slug,
    "{{META_DESCRIPTION}}": $json.metaDescription,
    "{{META_KEYWORDS}}": $json.metaKeywords,
    "{{BREADCRUMB_TEXT}}": $json.breadcrumbText,
    "{{CATEGORIA}}": $json.categoria,
    "{{CATEGORIA_SLUG}}": $json.categoriaSlug,
    "{{TIEMPO_LECTURA}}": $json.tiempoLectura,
    "{{IMAGEN_PRINCIPAL}}": $json.imagenPrincipal,
    "{{IMAGEN_ALT}}": $json.imagenAlt,
    "{{CONTENIDO}}": $json.contenidoHTML,
    "{{FAQ_SCHEMA}}": $json.faqSchema,
    "{{TAGS_HTML}}": $json.tagsHTML,
    "{{FECHA_ISO}}": $json.fechaISO
};

for (const [key, value] of Object.entries(replacements)) {
    template = template.split(key).join(value);
}

return {
    html_final: template,
    slug: $json.slug,
    titulo: $json.titulo
};
```

### Paso 7: Nodo GitHub - Subir Archivo

**Configuracion:**
- Resource: File
- Operation: Create
- Repository Owner: `tu-usuario`
- Repository Name: `seguridad-privada`
- File Path: `blog/{{$json.slug}}.html`
- File Content: `{{$json.html_final}}`
- Commit Message: `Add article: {{$json.titulo}}`
- Branch: `main`

---

## VARIABLES DEL TEMPLATE

| Variable | Descripcion | Ejemplo |
|----------|-------------|---------|
| `{{TITULO}}` | Titulo H1 y title tag | "Seguridad para Obras en Construccion: Guia Completa" |
| `{{SLUG}}` | URL amigable | "seguridad-obras-construccion-guia-completa" |
| `{{META_DESCRIPTION}}` | Meta description SEO | "Protege tu obra en construccion contra robos..." |
| `{{META_KEYWORDS}}` | Keywords separadas por coma | "seguridad construccion, guardias obra..." |
| `{{BREADCRUMB_TEXT}}` | Texto corto breadcrumb | "Seguridad Construccion" |
| `{{CATEGORIA}}` | Nombre categoria | "Guias Especializadas" |
| `{{CATEGORIA_SLUG}}` | Slug categoria | "guias" |
| `{{TIEMPO_LECTURA}}` | Tiempo estimado | "12 min lectura" |
| `{{IMAGEN_PRINCIPAL}}` | Nombre archivo imagen | "seguridad-construccion-cdmx.avif" |
| `{{IMAGEN_ALT}}` | Alt text imagen | "Guardias de seguridad en obra..." |
| `{{CONTENIDO}}` | HTML del articulo | "<div class='blog-article-toc...' |
| `{{FAQ_SCHEMA}}` | JSON-LD FAQPage | '{"@context":"https://schema.org"...' |
| `{{TAGS_HTML}}` | Links de tags | '<a href="#" class="tag">Tag1</a>...' |
| `{{FECHA_ISO}}` | Fecha publicacion | "2026-01-28" |

---

## ESTRUCTURA DEL JSON DE RESPUESTA

```json
{
    "titulo": "string (max 60 chars)",
    "slug": "string (url-friendly)",
    "metaDescription": "string (150-160 chars)",
    "metaKeywords": "string (comma-separated)",
    "breadcrumbText": "string (15-25 chars)",
    "categoria": "Guias Especializadas|Tendencias|Consejos Profesionales|Seguridad Corporativa|Seguridad Residencial",
    "categoriaSlug": "guias|tendencias|consejos|corporativo|residencial",
    "tiempoLectura": "X min lectura",
    "imagenPrincipal": "nombre-imagen.avif",
    "imagenAlt": "string (descripcion SEO)",
    "contenidoHTML": "string (HTML completo del articulo)",
    "faqSchema": [
        {"pregunta": "string", "respuesta": "string"},
        {"pregunta": "string", "respuesta": "string"},
        {"pregunta": "string", "respuesta": "string"},
        {"pregunta": "string", "respuesta": "string"},
        {"pregunta": "string", "respuesta": "string"}
    ],
    "tags": ["string", "string", "string", "string", "string"],
    "articulosRelacionados": ["slug1", "slug2", "slug3"]
}
```

---

## POST-PROCESAMIENTO MANUAL

Despues de que el workflow suba el articulo a GitHub:

### 1. Verificar el articulo
- Revisar que el HTML se renderice correctamente
- Verificar que los enlaces internos funcionen
- Comprobar que las imagenes carguen

### 2. Agregar imagen
- Crear/obtener imagen para `/img/blog/{{imagenPrincipal}}`
- Dimensiones: 1200x630px para OG
- Formato: .avif preferido

### 3. Actualizar blog/index.html
Agregar entrada al array `blogArticles`:

```javascript
{
    slug: "{{SLUG}}",
    title: "{{TITULO}}",
    excerpt: "{{META_DESCRIPTION}}",
    image: "img/blog/{{IMAGEN_PRINCIPAL}}",
    category: "{{CATEGORIA}}",
    categorySlug: "{{CATEGORIA_SLUG}}",
    readTime: "{{TIEMPO_LECTURA}}"
}
```

### 4. Commit y Push
```bash
git add blog/{{SLUG}}.html img/blog/{{IMAGEN_PRINCIPAL}}
git commit -m "Add article: {{TITULO}}"
git push
```

---

## IDEAS DE TEMAS PARA ARTICULOS

### Seguridad Corporativa
- Como implementar seguridad en parques industriales
- Prevencion de perdidas en retail: guia completa
- Seguridad para data centers y servidores
- Control de accesos para edificios corporativos

### Seguridad Residencial
- Seguridad para fraccionamientos cerrados
- Como evaluar la seguridad de tu condominio actual
- Tecnologia de seguridad para casas de lujo
- Prevencion de robo a casa habitacion en CDMX

### Tecnologia
- Inteligencia artificial en videovigilancia
- Camaras termicas para seguridad perimetral
- Integracion de sistemas de seguridad IoT
- Monitoreo remoto vs presencial: comparativa

### Procesos y Metodologia
- Como hacer un analisis de riesgos profesional
- Protocolos de emergencia para empresas
- Capacitacion de guardias: que buscar
- Verificacion de antecedentes: guia completa

### Sectores Especificos
- Seguridad para escuelas y universidades
- Proteccion de centros comerciales
- Seguridad en hoteles y resorts
- Vigilancia para estacionamientos publicos

---

## TROUBLESHOOTING

### Error: JSON invalido de la IA
- Verificar que el prompt solicite respuesta SOLO en JSON
- Aumentar max_tokens si el contenido se corta
- Usar modelo mas potente (GPT-4, Claude Opus)

### Error: Variables no reemplazadas
- Verificar que las variables esten exactamente como en el template
- Revisar que no haya espacios extra en los nombres

### Error: Imagen no carga
- Verificar que el archivo exista en `/img/blog/`
- Confirmar extension correcta (.avif)
- Revisar permisos del archivo

### Error: GitHub rechaza commit
- Verificar credenciales/token de GitHub
- Confirmar permisos de escritura en el repo
- Revisar que el branch exista

---

## METRICAS DE CALIDAD

Cada articulo generado debe cumplir:

- [ ] Titulo < 60 caracteres con keyword
- [ ] Meta description 150-160 chars
- [ ] Contenido > 1800 palabras
- [ ] 4+ secciones H2
- [ ] 5 preguntas FAQ
- [ ] 3+ enlaces internos
- [ ] Sin frases genericas de IA
- [ ] HTML valido y bien formateado
- [ ] JSON Schema correcto

---

## SOPORTE Y CONTACTO

Para dudas sobre este workflow:
- Revisar documentacion de N8N: https://docs.n8n.io
- OpenAI API: https://platform.openai.com/docs
- Anthropic API: https://docs.anthropic.com
- GitHub API: https://docs.github.com/en/rest

---

**Version:** 1.0
**Fecha:** 2026-01-28
**Sitio:** seguridad-privada.com.mx
