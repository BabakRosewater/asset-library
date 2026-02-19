# Asset Library

Centralized source-of-truth for brand and department assets.

## Repository layout

- `src/` — editable working files (AI/FIG/PSD/DOCX/PPTX/etc.)
- `dist/` — import-ready production assets (SVG/PNG/PDF/icons/logos)
- `docs/` — governance, naming, and usage documentation
- `scripts/` — optional automation for manifest generation and optimization

## Quick start

1. Place new or revised working files in `src/` under the proper domain.
2. Export approved deliverables into `dist/`.
3. Update `dist/manifest.json` with metadata.
4. Follow naming rules in `docs/naming-conventions.md`.
5. For React/UI training visuals, follow `docs/training-asset-placement.md`.

## Asset lifecycle

Draft (`src/`) → Review → Approved (`dist/`) → Deprecated (`dist/_deprecated/`)
