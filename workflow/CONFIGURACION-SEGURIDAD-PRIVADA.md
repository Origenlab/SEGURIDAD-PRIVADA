# CONFIGURACION DEL SITIO
## ORIGINS PRIVATE SECURITY

---

## DATOS DEL SITIO

```javascript
const SITE_CONFIG = {
    // Identidad
    siteName: "ORIGINS PRIVATE SECURITY",
    siteNameShort: "Seguridad Privada",
    domain: "seguridad-privada.com.mx",

    // Contacto
    phone: "+525530255580",
    phoneDisplay: "55 3025 5580",
    whatsapp: "525530255580",
    email: "contacto@seguridad-privada.com.mx",

    // Horario
    schedule: "Lun - Dom: 24 hrs",

    // Redes Sociales
    facebook: "https://www.facebook.com/originsprivatesecurity",
    instagram: "https://www.instagram.com/originsprivatesecurity",

    // Analytics
    rybbitSiteId: "1746096009d5",
    googleVerification: "googleb985b706e3017c36",

    // Colores
    primaryColor: "#1d1d1f",
    accentColor: "#0071e3",

    // Rutas
    blogPath: "/blog/",
    imagesPath: "/img/blog/",

    // GitHub (para subida automatica)
    githubRepo: "tu-usuario/seguridad-privada",
    githubBranch: "main",
    githubPath: "blog/"
};
```

---

## CATEGORIAS DISPONIBLES

| Nombre | Slug | Descripcion |
|--------|------|-------------|
| Guias Especializadas | `guias` | Articulos educativos completos sobre temas de seguridad |
| Tendencias | `tendencias` | Novedades y tendencias en tecnologia de seguridad |
| Consejos Profesionales | `consejos` | Tips practicos y recomendaciones |
| Seguridad Corporativa | `corporativo` | Contenido enfocado a empresas y oficinas |
| Seguridad Residencial | `residencial` | Contenido enfocado a condominios y hogares |

---

## SERVICIOS PARA ENLACES INTERNOS

### Seguridad Fisica
```
/guardias-de-seguridad-y-vigilancia.html
/guardias-intramuros.html
/patrullaje.html
/control-de-accesos.html
/prevencion-de-perdidas.html
```

### Seguridad Especializada
```
/seguridad-condominios.html
/seguridad-construccion.html
/seguridad-eventos.html
/seguridad-hospitalaria.html
```

### Tecnologia
```
/vigilancia-remota-cctv.html
/monitoreo-alarmas.html
/seguridad-gps-satelital.html
```

### Proteccion y Consultoria
```
/proteccion-ejecutiva.html
/custodia-de-mercancias.html
/consultoria-seguridad.html
/consultoria-analisis-riesgos.html
/investigaciones-confiabilidad.html
```

---

## ARTICULOS EXISTENTES

Usar estos slugs para articulos relacionados:

```javascript
const EXISTING_ARTICLES = [
    {
        slug: "seguridad-condominios-lujo-cdmx",
        title: "Seguridad para Condominios de Lujo en CDMX",
        category: "guias"
    },
    {
        slug: "tendencias-tecnologia-seguridad-2025",
        title: "Tecnologia de Seguridad: Tendencias 2025",
        category: "tendencias"
    },
    {
        slug: "errores-comunes-contratar-seguridad-privada-como-evitarlos",
        title: "7 Errores al Contratar Seguridad Privada",
        category: "consejos"
    },
    {
        slug: "como-elegir-empresa-seguridad-privada",
        title: "Como Elegir Empresa de Seguridad Privada",
        category: "guias"
    },
    {
        slug: "certificaciones-guardias-seguridad-cdmx",
        title: "Certificaciones de Guardias en CDMX",
        category: "guias"
    },
    {
        slug: "costo-seguridad-privada-condominios-cdmx",
        title: "Costo de Seguridad Privada para Condominios",
        category: "guias"
    },
    {
        slug: "control-accesos-inteligente-condominios-cdmx",
        title: "Control de Accesos Inteligente",
        category: "tendencias"
    },
    {
        slug: "tecnologia-cctv-vigilancia-remota-condominios",
        title: "Tecnologia CCTV y Vigilancia Remota",
        category: "tendencias"
    },
    {
        slug: "seguridad-fisica-vs-tecnologica-cual-necesita-tu-empresa",
        title: "Seguridad Fisica vs Tecnologica",
        category: "guias"
    },
    {
        slug: "amenazas-seguridad-condominios-alto-valor-mexico",
        title: "Amenazas de Seguridad en Condominios",
        category: "guias"
    },
    {
        slug: "mejores-practicas-control-accesos-condominios-lujo",
        title: "Mejores Practicas de Control de Accesos",
        category: "consejos"
    },
    {
        slug: "integracion-tecnologia-cctv-condominios-lujo-cdmx",
        title: "Integracion de Tecnologia CCTV",
        category: "tendencias"
    },
    {
        slug: "proteccion-vigilancia-complejos-residenciales-premium",
        title: "Proteccion para Complejos Residenciales",
        category: "guias"
    },
    {
        slug: "sistemas-seguridad-condominios-polanco-santa-fe",
        title: "Sistemas de Seguridad en Polanco y Santa Fe",
        category: "guias"
    },
    {
        slug: "como-reducir-costos-seguridad-privada-sin-sacrificar-calidad",
        title: "Como Reducir Costos de Seguridad",
        category: "consejos"
    },
    {
        slug: "monitoreo-alarmas-247-seguridad-integral-garantizada",
        title: "Monitoreo de Alarmas 24/7",
        category: "guias"
    }
];
```

