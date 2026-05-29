#!/bin/bash
# test-redirects.sh
# Valida que cada redirección 301 declarada en public/_redirects funciona.
# Uso: ./test-redirects.sh [DOMAIN] [REDIRECTS_FILE]

DOMAIN="${1:-https://seguridad-privada.com.mx}"
REDIRECTS_FILE="${2:-public/_redirects}"

if [ ! -f "$REDIRECTS_FILE" ]; then
  echo "ERROR: $REDIRECTS_FILE no encontrado."
  exit 1
fi

PASS=0
FAIL=0

echo "Auditando redirecciones contra $DOMAIN..."
echo ""

while IFS= read -r line; do
  # Skip comments and empty lines
  [[ "$line" =~ ^#.*$ ]] && continue
  [[ -z "${line// }" ]] && continue

  # Parse origin dest status
  origin=$(echo "$line" | awk '{print $1}')
  dest=$(echo "$line" | awk '{print $2}')
  status=$(echo "$line" | awk '{print $3}')

  [[ -z "$origin" || -z "$dest" ]] && continue

  # Get actual redirect chain
  result=$(curl -sIL -A "Mozilla/5.0" -o /dev/null -w "%{http_code}|%{url_effective}" "$DOMAIN$origin")
  http_final=$(echo "$result" | cut -d'|' -f1)
  url_final=$(echo "$result" | cut -d'|' -f2)
  url_final_path=$(echo "$url_final" | sed "s|$DOMAIN||")

  # Get the FIRST hop status (no -L)
  first_status=$(curl -sI -A "Mozilla/5.0" -o /dev/null -w "%{http_code}" "$DOMAIN$origin")

  expected_status="${status:-301}"

  if [ "$first_status" = "$expected_status" ] && [ "$url_final_path" = "$dest" ]; then
    echo "✓ OK    $origin → $dest [$first_status]"
    PASS=$((PASS+1))
  else
    echo "✗ FAIL  $origin → esperaba $expected_status hacia $dest"
    echo "        obtuvo: $first_status → $url_final_path"
    FAIL=$((FAIL+1))
  fi
done < "$REDIRECTS_FILE"

echo ""
echo "Resumen: $PASS OK, $FAIL FAIL"

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
exit 0
