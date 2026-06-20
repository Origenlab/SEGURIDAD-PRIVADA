#!/bin/bash
# health-check.sh
# Verifica que todas las URLs críticas responden 200 OK.
# Uso: ./health-check.sh [DOMAIN]

DOMAIN="${1:-https://seguridad-privada.com.mx}"

URLS_CRITICAS=(
  "/"
  "/nosotros"
  "/contacto"
  "/emergencias"
  "/blog"
  "/zonas"
  "/servicios"

  # 4 hubs nuevos (cuando existan)
  "/personal-y-vigilancia/"
  "/tecnologia-y-monitoreo/"
  "/protocolos-y-consultoria/"
  "/atencion-al-comite/"

  # /comunidades cuando exista
  "/comunidades/"
  "/comunidades/torres-verticales/"
  "/comunidades/fraccionamientos-horizontales/"
  "/comunidades/cotos-cerrados/"
  "/comunidades/residenciales-premium/"

  # Zonas reales
  "/zonas/alvaro-obregon"
  "/zonas/atizapan"
  "/zonas/benito-juarez"
  "/zonas/coyoacan"
  "/zonas/cuauhtemoc"
  "/zonas/gustavo-a-madero"
  "/zonas/iztapalapa"
  "/zonas/miguel-hidalgo"
  "/zonas/naucalpan"
  "/zonas/tlalnepantla"
  "/zonas/xochimilco"

  # Sitemap
  "/sitemap.xml"
  "/sitemap-index.xml"
  "/sitemap-0.xml"
  "/robots.txt"
)

PASS=0
FAIL=0
WARN=0

printf "%-60s %-7s %-9s %s\n" "URL" "STATUS" "SIZE" "RESULT"
printf "%-60s %-7s %-9s %s\n" "---" "------" "----" "------"

for u in "${URLS_CRITICAS[@]}"; do
  result=$(curl -sI -A "Mozilla/5.0" -o /dev/null -w "%{http_code}|%{size_download}|%{redirect_url}" "$DOMAIN$u")
  status=$(echo "$result" | cut -d'|' -f1)
  size=$(echo "$result" | cut -d'|' -f2)
  redir=$(echo "$result" | cut -d'|' -f3)

  verdict="OK"
  if [ "$status" = "200" ]; then
    verdict="✓ OK"
    PASS=$((PASS+1))
  elif [ "$status" = "301" ] || [ "$status" = "302" ]; then
    verdict="↪ REDIRECT → $redir"
    WARN=$((WARN+1))
  elif [ "$status" = "404" ]; then
    verdict="✗ NOT FOUND"
    FAIL=$((FAIL+1))
  else
    verdict="✗ ERROR ($status)"
    FAIL=$((FAIL+1))
  fi

  printf "%-60s %-7s %-9s %s\n" "$u" "$status" "$size" "$verdict"
done

echo ""
echo "Resumen: $PASS OK, $WARN REDIRECT, $FAIL FAIL"

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
exit 0