---

## IMAGENES DISPONIBLES

### Directorio: /img/img-condominios/
```
guardias-intramuros-elite-condominios.avif
control-accesos-biometrico-residencial-lujo.avif
vigilancia-cctv-inteligente-condominios.avif
patrullaje-seguridad-condominios-alto-valor.avif
guardia-certificado-ssc-condominio-premium.avif
proteccion-ejecutiva-residentes-vip.avif
reconocimiento-facial-control-accesos.avif
seguridad-perimetral-condominios-premium.avif
tecnologia-seguridad-integral-condominios.avif
videovigilancia-profesional-residencial.avif
```

### Directorio: /img/img-index/
```
consultoria-de-seguridad.avif
tecnologia-monitoreo.avif
guardia-corporativo.avif
guardia-lobby.avif
monitoreo-camaras.avif
seguridad-satelital-gps.avif
```

### Directorio: /img/img-construccion/
```
guardias-seguridad-certificados-construccion.avif
seguridad-perimetral-construccion-cdmx.avif
control-accesos-personal-obra-construccion.avif
monitoreo-cctv-obras-construccion.avif
```

### Directorio: /img/img-eventos/
```
guardias-seguridad-eventos-privados.avif
control-accesos-eventos-corporativos.avif
proteccion-vip-eventos-exclusivos.avif
```

### Directorio: /img/img-hospitalaria/
```
guardias-seguridad-centros-medicos.avif
control-accesos-hospitales-cdmx.avif
```

---

## COBERTURA GEOGRAFICA

### CDMX - Zonas Premium
- Polanco
- Lomas de Chapultepec
- Bosques de las Lomas
- Santa Fe
- Pedregal
- Coyoacan
- Del Valle
- Roma
- Condesa
- Anzures
- Napoles

### Estado de Mexico
- Interlomas
- Bosque Real
- Huixquilucan
- Naucalpan
- Tlalnepantla
- Satelite
- Metepec
- Toluca

---

## CREDENCIALES Y DIFERENCIADORES

- +15 anos de experiencia
- +500 clientes protegidos
- 100% personal certificado SSC
- Certificacion ISO 9001
- Atencion 24/7, 365 dias
- Supervision GPS en tiempo real
- Protocolos de emergencia documentados

---

## KEYWORDS PRINCIPALES POR SERVICIO

### Guardias de Seguridad
```
guardias de seguridad CDMX
seguridad privada Mexico
guardias certificados SSC
vigilancia privada
elementos de seguridad
```

### Seguridad Condominios
```
seguridad para condominios
seguridad residencial CDMX
guardias para fraccionamientos
seguridad condominios de lujo
vigilancia condominios Polanco
```

### CCTV y Monitoreo
```
vigilancia CCTV
monitoreo de camaras
videovigilancia profesional
monitoreo remoto 24/7
sistema CCTV empresarial
```

### Control de Accesos
```
control de accesos biometrico
sistemas de acceso vehicular
control de visitantes
torniquetes de seguridad
```

### Proteccion Ejecutiva
```
proteccion ejecutiva CDMX
escoltas profesionales
guardaespaldas certificados
seguridad para empresarios
```

---

## MENSAJES PREDEFINIDOS WHATSAPP

```javascript
const WHATSAPP_MESSAGES = {
    general: "Hola, me interesa informacion sobre sus servicios de seguridad privada",
    evaluacion: "Hola, me interesa una evaluacion de seguridad para mi empresa/condominio",
    cotizacion: "Hola, me gustaria solicitar una cotizacion de guardias de seguridad",
    articulo: "Hola, lei el articulo sobre {{TEMA}} y me interesa mas informacion",
    urgente: "Hola, necesito atencion urgente sobre un tema de seguridad"
};
```

---

## NOTAS IMPORTANTES

1. **Imagenes**: Crear carpeta `/img/blog/` para imagenes de nuevos articulos
2. **Formato**: Usar formato .avif para todas las imagenes nuevas
3. **Dimensiones**: Imagen principal 1200x630px para OG
4. **Nombres**: Usar formato `descripcion-keyword-seo.avif`
5. **Alt text**: Siempre incluir descripcion SEO en alt

---

## ACTUALIZACION DEL BLOG INDEX

Despues de crear un nuevo articulo, actualizar `blog/index.html`:

1. Agregar el articulo al array `blogArticles` en el JavaScript
2. Mantener orden cronologico (mas reciente primero)
3. Verificar que la imagen existe en la ruta correcta

```javascript
// Ejemplo de entrada para blogArticles
{
    slug: "nuevo-articulo-slug",
    title: "Titulo del Nuevo Articulo",
    excerpt: "Descripcion corta del articulo para la tarjeta...",
    image: "img/blog/imagen-articulo.avif",
    category: "Guias Especializadas",
    categorySlug: "guias",
    readTime: "10 min"
}
```
