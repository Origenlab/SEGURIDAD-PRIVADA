#!/bin/bash
# validate-schemas.sh
# Extrae todos los bloques JSON-LD de las URLs indicadas y valida que sean JSON válido.
# Uso: ./validate-schemas.sh [DOMAIN]

DOMAIN="${1:-https://seguridad-privada.com.mx}"

URLS=(
  "/"
  "/nosotros"
  "/contacto"
  "/emergencias"
  "/blog"
  "/zonas"
  "/zonas/miguel-hidalgo"
  "/servicios"
  "/servicios/seguridad-condominios"
  "/servicios/guardias-intramuros"
  "/servicios/vigilancia-remota-cctv"

  # Cuando existan los hubs nuevos:
  "/personal-y-vigilancia/"
  "/tecnologia-y-monitoreo/"
  "/protocolos-y-consultoria/"
  "/atencion-al-comite/"
)

PASS=0
FAIL=0

for url in "${URLS[@]}"; do
  echo ""
  echo "═══ $url ═══"
  status=$(curl -sI -A "Mozilla/5.0" -o /dev/null -w "%{http_code}" "$DOMAIN$url")
  if [ "$status" != "200" ]; then
    echo "  STATUS: $status (omitiendo)"
    continue
  fi

  curl -sL -A "Mozilla/5.0" "$DOMAIN$url" | python3 - << 'PY'
import sys, re, json
html = sys.stdin.read()
blocks = re.findall(r'<script type="application/ld\+json">(.+?)</script>', html, re.DOTALL)
print(f"  Bloques JSON-LD: {len(blocks)}")
all_ok = True
for i, b in enumerate(blocks):
    try:
        d = json.loads(b)
        if isinstance(d, list):
            types = [str(item.get('@type', '?')) for item in d]
        else:
            t = d.get('@type', '?')
            types = [t] if isinstance(t, str) else [str(t)]
        print(f"  ✓ Bloque {i}: @type = {types}")
    except json.JSONDecodeError as e:
        print(f"  ✗ Bloque {i}: ERROR JSON — {e}")
        all_ok = False
sys.exit(0 if all_ok else 1)
PY
  if [ $? -eq 0 ]; then
    PASS=$((PASS+1))
  else
    FAIL=$((FAIL+1))
  fi
done

echo ""
echo "═══════════════════════════"
echo "Resumen: $PASS URLs con schema válido, $FAIL con errores"
if [ "$FAIL" -gt 0 ]; then exit 1; fi
exit 0
