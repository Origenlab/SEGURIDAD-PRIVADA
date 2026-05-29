#!/bin/bash
# audit-zonas.sh
# Detecta cuáles URLs /zonas/* tienen página real vs cuáles devuelven home (soft 404).
# Uso: ./audit-zonas.sh [DOMAIN]
# Ejemplo: ./audit-zonas.sh https://seguridad-privada.com.mx

DOMAIN="${1:-https://seguridad-privada.com.mx}"

# Tamaño del home (para detectar soft 404 — actualizar si cambia)
HOME_SIZE=$(curl -sL -A "Mozilla/5.0" "$DOMAIN/" | wc -c)
HOME_TITLE_PATTERN="Empresa de Seguridad Privada para Condominios CDMX | ORIGINS"

echo "Domain: $DOMAIN"
echo "Home size (baseline para detectar soft 404): $HOME_SIZE bytes"
echo ""

# Lista exhaustiva de alcaldías CDMX + municipios Edomex
zonas=(
  # CDMX 16 alcaldías
  "alvaro-obregon" "atizapan" "azcapotzalco" "benito-juarez" "coyoacan"
  "cuajimalpa" "cuauhtemoc" "gustavo-a-madero" "iztacalco" "iztapalapa"
  "magdalena-contreras" "miguel-hidalgo" "milpa-alta" "tlahuac"
  "tlalpan" "venustiano-carranza" "xochimilco"
  # Edomex prioritarios
  "huixquilucan" "naucalpan" "tlalnepantla" "cuautitlan-izcalli"
  "metepec" "toluca" "coacalco"
)

REAL=0
SOFT404=0
NOTFOUND=0

printf "%-25s %-7s %-9s %s\n" "ZONA" "STATUS" "SIZE" "VEREDICTO"
printf "%-25s %-7s %-9s %s\n" "----" "------" "----" "---------"

for z in "${zonas[@]}"; do
  url="$DOMAIN/zonas/$z"
  resp=$(curl -sL -A "Mozilla/5.0" -w "\n___STATUS___%{http_code}" "$url" 2>/dev/null)
  status=$(echo "$resp" | tail -1 | sed 's/___STATUS___//')
  body=$(echo "$resp" | sed '$d')
  size=$(echo -n "$body" | wc -c)
  title=$(echo "$body" | grep -oE '<title>[^<]+</title>' | head -1 | sed 's/<\/*title>//g')

  verdict=""
  if [ "$status" = "404" ]; then
    verdict="NOT_FOUND (404 real)"
    NOTFOUND=$((NOTFOUND+1))
  elif [ "$size" = "$HOME_SIZE" ] && [[ "$title" == "$HOME_TITLE_PATTERN" ]]; then
    verdict="SOFT_404 (devuelve home) — requiere fix"
    SOFT404=$((SOFT404+1))
  elif [ "$status" = "200" ]; then
    verdict="ZONA_REAL ✓"
    REAL=$((REAL+1))
  else
    verdict="STATUS_RARO ($status)"
  fi

  printf "%-25s %-7s %-9s %s\n" "$z" "$status" "$size" "$verdict"
done

echo ""
echo "Resumen:"
echo "  Zonas reales con contenido único:  $REAL"
echo "  Zonas en soft 404 (devuelven home): $SOFT404  ← CRÍTICO: fix antes de crear nuevas"
echo "  Zonas con 404 real (correcto):     $NOTFOUND"
echo ""
if [ "$SOFT404" -gt 0 ]; then
  echo "[ACCIÓN REQUERIDA] Eliminar el fallback que devuelve home en /zonas/[zona].astro."
  echo "Mientras se crean las páginas, Astro debe devolver 404 nativo (no home)."
  exit 1
fi
exit 0
