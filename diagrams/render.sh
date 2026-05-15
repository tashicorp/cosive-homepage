#!/bin/bash
# Render all D2 source diagrams to PNG
# Usage: ./diagrams/render.sh [optional-specific-file.d2]

set -euo pipefail
cd "$(dirname "$0")"
mkdir -p out

FONT_DIR="$(pwd)/fonts"

render() {
  local f="$1"
  local name
  name=$(basename "$f" .d2)
  echo "Rendering $f → out/${name}.png"
  d2 --theme 0 --pad 20 --scale 2 \
    --font-regular "$FONT_DIR/Manrope-Variable.ttf" \
    --font-bold "$FONT_DIR/Manrope-Variable.ttf" \
    --font-semibold "$FONT_DIR/Manrope-Variable.ttf" \
    --font-italic "$FONT_DIR/Manrope-Variable.ttf" \
    "$f" "out/${name}.png"
}

if [ $# -gt 0 ]; then
  # Render specific file(s)
  for f in "$@"; do
    render "$f"
  done
else
  # Render all .d2 files in src/ (skip shared config files)
  for f in src/*.d2; do
    [ -f "$f" ] || continue
    [[ "$(basename "$f")" == "cosive.d2" ]] && continue
    render "$f"
  done
fi

echo "Done."
